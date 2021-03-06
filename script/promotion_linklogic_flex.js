function toThaiDateString(dateFrom, dateTo) {
    let monthNames = ["ม.ค.", "ก.พ.", "มี.ค.", "ม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];

    // let year = date.getFullYear() + 543; //uncomment if you want to convert to bhuddhist's year.
    let year = dateFrom.getFullYear();
    let month = monthNames[dateFrom.getMonth()];
    let numOfDay_dateFrom = dateFrom.getDate();
    let numOfDay_dateTo = dateTo.getDate();

    // let hour = dateFrom.getHours().toString().padStart(2, "0");
    // let minutes = dateFrom.getMinutes().toString().padStart(2, "0");
    // let second = dateFrom.getSeconds().toString().padStart(2, "0");

    return `${numOfDay_dateFrom} - ${numOfDay_dateTo} ${month} ${year}`;
}

let datas = msg.data;
let promotionData = msg.prompt_plus_promotion.hits;
node.warn(datas);
// node.warn(promotionData);

const items = [];
let catalogueData = {};
let countPromotionTwoButton = 0;
let formatData = "pp promotion|";

promotionData.forEach((element) => {
    catalogueData[element._source.item.json.Name] = element._source.item.json;
});

datas.data.forEach((element) => {
    if (element.hasOwnProperty("promotion_products")) countPromotionTwoButton += 1;
});

for (let index = 0; index <= datas.data.length; index++) {
    if (index === datas.data.length) {
        var carouselsPromotion = {
            label: catalogueData["promotion"].Name,
            subtitle: `Detail:${catalogueData["promotion"].Detail}|Button name:${catalogueData["promotion"].Button}|Promotion URL:${catalogueData["promotion"].URL}`,
            img: catalogueData["promotion"].Image,
            btns: `${catalogueData["promotion"].Button}`,
            link: `${catalogueData["promotion"].URL}`,
        };
        carouselsPromotion.subtitle = formatData + carouselsPromotion.subtitle;
        items.push(JSON.parse(JSON.stringify(carouselsPromotion)));
    } else {
        let preImage = datas.data[index].promotion_banner;
        let image = preImage === null ? (preImage = catalogueData["default"].Image) : (preImage = preImage);
        let valid_from = new Date(datas.data[index].valid_from);
        let valid_to = new Date(datas.data[index].valid_to);
        let valid_date = toThaiDateString(valid_from, valid_to);
        var carouselsCard = {
            label: datas.data[index].promotion_name,
            subtitle: `Description:${datas.data[index].promotion_description || ""}|Valid date:${valid_date}|Promotion page:${
                datas.data[index].promotion_page
            }|Button name:${catalogueData["default"].Button}|Count button:${countPromotionTwoButton}`,
            img: encodeURI(image),
            btns: `${catalogueData["default"].Button}`,
            link: `${datas.data[index].promotion_page}`,
        };
        carouselsCard.subtitle = formatData + carouselsCard.subtitle;
        items.push(JSON.parse(JSON.stringify(carouselsCard)));
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

node.warn(msg);
return msg;
