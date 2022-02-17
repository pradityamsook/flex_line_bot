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
        size: "mega",
        hero: {
            type: "image",
            url: `${imgBackground}`,
            aspectMode: "fit",
            aspectRatio: "261:108",
            size: "full",
        },
        body: {
            type: "box",
            layout: "vertical",
            contents: [
                {
                    type: "box",
                    layout: "horizontal",
                    contents: [
                        {
                            type: "box",
                            layout: "horizontal",
                            contents: [
                                {
                                    type: "text",
                                    text: "เลขคำสั่งซื้อ:",
                                    size: "12px",
                                    weight: "bold",
                                    gravity: "center",
                                    flex: 2,
                                    align: "start",
                                },
                            ],
                            flex: 3,
                        },
                        {
                            type: "box",
                            layout: "horizontal",
                            contents: [
                                {
                                    type: "text",
                                    text: `${order_number}`,
                                    align: "end",
                                    weight: "bold",
                                    flex: 5,
                                },
                            ],
                            flex: 7,
                        },
                    ],
                    paddingAll: "3%",
                    paddingStart: "5%",
                    paddingEnd: "5%",
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
                                    type: "box",
                                    layout: "vertical",
                                    contents: [
                                        {
                                            type: "text",
                                            text: "ยอดรวม",
                                            size: "14px",
                                            color: "#808285",
                                            flex: 0,
                                            gravity: "center",
                                        },
                                    ],
                                },
                                {
                                    type: "box",
                                    layout: "vertical",
                                    contents: [
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
                                            gravity: "center",
                                        },
                                    ],
                                },
                            ],
                            alignItems: "center",
                            paddingAll: "3%",
                            margin: "none",
                            offsetBottom: "2%",
                        },
                        {
                            type: "separator",
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
                                            type: "text",
                                            text: "โปรโมชั่นส่วนลด",
                                            contents: [],
                                            size: "14px",
                                            flex: 0,
                                            color: "#808285",
                                            wrap: true,
                                            gravity: "center",
                                        },
                                    ],
                                    flex: 3,
                                },
                                {
                                    type: "box",
                                    layout: "vertical",
                                    contents: [
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
                                                    text: `${total_discount}`,
                                                },
                                            ],
                                            gravity: "center",
                                        },
                                    ],
                                    flex: 2,
                                },
                            ],
                            alignItems: "center",
                            paddingAll: "3%",
                            spacing: "none",
                            margin: "none",
                            offsetBottom: "2%",
                        },
                        {
                            type: "separator",
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
                                            type: "text",
                                            text: "ยอดสุทธิ",
                                            size: "14px",
                                            flex: 0,
                                            color: "#000000",
                                            weight: "bold",
                                            gravity: "center",
                                        },
                                    ],
                                },
                                {
                                    type: "box",
                                    layout: "vertical",
                                    contents: [
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
                                            gravity: "center",
                                        },
                                    ],
                                },
                            ],
                            alignItems: "center",
                            paddingAll: "3%",
                            spacing: "none",
                            offsetBottom: "2%",
                        },
                    ],
                    paddingAll: "1%",
                    backgroundColor: "#F8F8F9",
                    width: "90%",
                    offsetStart: "5%",
                    cornerRadius: "10px",
                    paddingStart: "2%",
                    paddingEnd: "2%",
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
                                    type: "box",
                                    layout: "horizontal",
                                    contents: [
                                        {
                                            type: "text",
                                            text: "วันที่สั่งซื้อ",
                                            size: "12px",
                                            color: "#808285",
                                            gravity: "center",
                                        },
                                    ],
                                    flex: 2,
                                },
                                {
                                    type: "box",
                                    layout: "horizontal",
                                    contents: [
                                        {
                                            type: "text",
                                            text: `${newDateTime}`,
                                            size: "14px",
                                            align: "end",
                                            color: "#808285",
                                            gravity: "center",
                                        },
                                    ],
                                    flex: 3,
                                },
                            ],
                        },
                        {
                            type: "box",
                            layout: "horizontal",
                            contents: [
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
                                            gravity: "center",
                                        },
                                    ],
                                    flex: 4,
                                },
                                {
                                    type: "box",
                                    layout: "horizontal",
                                    contents: [
                                        {
                                            type: "text",
                                            text: `${dealer_name}`,
                                            size: "14px",
                                            align: "end",
                                            color: "#2D2D2D",
                                        },
                                    ],
                                    flex: 7,
                                },
                            ],
                        },
                    ],
                    paddingAll: "3%",
                    paddingStart: "5%",
                    paddingEnd: "5%",
                },
            ],
            paddingAll: "0%",
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
                            type: "text",
                            text: `${btn}`,
                            align: "center",
                            color: "#FFFFFF",
                            weight: "bold",
                        },
                    ],
                    backgroundColor: "#D61F26",
                    paddingAll: "3%",
                    cornerRadius: "8px",
                    action: {
                        type: "uri",
                        label: `${btn}`,
                        uri: `${url}`,
                    },
                },
            ],
            paddingTop: "0%",
        },
        styles: {
            footer: {
                separator: false,
            },
        },
    };
    message.contents = body;
}
