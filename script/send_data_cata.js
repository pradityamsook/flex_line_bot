const loanCollection =
    msg.payload.hits.length > 0 &&
    msg.payload.hits.map((item) => {
        let card = item._source.item.json;
        return {
            productType: card.product_type.toString(),
            productPicture: card.icon_green,
            productDescTh: card.product_desc_th,
            productDescEn: card.product_desc_en,
        };
    });
msg.loanCollection = loanCollection;
return msg;
