function trans_flex_po(message) {
    let data = message.contents.contents;
    let type = data[0].body.contents[0].text || "";
    let order_number = data[0].body.contents[1].text.split("|")[1] || "";
    let order_status = data[0].body.contents[1].text.split("|")[2] || "";
    let net_amount = data[0].body.contents[1].text.split("|")[3] || "";
    let total_discount = data[0].body.contents[1].text.split("|")[4] || "";
    let total_sale = data[0].body.contents[1].text.split("|")[5] || "";
    let dealer_name = data[0].body.contents[1].text.split("|")[6] || "";
    let purchase_date = data[0].body.contents[1].text.split("|")[7] || "";
    let btn = data[0].body.contents[1].text.split("|")[8] || "";
    let url = data[0].body.contents[1].text.split("|")[9] || "";
    let dateTime = purchase_date.split("T");
    let newDate = dateTime[0].split("-").reverse().join("/");
    let time = dateTime[1].split(":");
    let newTime = time[0] + ":" + time[1];
    let newDateTime = newDate + " " + newTime;
    let imgBackground = data[0].hero.url; //image order status

    msg.payload.messages[0].type = "flex";
    //msg.payload.messages[0].altText = "เปิดบัญชี";
    let _backgroundColor;
    order_status === "pending" || order_status === "approved" ? (_backgroundColor = "#ECFFFA") : (_backgroundColor = "#FFF2F2");
    var body = {
        type: "bubble",
        header: {
            type: "box",
            layout: "vertical",
            contents: [
                {
                    type: "image",
                    url: `${imgBackground}`,
                    aspectRatio: "3:1",
                    aspectMode: "cover",
                    size: "250px",
                },
            ],
            width: "300px",
            height: "100px",
            justifyContent: "center",
            backgroundColor: `${_backgroundColor}`,
        },
        footer: {
            type: "box",
            layout: "vertical",
            contents: [
                {
                    type: "box",
                    layout: "vertical",
                    contents: [
                        {
                            type: "box",
                            layout: "horizontal",
                            contents: [
                                {
                                    type: "text",
                                    text: "เลขคำสั่งซื้อ:",
                                    size: "12px",
                                    gravity: "center",
                                    weight: "regular",
                                    color: "#000000",
                                    offsetStart: "11px",
                                },
                                {
                                    type: "text",
                                    weight: "bold",
                                    margin: "20px",
                                    text: `${order_number}`,
                                    flex: 0,
                                    offsetEnd: "20px",
                                },
                            ],
                            width: "300px",
                            justifyContent: "center",
                            alignItems: "center",
                            offsetBottom: "3px",
                            paddingEnd: "10px",
                        },
                    ],
                    height: "20px",
                },
                {
                    type: "box",
                    layout: "vertical",
                    contents: [
                        {
                            type: "box",
                            layout: "horizontal",
                            contents: [
                                {
                                    type: "text",
                                    text: "ยอดรวม",
                                    size: "14px",
                                    color: "#808285",
                                    flex: 0,
                                },
                                {
                                    type: "text",
                                    size: "14px",
                                    color: "#424242",
                                    align: "end",
                                    contents: [
                                        {
                                            type: "span",
                                            text: "฿",
                                        },
                                        {
                                            type: "span",
                                            text: " ",
                                        },
                                        {
                                            type: "span",
                                            text: `${net_amount}`,
                                        },
                                    ],
                                },
                            ],
                            offsetBottom: "5px",
                        },
                        {
                            type: "box",
                            layout: "horizontal",
                            contents: [
                                {
                                    type: "box",
                                    layout: "vertical",
                                    contents: [
                                        {
                                            type: "box",
                                            layout: "horizontal",
                                            contents: [
                                                {
                                                    type: "text",
                                                    text: "โปรโมชั่นส่วนลด",
                                                    contents: [],
                                                    size: "14px",
                                                    flex: 0,
                                                    color: "#808285",
                                                },
                                            ],
                                        },
                                    ],
                                    spacing: "xs",
                                },
                                {
                                    type: "text",
                                    size: "14px",
                                    color: "#424242",
                                    align: "end",
                                    contents: [
                                        {
                                            type: "span",
                                            text: "-฿",
                                        },
                                        {
                                            type: "span",
                                            text: " ",
                                        },
                                        {
                                            type: "span",
                                            text: `${total_discount}`,
                                        },
                                    ],
                                },
                            ],
                            height: "30px",
                            justifyContent: "center",
                            alignItems: "center",
                            offsetTop: "1px",
                        },
                        {
                            type: "box",
                            layout: "horizontal",
                            contents: [
                                {
                                    type: "text",
                                    text: "ยอดสุทธิ",
                                    size: "14px",
                                    flex: 0,
                                    color: "#000000",
                                },
                                {
                                    type: "text",
                                    size: "14px",
                                    align: "end",
                                    color: "#424242",
                                    contents: [
                                        {
                                            type: "span",
                                            text: "฿",
                                        },
                                        {
                                            type: "span",
                                            text: " ",
                                        },
                                        {
                                            type: "span",
                                            text: `${total_sale}`,
                                        },
                                    ],
                                    weight: "bold",
                                },
                            ],
                            alignItems: "center",
                            height: "20px",
                            offsetTop: "5px",
                        },
                    ],
                    paddingAll: "13px",
                    backgroundColor: "#F8F8F9",
                    cornerRadius: "10px",
                    height: "90px",
                    offsetBottom: "3px",
                },
                {
                    type: "box",
                    layout: "horizontal",
                    contents: [
                        {
                            type: "text",
                            text: "วันที่สั่งซื้อ",
                            size: "12px",
                            color: "#808285",
                        },
                        {
                            type: "text",
                            text: `${newDateTime}`,
                            size: "14px",
                            align: "end",
                            color: "#808285",
                        },
                    ],
                    height: "20px",
                    alignItems: "center",
                    margin: "13px",
                    offsetBottom: "10px",
                },
                {
                    type: "box",
                    layout: "horizontal",
                    contents: [
                        {
                            type: "text",
                            text: "ผู้แทนจำหน่าย",
                            size: "12px",
                            color: "#808285",
                            flex: 0,
                        },
                        {
                            type: "text",
                            text: `${dealer_name}`,
                            size: "14px",
                            align: "end",
                            color: "#2D2D2D",
                        },
                    ],
                    height: "20px",
                    alignItems: "center",
                    position: "relative",
                    flex: 0,
                    margin: "6px",
                    offsetBottom: "15px",
                },
                {
                    type: "box",
                    layout: "vertical",
                    contents: [
                        {
                            type: "text",
                            text: `${btn}`,
                            align: "center",
                            gravity: "center",
                            size: "14px",
                            weight: "bold",
                            color: "#FFFFFF",
                        },
                    ],
                    backgroundColor: "#D61F26",
                    borderWidth: "10px",
                    cornerRadius: "10px",
                    action: {
                        type: "uri",
                        label: `${btn}`,
                        uri: `${url}`,
                    },
                },
            ],
        },
        styles: {
            footer: {
                separator: false,
            },
        },
    };
    message.contents = body;
}
