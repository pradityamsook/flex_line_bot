// node.warn(msg);

function formatMoneyTHB(money) {
  return money.toLocaleString("th-TH", {
    style: "currency",
    currency: "THB",
  });
}

let data = JSON.parse(msg.data);
let getTags = msg.product_tags.hits; // data from catalogue(entity).
// node.warn(data);

var tagsJson = [];
for (let index = 0; index < getTags.length; index++) {
  //use data from catalogue for inplement image on flex messages.
  tagsJson.push(getTags[index]._source.item.json);
}

var items = [];
let is_tags = "search product keyword|";
for (let index = 0; index < data.data.products.length; index++) {
  var base_price = data.data.products[index].base_price;
  var net_price = data.data.products[index].net_price;
  var discount_percentage = data.data.products[index].discount_percentage;
  var unit = data.data.products[index].unit;
  var eta_text = data.data.products[index].eta_text;
  var product_url = data.data.products[index].product_url;
  var sale_price = net_price;

  if (data.data.products[index].is_changfamily === "true") {
    is_tags += "logo|";
    is_tags += `${tagsJson[0].Image}|`;
  } else if (data.data.products[index].is_changfamily === "false") {
    is_tags += "!logo|";
    is_tags += `${tagsJson[0].Image}|`;
  }

  if (data.data.products[index].is_special_point === "true") {
    is_tags += "points|";
    is_tags += `${tagsJson[1].Image}|`;
  } else if (data.data.products[index].is_special_point === "false") {
    is_tags += "!points|";
    is_tags += `${tagsJson[1].Image}|`;
  }

  if (data.data.products[index].is_wallet === "true") {
    is_tags += "wallet|";
    is_tags += `${tagsJson[2].Image}|`;
  } else if (data.data.products[index].is_wallet === "false") {
    is_tags += "!wallet|";
    is_tags += `${tagsJson[2].Image}|`;
  }

  if (data.data.products[index].is_freegoods === "true") {
    is_tags += "free goods|";
    is_tags += `${tagsJson[3].Image}|`;
  } else if (data.data.products[index].is_freegoods === "false") {
    is_tags += "!free goods|";
    is_tags += `${tagsJson[3].Image}|`;
  }

  if (data.data.products[index].is_flash_sale === "true") {
    is_tags += "flash sale|";
    is_tags += `${tagsJson[5].Image}|`;
    sale_price = (discount_percentage / 100) * net_price + net_price;
  } else if (data.data.products[index].is_flash_sale === "false") {
    is_tags += "!flash sale|";
    is_tags += `${tagsJson[5].Image}|`;
  }

  is_tags += `${tagsJson[6].Image}|`;

  var carousels = {
    label: data.data.products[index].product_name,
    subtitle:
      `${is_tags}` +
      `${formatMoneyTHB(sale_price)}` +
      `|${formatMoneyTHB(base_price)}` +
      `|${formatMoneyTHB(net_price)}` +
      `|${discount_percentage}` +
      `|${unit}` +
      `|${eta_text}` +
      `|${product_url}`,
    img: data.data.products[index].product_image,
    btns: "คลิกดูสินค้า",
    link: data.data.products[index].product_url,
  };
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
