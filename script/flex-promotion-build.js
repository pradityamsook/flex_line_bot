let datas = JSON.parse(msg.data);
let promotionData = msg.prompt_plus_promotion.hits[0]._source.item;
node.warn(datas);
// node.warn(promotionData);

const items = [];
let valid_from;
let valid_date;
let countPromotionTwoButton = 0;
let formatData = "pp promotion|";

datas.data.forEach((element) => {
    if (element.hasOwnProperty("promotion_products")) countPromotionTwoButton += 1;
});
node.warn(countPromotionTwoButton);
for (let index = 0; index <= datas.data.length; index++) {
    if (index === datas.data.length) {
        var carouselsPromotion = {
            label: promotionData.name,
            subtitle: `${promotionData.detail}|${promotionData.url}`,
            img: promotionData.image,
            btns: "รายละเอียด",
            link: promotionData.url,
        };
        carouselsPromotion.subtitle = formatData + carouselsPromotion.subtitle;
        items.push(carouselsPromotion);
    } else {
        var carouselsCard = {
            label: datas.data[index].promotion_name,
            subtitle: `Description:${datas.data[index].promotion_description}|Valid date:${valid_date}|Promotion page,${datas.data[index].promotion_page}|Count button:${countPromotionTwoButton}`,
            img: encodeURI(datas.data[index].promotion_banner),
            btns: "รายละเอียด",
            link: datas.data[index].promotion_page,
        };
        carouselsCard.subtitle = formatData + carouselsCard.subtitle;
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
