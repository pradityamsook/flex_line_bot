node.warn(msg);
if (msg.statusCode == 200) {
    let data = msg.data;
    let lastCard = msg.payload.hits[0]._source.item.json;
    const item = [];
    let formatData = "Products|";
    for (let index = 0; index < data.data.length; index++) {
        if (data.data[index].products.length !== 0) {
            formatData += `start|Priority:${data.data[index].priority}|Class name:${data.data[index].class_name}|Class image,${
                data.data[index].class_image
            }|Class url,${encodeURI(data.data[index].class_url)}|`;
            for (let indexProd = 0; indexProd < 5; indexProd++) {
                var product_image = data.data[index].products[indexProd].product_image;
                product_image !== null ? (product_image = product_image) : (product_image = "https://imgur.com/VCMGiHY.png");
                formatData += `Product code:${data.data[index].products[indexProd].product_code}|Product name:${
                    data.data[index].products[indexProd].product_name
                }|Product type:${data.data[index].products[indexProd].product_type}|Product barcode:${
                    data.data[index].products[indexProd].product_barcode
                }|Product image,${encodeURI(product_image)}|Product url,${data.data[index].products[indexProd].product_url}|Product priority:${
                    data.data[index].products[indexProd].product_priority
                }`;
                formatData += "|";
                formatData += "end_list|";
            }
            formatData += "end_card|";
        }
    }
    formatData += `last_card|${lastCard.Details}|${lastCard.Button}|${lastCard.Image}|${lastCard.URL}`;
    node.warn(formatData.split("|"));
    msg.payload = {
        status: "success",
        data: formatData,
    };
    return msg;
} else {
    return [null, msg];
}
