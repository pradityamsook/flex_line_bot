node.warn(msg);
let data = msg.data;
let getTags = msg.nontification_flex.hits;
node.warn(data);

let items = [];
let urlImages = "";
let url = "";
let btn = "";

urlImages = getTags[0]._source.item.json.image;
btn = getTags[0]._source.item.json.btn;

function formatMoneyTHB(money) {
    return money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

let dateTime = data.purchase_date.split("T");
let date = dateTime[0].split("-");
let time = dateTime[1].split(":");

let years = Number(date[0]);
let months = Number(date[1]);
let days = Number(date[2]);

let hours = Number(time[0]);
let minutes = Number(time[1]);
let seconds = Math.floor(Number(time[2]));
let formatDate = new Date(Date.UTC(years, months, days, hours, minutes, seconds));

let thDate = formatDate.toLocaleString("th-TH", {
    timeZone: "Asia/Bangkok",
});

var carousels = {
    label: data.order_number,
    subtitle: `po status|Order_number:${data.order_number}|Order status:${data.order_status}|Net amount:${formatMoneyTHB(
        data.net_amount.toFixed(2),
    )}|Total discount:${formatMoneyTHB(data.total_discount.toFixed(2))}|Total sale:${formatMoneyTHB(data.total_sale.toFixed(2))}|
    Dealer name:${data.dealer_name}|Purchase date:${thDate}`,
    img: `${urlImages}`,
    btns: `${btn}`,
    link: `${data.order_history_url}`,
};
items.push(carousels);
node.warn(carousels);

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
node.warn(msg);
return msg;
