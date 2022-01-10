// node.warn(msg);
let data = JSON.parse(msg.payload);
let getTags = msg.product_tags.hits;
node.warn(data);

var tagsJson = [];
for (let index = 0; index < getTags.length; index++) {
  tagsJson.push(getTags[index]._source.item.json);
}

var items = [];
var is_tags = "";
for (let index = 0; index < data.products.length; index++) {
  if (data.data.products[index].is_changefamily === true)
    is_tags += `|${tagsJson[0].json.Image}|`;
  if (data.data.products[index].is_special_point === true)
    is_tags += `|${tagsJson[1].json.Image}|`;
  if (data.data.products[index].is_wallet === true)
    is_tags += `|${tagsJson[2].json.Image}|`;
  if (data.data.products[index].is_freegoods === true)
    is_tags += `|${tagsJson[3].json.Image}|`;
  var carousels = {
    label: data.data.products[index].name,
    subtitle: `search product keyword|${is_tags}`,
    img: data.data.products[index].products_image,
    btns: "คลิกเลย",
    link: data.data.products[index].products_url,
  };
  items.push(carousels);
}

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
