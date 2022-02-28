node.warn(msg);
let data = msg.data;
let getTags = msg.nontification_flex.hits;
node.warn(data);

let items = [];
let urlImages = "";
let url = "";
let btn = "";

urlImages = getTags[0]._source.item.json.image;
btn = getTags[0]._source.item.json.btn;

function formatMoneyTHB(money) {
    return money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
//node.warn(formatMoneyTHB(data.total_sale));

var carousels = {
    label: data.order_number,
    subtitle: `po status|Order_number:${data.order_number}|Order status:${data.order_status}|Net amount:${formatMoneyTHB(
        data.net_amount.toFixed(2),
    )}|Total discount:${formatMoneyTHB(data.total_discount.toFixed(2))}|Total sale:${formatMoneyTHB(data.total_sale.toFixed(2))}|
    Dealer name:${data.dealer_name}|Purchase date:${data.purchase_date}`,
    img: `${urlImages}`,
    btns: `${btn}`,
    link: `${data.order_history_url}`,
};
items.push(carousels);
node.warn(carousels);

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
