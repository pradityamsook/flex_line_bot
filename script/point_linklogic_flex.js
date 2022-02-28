/**
 * function format number to add commas without dot-number
 * e.g. 1996 -> 1,996
 */
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/*
 *function format date to Thai data
 * but years reference from A.D. (e.g. 2022)
 */
function toThaiDateString(date) {
    // let year = date.getFullYear() + 543; //uncomment if you want to convert to bhuddhist's year.
    let year = date.getFullYear();
    let month = ("0" + date.getMonth() + 1).slice(-2);
    let numOfDay = date.getDate();

    let hour = date.getHours().toString().padStart(2, "0");
    let minutes = date.getMinutes().toString().padStart(2, "0");
    let second = date.getSeconds().toString().padStart(2, "0");

    return `${numOfDay} / ${month} / ${year}`;
}

node.warn(msg);
let data = msg.data;
let province = data.data && data.data.province ? data.data.province : "-";
let collection = msg.payload || msg.cf_point_balance_flex;
node.warn(collection);
let getUpdatedAt = data.data.point.cash.updatedAt.split("-");
let setPointExpired = Object.keys(data.data.point.point.pointExpire[0])
    .map((key) => data.data.point.point.pointExpire[0][key])
    .splice(2, 12);
let date = new Date();
node.error(setPointExpired);
let pointExpire = setPointExpired[date.getMonth() + 1];
let pointExpireYear = data.data.point.point.pointExpire[0].year;
let pointExpireMonth = (date.getMonth() + 1).toString().padStart(2, "0");
let totalPointBalance = numberWithCommas(Math.round(data.data.point.point.totalBalance));
let totalCashBalance = numberWithCommas(Math.round(data.data.point.cash.totalBalance));
let updatedAt = `${getUpdatedAt[2]} / ${getUpdatedAt[1]} / ${getUpdatedAt[0]}`;
var items = [];

let getTags = msg.cf_point_balance_flex.hits;
var tagsJson = [];
for (let index = 0; index < getTags.length; index++) {
    tagsJson.push(getTags[index]._source.item.json);
}
node.warn(tagsJson);

let btn = tagsJson[0].btn.split(",");
let url = tagsJson[0].url.split(",");

node.warn(btn[0]);

var carousels = {
    label: data.data.name,
    subtitle: `search point|
  Bp Number:${data.data.code}|
  Province:${province}|
  Total Point:${totalPointBalance}|
  Point Expire:${pointExpire}|
  Point Expire Year:${pointExpireYear}|
  Point Expire Month:${pointExpireMonth}|
  Total Cash Balance:${totalCashBalance}|
  Updated At:${updatedAt}`,
    img: "https://upload.convolab.ai/scg-promptplus-dev%2Fd01905f2-60bc-47cc-b912-cde779a028ed.png",
    btns: `${btn}`,
    link: `${url}`,
};
items.push(carousels);

msg.payload = {
    info: {
        info_format: "items",
        square_image: false,
        items: items,
    },
    config: {
        combine_output: false,
    },
};
// node.warn(msg);
return msg;
