let payload = require("../json/point-data-api.json");
let msg = { payload };

node.warn(msg);
let data = JSON.parse(msg.payload);
node.warn(data);

var items = [];
var carouselsPromotion = {
  label: data.name,
  subtitle: `${data.id}|${data.totalBalance}|${data.pointExpire[0]}|${data.pointExpire[1]}|${data.pointExpire[2]}|${data.cash.totalBalance}`,
  img: "",
  btns: "คลิกเลย",
  link: "",
};
items.push(carouselsPromotion);

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

return msg;
