let payload = require("../json/point-data-api.json");
let msg = { payload };

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// node.warn(msg);
let data = JSON.parse(msg.payload);
// node.warn(data);
var setPointExpire = Object.keys(data.data.point.point.pointExpire[0])
  .map((key) => data.data.point.point.pointExpire[0][key])
  .splice(2, 12);
let pointExpireId = data.data.point.point.pointExpire[0].id;
let pointExpireYear = data.data.point.point.pointExpire[0].year;
let pointExpireMonth = data.data.point.point.pointExpire[0].month_1;
let totalBalance = numberWithCommas(
  Math.round(data.data.point.point.totalBalance)
);
let totalCashBalance = numberWithCommas(
  Math.round(data.data.point.cash.totalBalance)
);
var items = [];

var carousels = {
  label: data.data.name,
  subtitle: `search point|${data.data.id}|${totalBalance}|${pointExpireId}|${pointExpireYear}|${pointExpireMonth}|${totalCashBalance}`,
  img: "https://upload.convolab.ai/scg-promptplus-dev%2F3ddf5388-d2f9-4df6-ac66-dc697f49eb12.png",
  btns: "คลิกเลย",
  link: "https://upload.convolab.ai/scg-promptplus-dev%2F3ddf5388-d2f9-4df6-ac66-dc697f49eb12.png",
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
// return msg;
