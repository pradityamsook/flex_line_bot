node.warn(msg);

function formatMoneyTHB(money) {
  return money.toLocaleString("th-TH", {
    style: "currency",
    currency: "THB",
  });
}
let data = {};
if (
  msg.context.search_product.products &&
  msg.context.search_product.products.length > 0
) {
  data = msg.context.search_product.products;
} else {
  data = msg.context.search_similar_products.products;
}

// node.warn(data);
let getTags = msg.product_tags.hits; // data from catalogue(entity).
var tagsJson = [];
for (let index = 0; index < getTags.length; index++) {
  //use data from catalogue for inplement image on flex messages.
  tagsJson.push(getTags[index]._source.item.json);
}

var items = [];
let is_tags = "search product keyword|";
for (let index = 0; index <= data.length && index <= 9; index++) {
  var base_price = data[index].base_price;
  var net_price = data[index].net_price;
  var discount_percentage = data[index].discount_percentage;
  var unit = data[index].unit;
  var eta_text = data[index].eta_text;
  var product_url = encodeURI(data[index].product_url);
  var sale_price = net_price;
  var product_image = data[index].product_image;

  if (data[index].is_changfamily === "true") {
    is_tags += "logo|";
    is_tags += `${tagsJson[0].Image}|`;
  } else if (data[index].is_changfamily === "false") {
    is_tags += "!logo|";
    is_tags += `${tagsJson[0].Image}|`;
  }

  if (data[index].is_special_point === "true") {
    is_tags += "points|";
    is_tags += `${tagsJson[1].Image}|`;
  } else if (data[index].is_special_point === "false") {
    is_tags += "!points|";
    is_tags += `${tagsJson[1].Image}|`;
  }

  if (data[index].is_wallet === "true") {
    is_tags += "wallet|";
    is_tags += `${tagsJson[2].Image}|`;
  } else if (data[index].is_wallet === "false") {
    is_tags += "!wallet|";
    is_tags += `${tagsJson[2].Image}|`;
  }

  if (data[index].is_freegoods === "true") {
    is_tags += "free goods|";
    is_tags += `${tagsJson[3].Image}|`;
  } else if (data[index].is_freegoods === "false") {
    is_tags += "!free goods|";
    is_tags += `${tagsJson[3].Image}|`;
  }

  if (data[index].is_flash_sale === "true") {
    is_tags += "flash sale|";
    is_tags += `${tagsJson[5].Image}|`;
    sale_price = (discount_percentage / 100) * net_price + net_price;
  } else if (data[index].is_flash_sale === "false") {
    is_tags += "!flash sale|";
    is_tags += `${tagsJson[5].Image}|`;
  }

  is_tags += `${tagsJson[6].Image}|`;

  product_image === null
    ? (product_image = `${tagsJson[7].Image}`)
    : (product_image = product_image);

  var carousels = {
    label: data[index].product_name,
    subtitle:
      `${is_tags}` +
      `${formatMoneyTHB(sale_price)}` +
      `|${formatMoneyTHB(base_price)}` +
      `|${formatMoneyTHB(net_price)}` +
      `|${discount_percentage}` +
      `|${unit}` +
      `|${eta_text}` +
      `|${product_url}`,
    img: encodeURI(product_image),
    btns: "คลิกดูสินค้า",
    link: data[index].product_url,
  };

  if (index === data.length || index === 9) {
    carousels.label = `${tagsJson[8].Detail}`;
    carousels.subtitle = `${tagsJson[8].url}`;
    carousels.img = `${tagsJson[8].Image}`;
    carousels.link = `${tagsJson[8].url}`;
  }

  carousels = JSON.parse(JSON.stringify(carousels));
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
