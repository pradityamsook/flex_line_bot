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
    formatData += `
        ${data.data[index].products[indexProd].product_code}|
        ${data.data[index].products[indexProd].product_name}|
        ${data.data[index].products[indexProd].product_type}|
        ${data.data[index].products[indexProd].product_barcode}|
        ${data.data[index].products[indexProd].product_image}|
        ${data.data[index].products[indexProd].product_url}|
        ${data.data[index].products[indexProd].product_priority}
    `;
    formatData += "|";
  }

  // console.log(data.data[index]);
  // var carousel = {
  //   label: data.data[index].class_name,
  //   subtitle: data.data[index].class_code,
  //   img: data.data[index].class_image,
  //   text_list: data.data[index].products,
  //   btns: "ชมสินค้ากลุ่มนี้เพิ่มเติม",
  // };
  // item.push(carousel);
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
