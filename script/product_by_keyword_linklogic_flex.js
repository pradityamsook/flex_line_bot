node.warn(msg);

function formatMoneyTHB(money) {
    return money.toLocaleString("th-TH", {
        style: "currency",
        currency: "THB",
    });
}
let data = {};
if (msg.context.search_product.products && msg.context.search_product.products.length > 0) {
    data = msg.context.search_product.products;
} else {
    data = msg.context.search_similar_products.products;
}

let getTags = msg.product_tags_flex.hits; // data from catalogue(entity).
var tagsJson = {};
for (let index = 0; index < getTags.length; index++) {
    //use data from catalogue for implement image on flex messages.
    getTags.forEach((data) => {
        tagsJson[data._source.item.json.Name] = data._source.item.json;
    });
}

var items = [];
data = data.filter((data, index) => index <= 7);

for (let index = 0; index <= data.length; index++) {
    if (index >= 0 && index <= data.length - 1) {
        /*******Mock up status tags's product*******/
        data[index].net_price = null;
        data[index].discount_percentage = 0;
        data[index].is_changfamily = true;
        data[index].is_special_point = true;
        data[index].is_wallet = true;
        data[index].is_freegoods = true;
        data[index].is_flash_sale = "true";
        /*******************************************/

        if (data[index].discount_percentage === 0 && data[index].net_price === null) {
            data[index].net_price = 0;
        }

        let is_tags = "search product keyword|";
        let base_price = data[index].base_price;
        let net_price = data[index].net_price;
        let discount_percentage = data[index].discount_percentage;
        let unit = data[index].unit;
        let eta_text = data[index].eta_text;
        let product_url = encodeURI(data[index].product_url);
        let sale_price = base_price - net_price;
        let discount_percent = Math.floor(((data[index].base_price - data[index].net_price) * 100) / data[index].base_price);
        let product_image = data[index].product_image !== null ? encodeURI(data[index].product_image) : "https://i.imgur.com/UjR2gYd.png";

        if (data[index].is_changfamily.toString() === "true") {
            is_tags += "logo|";
            is_tags += `${tagsJson["logo"].Image}|`;
        } else if (data[index].is_changfamily.toString() === "false") {
            is_tags += "!logo|";
            is_tags += `${tagsJson["logo"].Image}|`;
        }

        if (data[index].is_special_point.toString() === "true") {
            is_tags += "points|";
            is_tags += `${tagsJson["points"].Image}|`;
        } else if (data[index].is_special_point.toString() === "false") {
            is_tags += "!points|";
            is_tags += `${tagsJson["points"].Image}|`;
        }

        if (data[index].is_wallet.toString() === "true") {
            is_tags += "wallet|";
            is_tags += `${tagsJson["wallet"].Image}|`;
        } else if (data[index].is_wallet.toString() === "false") {
            is_tags += "!wallet|";
            is_tags += `${tagsJson["wallet"].Image}|`;
        }

        if (data[index].is_freegoods.toString() === "true") {
            is_tags += "free goods|";
            is_tags += `${tagsJson["free goods"].Image}|`;
        } else if (data[index].is_freegoods.toString() === "false") {
            is_tags += "!free goods|";
            is_tags += `${tagsJson["free goods"].Image}|`;
        }

        if (data[index].is_flash_sale.toString() === "true") {
            is_tags += "flash sale|";
            is_tags += `${tagsJson["flash sale"].Image}|`;
            sale_price = base_price - (discount_percentage / 100) * base_price;
        } else if (data[index].is_flash_sale === "false") {
            is_tags += "!flash sale|";
            is_tags += `${tagsJson["flash sale"].Image}|`;
        }

        if (data[index].discount_percentage === "step" && data[index].net_price === null) {
            net_price = 0;
            is_tags += "promotion|";
            is_tags += `${tagsJson["discount"].Image}|`;
            is_tags += `${tagsJson["promotion"].Image}|`;
        } else if (data[index].discount_percentage !== "step" && data[index].net_price !== null) {
            is_tags += "!promotion|";
            is_tags += `${tagsJson["promotion"].Image}|`;
        }

        if (data[index].discount_percentage === "step" && data[index].net_price > 0) {
            is_tags += "discount only|";
            is_tags += `${tagsJson["discount"].Image}|`;
        } else if (data[index].discount_percentage !== "step" && data[index].net_price !== null) {
            is_tags += "!discount only|";
            is_tags += `${tagsJson["discount"].Image}|`;
        }

        is_tags += `${tagsJson["delivery"]}|`;

        product_image === null ? (product_image = `${tagsJson["default image"].Image}`) : (product_image = product_image);

        var carousels = {
            label: data[index].product_name,
            subtitle:
                `${is_tags}` +
                `Sale price:${formatMoneyTHB(sale_price)}` +
                `|Base price:${formatMoneyTHB(base_price)}` +
                `|Net price:${formatMoneyTHB(net_price)}` +
                `|Discount percentage:${discount_percentage}` +
                `|Unit:${unit}` +
                `|Eta:${eta_text}` +
                `|Product url,${product_url}` +
                `|Discount percent:${discount_percent}`,
            img: encodeURI(product_image),
            btns: "คลิกดูสินค้า",
            link: data[index].product_url,
        };
        carousels = JSON.parse(JSON.stringify(carousels));
        items.push(carousels);
    } else if (index === data.length) {
        var lastCarousels = {
            label: `${tagsJson["all products"].Detail}`,
            subtitle: `${tagsJson["all products"].url}`,
            img: `${tagsJson["all products"].Image}`,
            btns: "คลิกดูสินค้า",
            link: `${tagsJson["all products"].url}`,
        };
        // carousels.label = `${tagsJson["all products"].Detail}`;
        // carousels.subtitle = `${tagsJson["all products"].url}`;
        // carousels.img = `${tagsJson["all products"].Image}`;
        // carousels.link = `${tagsJson["all products"].url}`;
        lastCarousels = JSON.parse(JSON.stringify(lastCarousels));
        items.push(lastCarousels);
    }
}

items = items.filter((item, index) => index < 9);

msg.payload = {
    info: {
        info_format: "items",
        square_image: false,
        items: items,
    },
    config: {
        question_first: true,
        combine_output: false,
    },
};
node.warn(msg);
return msg;
