const data = require("./../json/product-api.json");

var dayjs = require("dayjs");

// let data = JSON.parse(msg.payload);
// node.warn(data);

const item = [];
var formatData = "";
for (let index = 0; index < data.data.length; index++) {
  formatData += `
    ${data.data[index].priority}|
    ${data.data[index].class_code}|
    ${data.data[index].class_image}|
    ${data.data[index].class_url}|
  `;
  for (
    let indexProd = 0;
    indexProd < data.data[index].products.length;
    indexProd++
  ) {
    var product_image = data.data[index].products[indexProd].product_image;
    product_image.toString() != "null"
      ? (product_image = product_image)
      : (product_image = "https://imgur.com/VCMGiHY.png");

    formatData += `
        ${data.data[index].products[indexProd].product_code}|
        ${data.data[index].products[indexProd].product_name}|
        ${data.data[index].products[indexProd].product_type}|
        ${data.data[index].products[indexProd].product_barcode}|
        ${product_image}|
        ${data.data[index].products[indexProd].product_url}|
        ${data.data[index].products[indexProd].product_priority}
    `;
    formatData += "|";
    formatData += "end_list";
  }
  formatData += "end_card|";
}
var splitDataLayer0 = formatData.split("Products");
console.log();
// node.warn(item);

// msg.payload = {
//   info: {
//     info_format: "items",
//     square_image: false,
//     items: item,
//   },
//   config: {
//     combine_output: false,
//   },
// };

// return msg;

node.warn(msg);
let data = JSON.parse(msg.payload);
node.warn(data);
// msg.payload = Buffer.from(data).toString("base64");

var formatData = "";
for (let index = 0; index < data.data.length; index++) {
  for (let index = 0; index < datas.data.length; index++) {
    var carousels = {
      label: datas.data[index].promotion_name,
      subtitle: datas.data[index].details,
      img: datas.data[index],
      btns: "รายละเอียด",
      link: datas.data[index].promotion_page,
    };
    items.push(carousels);
  }
  formatData += `${data.data[index].priority}|${data.data[index].class_code}|${data.data[index].class_image}|${data.data[index].class_url}|`;
  for (
    let indexProd = 0;
    indexProd < data.data[index].products.length;
    indexProd++
  ) {
    formatData += `${data.data[index].products[indexProd].product_code}|${data.data[index].products[indexProd].product_name}|${data.data[index].products[indexProd].product_type}|${data.data[index].products[indexProd].product_barcode}|${data.data[index].products[indexProd].product_image}|${data.data[index].products[indexProd].product_url}|${data.data[index].products[indexProd].product_priority}`;
    formatData += "|";
  }
}

msg.payload = formatData;
msg.payload.flexType = "Products";

return msg;
