node.warn(msg);
let data = JSON.parse(msg.data);
let getTags = msg.product_tags.hits;
node.warn(data);

var tagsJson = [];
for (let index = 0; index < getTags.length; index++) {
  tagsJson.push(getTags[index]._source.item.json);
}
node.warn(getTags);
node.warn("taged");
var items = [];
let is_tags = "|";
for (let index = 0; index < data.data.products.length; index++) {
  if (data.data.products[index].is_changefamily === true)
    node.warn(tagsJson[0].Image);
  is_tags += `${tagsJson[0].Image}|`;
  if (data.data.products[index].is_special_point === true)
    node.warn(tagsJson[1].Image);
  is_tags += `${tagsJson[1].Image}|`;
  if (data.data.products[index].is_wallet === true)
    node.warn(tagsJson[2].Image);
  is_tags += `${tagsJson[2].Image}|`;
  if (data.data.products[index].is_freegoods === true)
    node.warn(tagsJson[3].Image);
  is_tags += `${tagsJson[3].Image}|`;

  node.warn(is_tags);

  var carousels = {
    label: data.data.products[index].product_name,
    subtitle: `search product keyword${is_tags}`,
    img: data.data.products[index].product_image,
    btns: "คลิกเลย",
    link: data.data.products[index].product_url,
  };
  items.push(carousels);
}
node.warn(is_tags);
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
