var dayjs = require("dayjs");
console.log(dayjs());
// node.warn(msg.payload.data)
// let data = JSON.parse(msg.payload);
// node.warn(data.data);

const item = [];
for (let index = 0; index < data.data.length; data++) {
  var carousel = {
    label: data.data[index].promotion_name,
    subtitle: data.data[index].details,
    img: data.data[index],
    btns: "รายละเอียด",
  };
  item.push(carousel);
}

msg.payload = {
  config: {
    question: "กรุณาลงทะเบียน",
  },
  info: {
    info_format: "items",
    question_first: true,
    items: item,
  },
};
// return msg;
