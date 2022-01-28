let datas = JSON.parse(msg.data);
let promotionData = msg.prompt_plus_promotion.hits[0]._source.item;
node.warn(datas);
// node.warn(promotionData);

const items = [];
var valid_from;
var valid_date;
for (let index = 0; index <= datas.data.length; index++) {
  // valid_from = formatDate(datas.data[index].valid_from);
  // valid_date = `${valid_from[0]} - ${formatDate(datas.data[index].valid_to)}`;
  if (index === datas.data.length) {
    var carouselsPromotion = {
      label: promotionData.name,
      subtitle: promotionData.detail,
      img: promotionData.image,
      btns: "รายละเอียด",
      link: promotionData.url,
    };
    items.push(carouselsPromotion);
  } else {
    var promotionURL = "|";
    if (datas.data[index].hasOwnProperty("promotion_page"))
      promotionURL += `${datas.data[index].promotion_page}|`;
    if (datas.data[index].hasOwnProperty("promotion_products"))
      promotionURL += `${datas.data[index].promotion_products}|`;
    var carouselsCard = {
      label: datas.data[index].promotion_name,
      subtitle: `${datas.data[index].promotion_description}|${valid_date}|${promotionURL}`,
      img: encodeURI(datas.data[index].promotion_banner),
      btns: "รายละเอียด",
      link: datas.data[index].promotion_page,
    };
    items.push(carouselsCard);
  }
}

// node.warn(items);

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

// node.warn(msg)
return msg;
