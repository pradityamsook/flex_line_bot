var dayjs = require("dayjs");
var utc = require("dayjs/plugin/utc");
var timezone = require("dayjs/plugin/timezone"); // dependent on utc plugin
require("dayjs/locale/th");

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Bangkok");
// console.log(dayjs())

var data = require("../json/api-promotion-data-set.json");

// console.log(dayjs());
// node.warn(msg.payload.data)
// let data = JSON.parse(msg.payload);
// node.warn(data.data);

for (let index = 0; index < data.data.length; index++) {
  console.log(formatDate(data.data[index].valid_from));
}

function formatDate(date) {
  return dayjs(date).locale("th").add(543, "year").format("DD MMM YYYY");
}
// const item = [];
// for (let index = 0; index < data.data.length; index++) {
//   var carousel = {
//     label: data.data[index].promotion_name,
//     subtitle: `${data.data[index].details}|${data.data[index].promotion_page}`,
//     img: data.data[index],
//     btns: "รายละเอียด",
//     // link: data.data[index].promotion_page,
//   };
//   item.push(carousel);
// }

// msg.payload = {
//   config: {
//     question: "กรุณาลงทะเบียน",
//   },
//   info: {
//     info_format: "items",
//     question_first: true,
//     items: item,
//   },
// };
// return msg;
