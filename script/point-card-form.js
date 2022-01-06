let payload = require('../json/point-data-api.json');
let msg = { payload };

node.warn(msg);
let data = JSON.parse(msg.payload);
node.warn(data);

var items = [];
var carouselsPromotion = {
  label: data.name,
  subtitle: `${}`,
  img: promotion.image,
  btns: "คลิกเลย",
  link: promotion.url,
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
