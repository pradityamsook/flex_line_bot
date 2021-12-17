var dayjs = require("dayjs");

let data = JSON.parse(msg.payload);
node.warn(data);

const item = [];
for (let index = 0; index < data.data.length; index++) {
  var carousel = {
    label: data.data[index].class_name,
    subtitle: data.data[index].class_code,
    img: data.data[index].class_image,
    text_list: data.data[index].products,
    btns: "ชมสินค้ากลุ่มนี้เพิ่มเติม",
  };
  item.push(carousel);
}

node.warn(item);

msg.payload = {
  info: {
    info_format: "items",
    square_image: false,
    items: item,
  },
  config: {
    combine_output: false,
  },
};

return msg;
