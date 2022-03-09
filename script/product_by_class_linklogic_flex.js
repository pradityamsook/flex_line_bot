node.warn(msg);
if (msg.statusCode == 200) {
    let data = msg.data;
    // let lastCard = msg.payload.hits[0]._source.item.json;
    let getCatalogueData = msg.payload.hits;
    let formatData = "Products|";
    let catalogueData = {};
    getCatalogueData.forEach((element) => {
        catalogueData[element._source.item.json.Name] = element._source.item.json;
    });

    for (let index = 0; index < data.data.length; index++) {
        if (data.data[index].products.length !== 0) {
            formatData += `start|Button name:${catalogueData["default"].Button}|Priority:${data.data[index].priority}|Class name:${
                data.data[index].class_name
            }|Class image:${data.data[index].class_image}|Class url:${encodeURI(data.data[index].class_url)}|`;
            for (let indexProd = 0; indexProd < 5; indexProd++) {
                var product_image = data.data[index].products[indexProd].product_image;
                product_image !== null ? (product_image = product_image) : (product_image = encodeURI(catalogueData["default"].Image));
                formatData += `Product code:${data.data[index].products[indexProd].product_code}|Product name:${
                    data.data[index].products[indexProd].product_name
                }|Product type:${data.data[index].products[indexProd].product_type}|Product barcode:${
                    data.data[index].products[indexProd].product_barcode
                }|Product image:${encodeURI(product_image)}|Product url:${data.data[index].products[indexProd].product_url}|Product priority:${
                    data.data[index].products[indexProd].product_priority
                }`;
                formatData += "|";
                formatData += "end_list|";
            }
            formatData += "end_card|";
        }
    }
    formatData += `last_card|${catalogueData["product class etc"].Details}|${catalogueData["product class etc"].Button}|${catalogueData["product class etc"].Image}|${catalogueData["product class etc"].URL}`;
    node.warn(formatData.split("|"));
    msg.payload = {
        status: "success",
        data: formatData,
    };
    return msg;
} else {
    return [null, msg];
}
