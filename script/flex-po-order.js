function trans_flex_po(message) {
    var data = message.contents.contents;
    var body = {};
    var type = data[0].body.contents[0].text || "";
    var order_number = data[0].body.contents[1].text.split("|")[1] || "";
    var order_status = data[0].body.contents[1].text.split("|")[2] || "";
    var net_amount = data[0].body.contents[1].text.split("|")[3] || "";
    var total_discount = data[0].body.contents[1].text.split("|")[4] || "";
    var total_sale = data[0].body.contents[1].text.split("|")[5] || "";
    var dealer_name = data[0].body.contents[1].text.split("|")[6] || "";
    var purchase_date = data[0].body.contents[1].text.split("|")[7] || "";
    var btn = data[0].body.contents[1].text.split("|")[8] || "";
    var url = data[0].body.contents[1].text.split("|")[9] || "";
    var dateTime = purchase_date.split("T");
    var newDate = dateTime[0].split("-").reverse().join("/");
    var time = dateTime[1].split(":");
    var newTime = time[0] + ":" + time[1];
    var newDateTime = newDate + " " + newTime;
    var imgBackground = data[0].hero.url; //image order status

    msg.payload.messages[0].type = "flex";
    //msg.payload.messages[0].altText = "เปิดบัญชี";

    if (order_status === "pending" || order_status === "approved") {
        // body = {
        //     "type": "bubble",
        //     "header": {
        //         "type": "box",
        //         "layout": "vertical",
        //         "contents": [{
        //             "type": "image",
        //             "url": `${imgBackground}`,
        //             "aspectRatio": "3:1",
        //             "aspectMode": "cover",
        //             "size": "250px"
        //         }],
        //         "width": "300px",
        //         "height": "162px",
        //         "justifyContent": "center",
        //         "backgroundColor": "#ECFFFA"
        //     },
        //     "body": {
        //         "type": "box",
        //         "layout": "vertical",
        //         "contents": [{
        //             "type": "box",
        //             "layout": "horizontal",
        //             "contents": [{
        //                     "type": "text",
        //                     "text": "เลขคำสั่งซื้อ:",
        //                     "size": "12px",
        //                     "gravity": "center",
        //                     "weight": "regular",
        //                     "color": "#000000"
        //                 },
        //                 {
        //                     "type": "text",
        //                     "text": `${order_number}`,
        //                     "align": "start",
        //                     "margin": "20px",
        //                     "weight": "bold"
        //                 }
        //             ],
        //             "width": "300px"
        //         }]
        //     },
        //     "footer": {
        //         "type": "box",
        //         "layout": "vertical",
        //         "contents": [{
        //                 "type": "box",
        //                 "layout": "vertical",
        //                 "contents": [{
        //                         "type": "box",
        //                         "layout": "horizontal",
        //                         "contents": [{
        //                                 "type": "text",
        //                                 "text": "ยอดรวม",
        //                                 "size": "14px",
        //                                 "color": "#808285",
        //                                 "flex": 0
        //                             },
        //                             {
        //                                 "type": "text",
        //                                 "size": "14px",
        //                                 "color": "#424242",
        //                                 "align": "end",
        //                                 "contents": [{
        //                                         "type": "span",
        //                                         "text": "฿"
        //                                     },
        //                                     {
        //                                         "type": "span",
        //                                         "text": " "
        //                                     },
        //                                     {
        //                                         "type": "span",
        //                                         "text": `${net_amount}`
        //                                     }
        //                                 ]
        //                             }
        //                         ],
        //                         "margin": "7px"
        //                     },
        //                     {
        //                         "type": "separator",
        //                         "margin": "xxl"
        //                     },
        //                     {
        //                         "type": "box",
        //                         "layout": "horizontal",
        //                         "contents": [{
        //                                 "type": "box",
        //                                 "layout": "vertical",
        //                                 "contents": [{
        //                                         "type": "box",
        //                                         "layout": "horizontal",
        //                                         "contents": [{
        //                                             "type": "text",
        //                                             "text": "โปรโมชั่น",
        //                                             "contents": [],
        //                                             "size": "14px",
        //                                             "flex": 0,
        //                                             "color": "#808285"
        //                                         }]
        //                                     },
        //                                     {
        //                                         "type": "box",
        //                                         "layout": "horizontal",
        //                                         "contents": [{
        //                                             "type": "text",
        //                                             "text": "ส่วนลด",
        //                                             "flex": 0,
        //                                             "size": "14px",
        //                                             "color": "#808285"
        //                                         }]
        //                                     }
        //                                 ],
        //                                 "spacing": "xs"
        //                             },
        //                             {
        //                                 "type": "text",
        //                                 "size": "14px",
        //                                 "color": "#424242",
        //                                 "align": "end",
        //                                 "contents": [{
        //                                         "type": "span",
        //                                         "text": "-฿"
        //                                     },
        //                                     {
        //                                         "type": "span",
        //                                         "text": " "
        //                                     },
        //                                     {
        //                                         "type": "span",
        //                                         "text": `${total_discount}`
        //                                     }
        //                                 ]
        //                             }
        //                         ],
        //                         "height": "55px",
        //                         "justifyContent": "center",
        //                         "alignItems": "center"
        //                     },
        //                     {
        //                         "type": "separator"
        //                     },
        //                     {
        //                         "type": "box",
        //                         "layout": "horizontal",
        //                         "contents": [{
        //                                 "type": "text",
        //                                 "text": "ยอดสุทธิ",
        //                                 "size": "14px",
        //                                 "flex": 0,
        //                                 "color": "#000000"
        //                             },
        //                             {
        //                                 "type": "text",
        //                                 "size": "14px",
        //                                 "align": "end",
        //                                 "color": "#424242",
        //                                 "contents": [{
        //                                         "type": "span",
        //                                         "text": "฿"
        //                                     },
        //                                     {
        //                                         "type": "span",
        //                                         "text": " "
        //                                     },
        //                                     {
        //                                         "type": "span",
        //                                         "text": `${total_sale}`
        //                                     }
        //                                 ],
        //                                 "weight": "bold"
        //                             }
        //                         ],
        //                         "alignItems": "center",
        //                         "margin": "8px",
        //                         "height": "35px"
        //                     }
        //                 ],
        //                 "paddingAll": "13px",
        //                 "backgroundColor": "#F8F8F9",
        //                 "cornerRadius": "10px"
        //             },
        //             {
        //                 "type": "box",
        //                 "layout": "horizontal",
        //                 "contents": [{
        //                         "type": "text",
        //                         "text": "วันที่สั่งซื้อ",
        //                         "size": "12px",
        //                         "color": "#808285"
        //                     },
        //                     {
        //                         "type": "text",
        //                         "text": `${newDateTime}`,
        //                         "size": "14px",
        //                         "align": "end",
        //                         "color": "#808285"
        //                     }
        //                 ],
        //                 "height": "16px",
        //                 "alignItems": "center",
        //                 "margin": "13px"
        //             },
        //             {
        //                 "type": "box",
        //                 "layout": "horizontal",
        //                 "contents": [{
        //                         "type": "text",
        //                         "text": "ผู้แทนจำหน่าย",
        //                         "size": "12px",
        //                         "color": "#808285",
        //                         "flex": 0
        //                     },
        //                     {
        //                         "type": "text",
        //                         "text": `${dealer_name}`,
        //                         "size": "14px",
        //                         "align": "end",
        //                         "color": "#2D2D2D"
        //                     }
        //                 ],
        //                 "height": "16px",
        //                 "alignItems": "center",
        //                 "position": "relative",
        //                 "flex": 0,
        //                 "margin": "6px"
        //             },
        //             {
        //                 "type": "box",
        //                 "layout": "vertical",
        //                 "contents": [{
        //                     "type": "text",
        //                     "text": `${btn}`,
        //                     "action": {
        //                         "type": "uri",
        //                         "label": "action",
        //                         "uri": `${url}`
        //                     },
        //                     "color": "#FFFFFF",
        //                     "align": "center",
        //                     "size": "16px",
        //                     "weight": "bold"
        //                 }],
        //                 "cornerRadius": "8px",
        //                 "margin": "14px",
        //                 "backgroundColor": "#D61F26",
        //                 "paddingAll": "14px"
        //             },
        //             {
        //                 "type": "box",
        //                 "layout": "vertical",
        //                 "contents": [],
        //                 "height": "6px"
        //             }
        //         ]
        //     },
        //     "styles": {
        //         "footer": {
        //             "separator": false
        //         }
        //     }
        // },

        body = {
            type: "bubble",
            header: {
                type: "box",
                layout: "vertical",
                contents: [
                    {
                        type: "image",
                        url: `${imageBackground}`,
                        aspectRatio: "3:1",
                        aspectMode: "cover",
                        size: "250px",
                    },
                ],
                width: "300px",
                height: "100px",
                justifyContent: "center",
                backgroundColor: "#FFF2F2",
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
                                type: "text",
                                text: "เลขคำสั่งซื้อ:",
                                size: "12px",
                                gravity: "center",
                                weight: "regular",
                                color: "#000000",
                            },
                            {
                                type: "text",
                                text: `${order_number}`,
                                align: "start",
                                margin: "20px",
                                weight: "bold",
                            },
                        ],
                        width: "300px",
                    },
                ],
                height: "50px",
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
                                type: "separator",
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
                        height: "16px",
                        alignItems: "center",
                        margin: "13px",
                        offsetBottom: "5px",
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
                        height: "16px",
                        alignItems: "center",
                        position: "relative",
                        flex: 0,
                        margin: "6px",
                        offsetBottom: "5px",
                    },
                    {
                        type: "button",
                        action: {
                            type: "uri",
                            label: `${btn}`,
                            uri: `${url}`,
                        },
                        height: "sm",
                        style: "primary",
                        color: "#D61F26",
                        offsetTop: "5px",
                    },
                ],
            },
            styles: {
                footer: {
                    separator: false,
                },
            },
        };
    } else {
        body.header.backgroundColor = "#FF2F2";
    }
    message.contents = body;
}
