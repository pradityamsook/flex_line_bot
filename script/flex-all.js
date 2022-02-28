if (msg.payload.messages) {
    msg.payload.messages.forEach((messages) => {
        node.error(messages.type);
        if (messages.type == "video") {
            trans_video(messages);
        } else if (messages.type == "flex") {
            const check_catalogue =
                messages.contents &&
                messages.contents.contents &&
                messages.contents.contents[0] &&
                messages.contents.contents[0].body &&
                messages.contents.contents[0].body.contents &&
                messages.contents.contents[0].body.contents[1] &&
                messages.contents.contents[0].body.contents[1].text
                    ? messages.contents.contents[0].body.contents[1].text.split("|")
                    : "";
            if (check_catalogue[0] && check_catalogue[0] === "promotion") {
                trans_flex_promotion(messages);
            } else if (check_catalogue[0] && check_catalogue[0] === "search point") {
                trans_flex_point(messages);
            } else if (check_catalogue[0] && check_catalogue[0] === "po status") {
                trans_flex_po(messages);
            } else if (check_catalogue[0] && check_catalogue[0] === "search product keyword") {
                trans_flex_product(messages);
            } else if (check_catalogue[0] && check_catalogue[0] === "pp promotion") {
                trans_flex_pp_promotion(messages);
            } else if (check_catalogue[0] && check_catalogue[0] === "chang member") {
                trans_flex_part_products_member(messages);
            }
        } else if (messages.type == "text") {
            const getData = messages.text.split("|");
            if (getData[0] === "Products") {
                trans_text_to_flex(messages);
            }
        }
    });
    msg.backup_payload = JSON.parse(JSON.stringify(msg.payload));
} else {
    node.error("Have no message");
}
return msg;

function trans_video(message) {
    if (message.originalContentUrl.includes("thumbnail=")) {
        const thumbnail = extract_query_string(message.originalContentUrl, "thumbnail");
        message.previewImageUrl = thumbnail ? thumbnail : message.previewImageUrl;
    }
    return null;
}

function extract_query_string(url, key) {
    let query_strings = url.split("?")[1];
    let result = "";
    if (query_strings) {
        query_strings.split("&&").forEach((query_string) => {
            let query_string_pairs = query_string.split("=");
            let query_string_key = query_string_pairs[0];
            let query_string_value = query_string_pairs[1];
            if (query_string_key == key) {
                result = query_string_value;
            }
        });
    }
    return result;
}

function trans_flex_product(message) {
    // format to Thai data
    function toThaiDateString(date) {
        let monthNames = ["ม.ค.", "ก.พ.", "มี.ค.", "ม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];

        let year = date.getFullYear();
        let month = monthNames[date.getMonth()];
        let numOfDay = date.getDate();

        let hour = date.getHours().toString().padStart(2, "0");
        let minutes = date.getMinutes().toString().padStart(2, "0");
        let second = date.getSeconds().toString().padStart(2, "0");

        return `${numOfDay} ${month} ${year}`;
    }

    const preContents = message.contents.contents;
    let newData = [];
    let date = new Date();
    var countStr = 0;

    //loop for count any card have name string length more than 36 without last card.
    // for (let index = 0; index < preContents.length - 1; index++) {
    //     preContents[index].body.contents[0].text.length > 34 ? (countStr += 1) : (countStr = countStr);
    // }

    preContents.forEach((v, index) => {
        let dataContent = v.body.contents[1].text.split("|");
        node.warn(index);
        const white = "https://upload.convolab.ai/scg-promptplus-dev%2Fb82f1698-5485-4514-9651-190b520b5a06.png";
        dataContent.shift();

        let bodyContent = {
            type: "bubble",
            hero: {
                type: "box",
                layout: "vertical",
                contents: [
                    {
                        type: "image",
                        url: "https://i.imgur.com/Hy7OVI5.png",
                        size: "full",
                        aspectRatio: "4:3",
                        aspectMode: "cover",
                    },
                    {
                        type: "box",
                        layout: "baseline",
                        contents: [
                            {
                                type: "icon",
                                url: "https://upload.convolab.ai/scg-promptplus-dev%2Fb82f1698-5485-4514-9651-190b520b5a06.png",
                                offsetTop: "5px",
                                offsetStart: "-60px",
                                aspectRatio: "1:1",
                                size: "25px",
                            },
                            {
                                type: "text",
                                text: "จัดส่งใน 15 วัน",
                                color: "#FFFFFF",
                                offsetStart: "40px",
                                weight: "bold",
                                position: "absolute",
                                offsetTop: "6px",
                                size: "14px",
                            },
                        ],
                        offsetBottom: "35px",
                        cornerRadius: "5px",
                        backgroundColor: "#000000AA",
                        borderColor: "#000000AA",
                        width: "165px",
                        offsetStart: "115px",
                        height: "30px",
                        justifyContent: "center",
                        alignItems: "center",
                    },
                    {
                        type: "box",
                        layout: "baseline",
                        contents: [
                            {
                                type: "icon",
                                url: "https://i.imgur.com/yUia3Sy.png",
                                position: "relative",
                                margin: "none",
                                size: "xxl",
                                aspectRatio: "10:3",
                                offsetTop: "20px",
                            },
                        ],
                        offsetBottom: "248px",
                        height: "70px",
                        paddingTop: "15px",
                    },
                    {
                        type: "box",
                        layout: "vertical",
                        contents: [
                            {
                                type: "text",
                                text: "-40%",
                                color: "#FFFFFF",
                                align: "center",
                                gravity: "center",
                                size: "12px",
                                offsetTop: "3px",
                                weight: "bold",
                            },
                        ],
                        offsetBottom: "282px",
                        offsetStart: "240px",
                        width: "40px",
                        height: "24px",
                        cornerRadius: "4px",
                        backgroundColor: "#ED4444",
                        background: {
                            type: "linearGradient",
                            angle: "135deg",
                            startColor: "#FF8A00",
                            endColor: "#ED4444",
                            centerColor: "#FF290C",
                        },
                        paddingAll: "1px",
                    },
                ],
                height: "220px",
            },
            body: {
                type: "box",
                layout: "horizontal",
                contents: [
                    {
                        type: "text",
                        wrap: true,
                        weight: "bold",
                        text: "เสือ เดคอร์ โพลิเมอร์ซีเมนต์ ลอฟท์วอลล์ - สีเทาอ่อน (L01)",
                        size: "16px",
                        offsetBottom: "10px",
                        maxLines: 2,
                    },
                ],
                height: "70px",
                offsetTop: "10px",
            },
            footer: {
                type: "box",
                layout: "vertical",
                contents: [
                    {
                        type: "box",
                        layout: "baseline",
                        contents: [
                            {
                                type: "text",
                                text: "฿1,023 / ถัง ",
                                wrap: true,
                                weight: "bold",
                                flex: 0,
                                decoration: "line-through",
                                color: "#BCBEC0",
                                size: "14px",
                            },
                        ],
                        offsetTop: "0px",
                        paddingStart: "20px",
                    },
                    {
                        type: "box",
                        layout: "baseline",
                        contents: [
                            {
                                type: "text",
                                text: "฿1,000 ",
                                wrap: true,
                                weight: "bold",
                                flex: 0,
                                color: "#ED4444",
                                size: "19px",
                            },
                            {
                                type: "text",
                                text: "⠀/ ถัง",
                                color: "#808285",
                                size: "14px",
                                weight: "bold",
                            },
                        ],
                        offsetTop: "0px",
                        paddingStart: "20px",
                    },
                    {
                        type: "box",
                        layout: "baseline",
                        contents: [
                            {
                                type: "text",
                                text: "ราคา ณ วันที่ 22 พ.ย. 2021",
                                color: "#808285",
                                size: "14px",
                            },
                        ],
                        offsetTop: "0px",
                        paddingStart: "20px",
                    },
                    {
                        type: "box",
                        layout: "horizontal",
                        contents: [
                            {
                                type: "box",
                                layout: "baseline",
                                contents: [
                                    {
                                        type: "icon",
                                        url: "https://i.imgur.com/ynXV8ia.png",
                                        aspectRatio: "4:3",
                                        size: "3xl",
                                        offsetTop: "4px",
                                    },
                                ],
                                justifyContent: "flex-start",
                                paddingStart: "20px",
                                width: "70px",
                            },
                            {
                                type: "box",
                                layout: "baseline",
                                contents: [],
                                justifyContent: "flex-end",
                                alignItems: "center",
                                spacing: "4px",
                                paddingEnd: "20px",
                                width: "230px",
                            },
                        ],
                        width: "600px",
                        offsetBottom: "5px",
                    },
                    {
                        type: "box",
                        layout: "horizontal",
                        contents: [
                            {
                                type: "text",
                                text: "คลิกดูสินค้า",
                                size: "18px",
                                color: "#FFFFFF",
                                weight: "bold",
                                style: "normal",
                                align: "center",
                                gravity: "center",
                                offsetBottom: "7px",
                            },
                        ],
                        backgroundColor: "#ED1C24",
                        paddingAll: "5%",
                        action: {
                            type: "uri",
                            label: "action",
                            uri: "http://linecorp.com/",
                        },
                        height: "50px",
                    },
                ],
                paddingAll: "0%",
            },
            styles: {
                hero: {
                    separator: true,
                },
                footer: {
                    separator: false,
                },
            },
        };

        let lastContent = {
            type: "bubble",
            hero: {
                type: "image",
                size: "full",
                aspectRatio: "4:3",
                aspectMode: "cover",
                url: "https://i.imgur.com/tBBRiDI.png",
            },
            body: {
                type: "box",
                layout: "vertical",
                spacing: "sm",
                contents: [
                    {
                        type: "text",
                        wrap: true,
                        weight: "bold",
                        size: "16px",
                        text: "เลือกซื้อสินค้า จากรายการสินค้าทั้งหมด ได้ที่นี่!    ",
                    },
                ],
            },
            footer: {
                type: "box",
                layout: "vertical",
                spacing: "sm",
                contents: [
                    {
                        type: "text",
                        text: "คลิกดูสินค้า",
                        size: "18px",
                        color: "#FFFFFF",
                        weight: "bold",
                        style: "normal",
                        align: "center",
                        gravity: "center",
                        offsetฺBottom: "1px",
                    },
                ],
                backgroundColor: "#ED1C24",
                height: "50px",
                action: {
                    type: "uri",
                    label: "action",
                    uri: "http://linecorp.com/",
                },
            },
        };

        let etaContent = {
            type: "box",
            layout: "baseline",
            contents: [
                {
                    type: "icon",
                    url: "https://upload.convolab.ai/scg-promptplus-dev%2Fb82f1698-5485-4514-9651-190b520b5a06.png",
                    offsetTop: "8px",
                    offsetStart: "-50px",
                    aspectRatio: "1:1",
                },
                {
                    type: "text",
                    text: "จัดส่งใน 15 วัน",
                    color: "#FFFFFF",
                    offsetStart: "40px",
                    weight: "bold",
                    position: "absolute",
                    offsetTop: "6px",
                    size: "14px",
                },
            ],
            offsetBottom: "35px",
            cornerRadius: "5px",
            backgroundColor: "#000000AA",
            borderColor: "#000000AA",
            width: "140px",
            offsetStart: "153px",
            height: "30px",
            justifyContent: "center",
            alignItems: "center",
        };

        let tags = {
            type: "icon",
            url: "https://i.imgur.com/vVcsjMQ.png",
            position: "relative",
            aspectRatio: "1:1.2",
            size: "xxl",
            offsetTop: "4px",
        };

        if (index + 1 === preContents.length || index === preContents.length - 1) {
            lastContent.hero.url = v.hero.url;
            lastContent.body.contents[0].text = v.body.contents[0].text; // detail all products
            lastContent.footer.action.uri = v.body.contents[1].text; // url all products
            newData.push(JSON.parse(JSON.stringify(lastContent)));
        } else {
            let salePrice = dataContent[dataContent.length - 8];
            let basePrice = dataContent[dataContent.length - 7];
            let netPrice = dataContent[dataContent.length - 6];
            let percenDiscount = dataContent[dataContent.length - 5];
            let unit = dataContent[dataContent.length - 4];
            let eta = dataContent[dataContent.length - 3];
            let url = dataContent[dataContent.length - 2];
            let _percentDiscount = dataContent[dataContent.length - 1];

            bodyContent.hero.contents[0].url = v.hero.url; //image
            bodyContent.body.contents[0].text = v.body.contents[0].text; //description
            bodyContent.hero.contents[3].contents[0].text = `-${percenDiscount}%`; // percent discount
            bodyContent.footer.contents[2].contents[0].text = `ราคา ณ วันที่ ${toThaiDateString(date)}`; // Thai date
            bodyContent.footer.contents[0].contents[0].text = `${netPrice} / ${unit}`; // net price
            bodyContent.footer.contents[4].action.uri = url; // url of products
            for (var indexData = 0; indexData < dataContent.length; indexData++) {
                if (dataContent[indexData] === "logo") {
                    // add chang icon
                    bodyContent.footer.contents[3].contents[0].contents[0].url = dataContent[indexData + 1];
                } else if (dataContent[indexData] === "!logo") {
                    bodyContent.footer.contents[3].contents[0].contents[0].url =
                        "https://upload.convolab.ai/scg-promptplus-dev%2Fb82f1698-5485-4514-9651-190b520b5a06.png";
                }

                if (dataContent[indexData] === "points") {
                    // add points icon
                    tags.url = dataContent[indexData + 1];
                    bodyContent.footer.contents[3].contents[1].contents.push(JSON.parse(JSON.stringify(tags)));
                }

                if (dataContent[indexData] === "wallet") {
                    // add wallet icon
                    tags.url = dataContent[indexData + 1];
                    bodyContent.footer.contents[3].contents[1].contents.push(JSON.parse(JSON.stringify(tags)));
                }

                if (dataContent[indexData] === "free goods") {
                    // add free goods icon
                    tags.url = dataContent[indexData + 1];
                    bodyContent.footer.contents[3].contents[1].contents.push(JSON.parse(JSON.stringify(tags)));
                }

                if (dataContent[indexData] === "flash sale") {
                    // tags.url = dataContent[indexData + 1];
                    // bodyContent.footer.contents[3].contents[1].contents.push(JSON.parse(JSON.stringify(tags))); // add flash sale tag's image
                    bodyContent.footer.contents[0].contents[0].text = `${basePrice}`; // net price if has flash sale
                    bodyContent.footer.contents[1].contents[0].text = `${salePrice}`; // sale price
                    bodyContent.footer.contents[1].contents[1].text = ` / ${unit}`; // unit
                    if (eta !== "undefined") {
                        bodyContent.hero.contents[2].offsetBottom = "279px";
                        bodyContent.hero.contents[3].offsetBottom = "312px";
                    } else {
                        bodyContent.hero.contents[2].offsetBottom = "248px";
                    }
                } else if (
                    dataContent[indexData] === "!flash sale" &&
                    dataContent[indexData] === "!promotion" &&
                    dataContent[indexData] === "!discount only"
                ) {
                    bodyContent.hero.contents[2].contents.splice(0, 1); // remove flash sale icon
                    bodyContent.hero.contents.splice(3, 1); // remove percent discount
                    bodyContent.footer.contents[0].contents[0].text = "​"; // remove net price
                    bodyContent.footer.contents[1].contents[0].text = `${basePrice}`; // base price
                    bodyContent.footer.contents[1].contents[1].text = ` / ${unit}`; // unit
                    bodyContent.footer.contents[1].contents[0].color = "#000000";
                }

                if (dataContent[indexData] === "promotion") {
                    tags.url = dataContent[indexData + 1];
                    bodyContent.footer.contents[3].contents[1].contents.unshift(JSON.parse(JSON.stringify(tags))); // add discount tag's image
                    bodyContent.hero.contents[2].contents[0].url = dataContent[indexData + 2]; // set tag promotion
                    bodyContent.hero.contents.splice(3, 1); // remove percent discount
                    bodyContent.footer.contents[0].contents[0].text = "​"; // remove net price
                    bodyContent.footer.contents[1].contents[0].text = `${basePrice}`; // base price
                    bodyContent.footer.contents[1].contents[1].text = ` / ${unit}`; // unit
                    bodyContent.footer.contents[1].contents[0].color = "#000000";
                    eta !== "undefined"
                        ? (bodyContent.hero.contents[2].offsetBottom = "275px")
                        : (bodyContent.hero.contents[2].offsetBottom = "248px");
                } else if (
                    dataContent[indexData] === "!flash sale" &&
                    dataContent[indexData] === "!promotion" &&
                    dataContent[indexData] === "!discount only"
                ) {
                    bodyContent.hero.contents[2].contents.splice(0, 1); // remove flash sale icon
                    bodyContent.hero.contents.splice(3, 1); // remove percent discount
                    bodyContent.footer.contents[0].contents[0].text = "​"; // remove net price
                    bodyContent.footer.contents[1].contents[0].text = `${basePrice}`; // net price
                    bodyContent.footer.contents[1].contents[1].text = ` / ${unit}`; // unit
                    bodyContent.footer.contents[1].contents[0].color = "#000000";
                }

                if (dataContent[indexData] === "discount only") {
                    tags.url = dataContent[indexData + 1];
                    bodyContent.footer.contents[3].contents[1].contents.unshift(JSON.parse(JSON.stringify(tags))); // add discount tag's image
                    bodyContent.hero.contents[2].contents.splice(0, 1); // remove flash sale icon
                    bodyContent.hero.contents[3].contents[0].text = `-${_percentDiscount}%`; // add percent discount
                    bodyContent.hero.contents[3].contents[0].offsetTop = "1.5px";
                    bodyContent.hero.contents[3].offsetBottom = "282px";
                    eta !== "undefined"
                        ? (bodyContent.hero.contents[3].offsetBottom = "312px")
                        : (bodyContent.hero.contents[3].offsetBottom = "282px");
                    bodyContent.hero.contents[3].offsetStart = "20px";
                    delete bodyContent.hero.contents[3].background;
                    bodyContent.footer.contents[0].contents[0].text = `${basePrice}`; // net price if has discount
                    bodyContent.footer.contents[1].contents[0].text = `${netPrice}`; // sale price
                    bodyContent.footer.contents[1].contents[1].text = ` / ${unit}`; // unit
                } else if (
                    dataContent[indexData] === "!flash sale" &&
                    dataContent[indexData] === "!promotion" &&
                    dataContent[indexData] === "!discount only"
                ) {
                    bodyContent.hero.contents[2].contents.splice(0, 1); // remove flash sale icon
                    bodyContent.hero.contents.splice(3, 1); // remove percent discount
                    bodyContent.footer.contents[0].contents[0].text = "​"; // remove net price
                    bodyContent.footer.contents[1].contents[0].text = `${basePrice}`; // net price
                    bodyContent.footer.contents[1].contents[1].text = ` / ${unit}`; // unit
                    bodyContent.footer.contents[1].contents[0].color = "#000000";
                }
            }
            if (eta === "undefined") {
                bodyContent.hero.contents.splice(1, 1);
            } else {
                bodyContent.hero.contents[1].contents[1].text = eta; // in delivery
            }
            newData.push(JSON.parse(JSON.stringify(bodyContent)));
        }
    });
    message.contents.contents = newData;
}

function trans_flex_pp_promotion(message) {
    const preContents = message.contents.contents;
    let newData = [];
    preContents.forEach((v, index) => {
        let bodyContent = {
            type: "bubble",
            body: {
                type: "box",
                layout: "vertical",
                contents: [
                    {
                        type: "image",
                        url: "https://i.imgur.com/VrLnVgK.jpg",
                        size: "full",
                        aspectMode: "cover",
                        aspectRatio: "4:3",
                        gravity: "top",
                    },
                    {
                        type: "box",
                        layout: "vertical",
                        contents: [
                            {
                                type: "text",
                                text: "Lorem ipsum dolor sit amet, cons",
                                gravity: "center",
                                align: "start",
                                weight: "bold",
                                size: "14px",
                                style: "normal",
                            },
                        ],
                        offsetTop: "10px",
                        paddingStart: "16px",
                        paddingEnd: "16px",
                    },
                    {
                        type: "box",
                        layout: "vertical",
                        contents: [
                            {
                                type: "text",
                                maxLines: 2,
                                size: "12px",
                                color: "#808285",
                                wrap: true,
                                text: 'The JSON is data only, and if you include a comment, then it will be data too.  You could have a designated data element called "_comment" (or something) that should be ignored by apps that use the JSON data.  You would probably be better having the comment in the processes that generates/receives the JSON, as they are supposed to know what the JSON data will be in advance, or at least the structure of it.',
                            },
                            {
                                type: "box",
                                layout: "vertical",
                                contents: [],
                                paddingStart: "16px",
                                paddingEnd: "16px",
                                paddingTop: "5px",
                            },
                        ],
                        paddingStart: "16px",
                        paddingEnd: "16px",
                        paddingTop: "12px",
                    },
                ],
                paddingAll: "0px",
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
                                type: "separator",
                            },
                            {
                                type: "text",
                                text: "1 - 30 พ.ย. 2564",
                                color: "#808285",
                                size: "12px",
                                margin: "7.09091px",
                                offsetBottom: "5px",
                            },
                        ],
                        offsetBottom: "5px",
                        paddingStart: "5px",
                    },
                    {
                        type: "box",
                        layout: "vertical",
                        contents: [
                            {
                                type: "text",
                                text: "รายละเอียด",
                                gravity: "center",
                                align: "center",
                                offsetTop: "8px",
                                color: "#FFFFFF",
                                weight: "bold",
                                size: "16px",
                            },
                        ],
                        cornerRadius: "10px",
                        borderColor: "#ED1C24",
                        backgroundColor: "#ED1C24",
                        height: "40px",
                        action: {
                            type: "uri",
                            label: "action",
                            uri: "http://linecorp.com/",
                        },
                    },
                    {
                        type: "box",
                        layout: "vertical",
                        contents: [
                            {
                                type: "text",
                                text: "รายละเอียด",
                                gravity: "center",
                                align: "center",
                                offsetTop: "8px",
                                color: "#FFFFFF",
                                weight: "bold",
                                size: "16px",
                            },
                        ],
                        cornerRadius: "10px",
                        borderColor: "#ED1C24",
                        backgroundColor: "#ED1C24",
                        height: "40px",
                        action: {
                            type: "uri",
                            label: "action",
                            uri: "http://linecorp.com/",
                        },
                        offsetTop: "5px",
                    },
                ],
                backgroundColor: "#FFFFFF",
                height: "130px",
                position: "relative",
                offsetBottom: "0px",
            },
        };
        let promotionBodyContent = {
            type: "bubble",
            body: {
                type: "box",
                layout: "vertical",
                contents: [
                    {
                        type: "image",
                        url: "https://i.imgur.com/VrLnVgK.jpg",
                        size: "full",
                        aspectMode: "cover",
                        aspectRatio: "4:3",
                        gravity: "top",
                    },
                    {
                        type: "box",
                        layout: "vertical",
                        contents: [
                            {
                                type: "text",
                                text: "​",
                                gravity: "center",
                                align: "start",
                                weight: "bold",
                                size: "14px",
                                style: "normal",
                            },
                        ],
                        offsetTop: "10px",
                        paddingStart: "16px",
                        paddingEnd: "16px",
                    },
                    {
                        type: "box",
                        layout: "vertical",
                        contents: [
                            {
                                type: "text",
                                text: "​",
                                maxLines: 5,
                                size: "12px",
                                color: "#808285",
                                wrap: true,
                            },
                            {
                                type: "box",
                                layout: "vertical",
                                contents: [],
                                paddingStart: "16px",
                                paddingEnd: "16px",
                                paddingTop: "5px",
                            },
                        ],
                        paddingStart: "16px",
                        paddingEnd: "16px",
                        paddingTop: "12px",
                    },
                ],
                paddingAll: "0px",
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
                                text: "​",
                                color: "#808285",
                                size: "12px",
                                margin: "7.09091px",
                                offsetBottom: "5px",
                            },
                        ],
                        offsetBottom: "5px",
                        paddingStart: "5px",
                    },
                    {
                        type: "box",
                        layout: "vertical",
                        contents: [
                            {
                                type: "text",
                                text: "รายละเอียด",
                                gravity: "center",
                                align: "center",
                                offsetTop: "8px",
                                color: "#FFFFFF",
                                weight: "bold",
                                size: "16px",
                            },
                        ],
                        cornerRadius: "10px",
                        borderColor: "#ED1C24",
                        backgroundColor: "#ED1C24",
                        height: "40px",
                        action: {
                            type: "uri",
                            label: "action",
                            uri: "http://linecorp.com/",
                        },
                        offsetTop: "5px",
                    },
                ],
                backgroundColor: "#FFFFFF",
                height: "95px",
                position: "relative",
                offsetBottom: "0px",
            },
        };
        bodyContent.footer.contents[1].action.uri = v.hero.url;
        bodyContent.body.contents[0].url = v.hero.url;

        if (index === preContents.length - 1) {
            let getURLFromCatalogue = v.body.contents[1].text.split("|");
            promotionBodyContent.body.contents[0].url = v.hero.url;
            promotionBodyContent.footer.contents[1].action.uri = encodeURI(getURLFromCatalogue[2]);
            newData.push(promotionBodyContent);
        } else {
            bodyContent.body.contents[0].url = v.hero.url; //set url image
            bodyContent.body.contents[1].contents[0].text = v.body.contents[0].text; // header name

            let details = v.body.contents[1].text.split("|");
            details.shift();
            let nullStr = details[0].split(":");
            let promotionPage = details[2].split(",");
            let promotionProducts = details[3].split(":");
            let numberButton = details[details.length - 1].split(":");

            // Check if no contents set details as zero space character
            if (nullStr[1] === "") {
                nullStr[1] = "​";
            }

            bodyContent.body.contents[2].contents[0].text = nullStr[1]; // details promotion
            if (details.length > 4) {
                // if has object's key promotion_page and promotion_products
                bodyContent.footer.contents[1].action.uri = promotionPage[1]; // url button go to new page of promotion page
                bodyContent.footer.contents[2].action.uri = promotionProducts[1]; // url button go to new page of promotion products
            } else {
                if (numberButton[1] === "0") {
                    bodyContent.footer.contents.splice(1, 1);
                    bodyContent.footer.height = "90px";
                    bodyContent.footer.contents[1].action.uri = promotionPage[1]; // url button go to new page of promotion page
                } else {
                    // but converse of above if object's either
                    bodyContent.footer.contents[2].action.uri = promotionPage[1]; // url button go to new page of promotion page or promotion products
                    bodyContent.footer.contents[1].borderColor = "#FFFFFF";
                    bodyContent.footer.contents[1].backgroundColor = "#FFFFFF";
                }
            }
            newData.push(JSON.parse(JSON.stringify(bodyContent)));
        }
    });
    message.contents.contents = newData;
}

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
    node.warn(btn);

    msg.payload.messages[0].type = "flex";
    //msg.payload.messages[0].altText = "เปิดบัญชี";

    if (order_status === "pending" || order_status === "approve") {
        body = {
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
                height: "162px",
                justifyContent: "center",
                backgroundColor: "#ECFFFA",
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
                                margin: "7px",
                            },
                            {
                                type: "separator",
                                margin: "xxl",
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
                                                        text: "โปรโมชั่น",
                                                        contents: [],
                                                        size: "14px",
                                                        flex: 0,
                                                        color: "#808285",
                                                    },
                                                ],
                                            },
                                            {
                                                type: "box",
                                                layout: "horizontal",
                                                contents: [
                                                    {
                                                        type: "text",
                                                        text: "ส่วนลด",
                                                        flex: 0,
                                                        size: "14px",
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
                                height: "55px",
                                justifyContent: "center",
                                alignItems: "center",
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
                                margin: "8px",
                                height: "35px",
                            },
                        ],
                        paddingAll: "13px",
                        backgroundColor: "#F8F8F9",
                        cornerRadius: "10px",
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
                    },
                    {
                        type: "box",
                        layout: "vertical",
                        contents: [
                            {
                                type: "text",
                                text: `${btn}`,
                                action: {
                                    type: "uri",
                                    label: "action",
                                    uri: `${url}`,
                                },
                                color: "#FFFFFF",
                                align: "center",
                                size: "16px",
                                weight: "bold",
                            },
                        ],
                        cornerRadius: "8px",
                        margin: "14px",
                        backgroundColor: "#D61F26",
                        paddingAll: "14px",
                    },
                    {
                        type: "box",
                        layout: "vertical",
                        contents: [],
                        height: "6px",
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
        body = {
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
                height: "162px",
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
                                margin: "7px",
                            },
                            {
                                type: "separator",
                                margin: "xxl",
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
                                                        text: "โปรโมชั่น",
                                                        contents: [],
                                                        size: "14px",
                                                        flex: 0,
                                                        color: "#808285",
                                                    },
                                                ],
                                            },
                                            {
                                                type: "box",
                                                layout: "horizontal",
                                                contents: [
                                                    {
                                                        type: "text",
                                                        text: "ส่วนลด",
                                                        flex: 0,
                                                        size: "14px",
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
                                height: "55px",
                                justifyContent: "center",
                                alignItems: "center",
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
                                margin: "8px",
                                height: "35px",
                            },
                        ],
                        paddingAll: "13px",
                        backgroundColor: "#F8F8F9",
                        cornerRadius: "10px",
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
                    },
                    {
                        type: "box",
                        layout: "vertical",
                        contents: [
                            {
                                type: "text",
                                text: `${btn}`,
                                action: {
                                    type: "uri",
                                    label: "action",
                                    uri: `${url}`,
                                },
                                color: "#FFFFFF",
                                align: "center",
                                size: "16px",
                                weight: "bold",
                            },
                        ],
                        cornerRadius: "8px",
                        margin: "14px",
                        backgroundColor: "#D61F26",
                        paddingAll: "14px",
                    },
                    {
                        type: "box",
                        layout: "vertical",
                        contents: [],
                        height: "6px",
                    },
                ],
            },
            styles: {
                footer: {
                    separator: false,
                },
            },
        };
    }
    message.contents = body;
}

function trans_flex_point(message) {
    const preContents = message.contents.contents;
    let newData = [];
    preContents.forEach((v) => {
        let dataContent = v.body.contents[1].text.split("|");
        dataContent.shift();
        node.warn(dataContent);
        let bodyContent = {
            type: "bubble",
            header: {
                type: "box",
                layout: "vertical",
                contents: [
                    {
                        type: "box",
                        layout: "horizontal",
                        contents: [
                            {
                                type: "text",
                                text: "เอสแอนด์พีนครหลวงอลูมิเนียม",
                                weight: "bold",
                                color: "#FFFFFF",
                                size: "18px",
                                gravity: "center",
                                position: "relative",
                                align: "center",
                            },
                        ],
                        height: "30px",
                        alignItems: "center",
                        margin: "16px",
                    },
                    {
                        type: "box",
                        layout: "horizontal",
                        contents: [
                            {
                                type: "text",
                                text: "รหัสร้าน: ",
                                size: "12px",
                                color: "#FFFFFF",
                                flex: 0,
                            },
                            {
                                type: "text",
                                text: "12345678",
                                size: "12px",
                                align: "start",
                                color: "#FFFFFF",
                            },
                            {
                                type: "text",
                                text: "กรุงเทพมหานคร",
                                size: "12px",
                                align: "end",
                                color: "#FFFFFF",
                            },
                        ],
                        height: "40px",
                        alignItems: "center",
                    },
                ],
                width: "300px",
                height: "87px",
                justifyContent: "center",
                backgroundColor: "#CD242B",
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
                                text: "คะแนนสะสม ช้าง แฟมิลี่",
                                weight: "regular",
                                color: "#FFFFFF",
                                size: "12px",
                                gravity: "center",
                                position: "relative",
                            },
                            {
                                type: "text",
                                text: "วันที่ :  12 / 12 / 2021",
                                weight: "regular",
                                color: "#FFFFFF",
                                size: "12px",
                                gravity: "center",
                                position: "relative",
                                align: "end",
                            },
                        ],
                    },
                    {
                        type: "box",
                        layout: "vertical",
                        margin: "xs",
                        spacing: "sm",
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
                                                text: "1,000,000",
                                                size: "28px",
                                                color: "#FFFFFF",
                                                align: "start",
                                                margin: "0px",
                                                weight: "bold",
                                                flex: 0,
                                                gravity: "center",
                                                adjustMode: "shrink-to-fit",
                                            },
                                            {
                                                type: "text",
                                                text: "คะแนน",
                                                size: "16px",
                                                color: "#FFFFFF",
                                                flex: 0,
                                                align: "center",
                                                weight: "bold",
                                                gravity: "center",
                                                margin: "10px",
                                            },
                                        ],
                                        justifyContent: "center",
                                    },
                                    {
                                        type: "box",
                                        layout: "horizontal",
                                        contents: [
                                            {
                                                type: "text",
                                                text: "1,000",
                                                size: "12px",
                                                color: "#FFFFFF",
                                                margin: "45px",
                                                flex: 0,
                                                adjustMode: "shrink-to-fit",
                                            },
                                            {
                                                type: "text",
                                                text: "คะแนน",
                                                size: "12px",
                                                color: "#FFFFFF",
                                                align: "start",
                                                margin: "7px",
                                                flex: 0,
                                            },
                                            {
                                                type: "text",
                                                text: "หมดอายุ",
                                                size: "12px",
                                                color: "#FFFFFF",
                                                align: "start",
                                                margin: "7px",
                                                flex: 0,
                                            },
                                            {
                                                type: "text",
                                                text: "12/2021",
                                                size: "12px",
                                                color: "#FFFFFF",
                                                align: "start",
                                                margin: "7px",
                                                flex: 0,
                                            },
                                        ],
                                        margin: "12px",
                                    },
                                ],
                                paddingAll: "13px",
                                backgroundColor: "#AA1C21",
                                cornerRadius: "10px",
                                margin: "xl",
                                height: "90px",
                                width: "260px",
                            },
                            {
                                type: "box",
                                layout: "horizontal",
                                margin: "6px",
                                contents: [
                                    {
                                        type: "text",
                                        text: "ยอดเงิน ช้าง แฟมิลี่ วอลเล็ท",
                                        size: "12px",
                                        color: "#FFFFFF",
                                        gravity: "top",
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
                                                text: "1,000,000",
                                                size: "28px",
                                                color: "#FFFFFF",
                                                weight: "bold",
                                                margin: "0px",
                                                position: "absolute",
                                                align: "center",
                                                adjustMode: "shrink-to-fit",
                                            },
                                            {
                                                type: "text",
                                                text: "บาท",
                                                size: "20px",
                                                color: "#FFFFFF",
                                                align: "end",
                                                position: "relative",
                                                decoration: "none",
                                                gravity: "center",
                                                weight: "bold",
                                                offsetBottom: "6px",
                                            },
                                        ],
                                        height: "50px",
                                        justifyContent: "center",
                                    },
                                ],
                                margin: "9px",
                            },
                        ],
                    },
                    {
                        type: "box",
                        layout: "horizontal",
                        margin: "xxl",
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
                                                text: "แลกของรางวัล",
                                                size: "14px",
                                                color: "#CD242B",
                                                flex: 0,
                                                align: "start",
                                                margin: "10px",
                                                weight: "bold",
                                            },
                                        ],
                                        margin: "10px",
                                    },
                                ],
                                paddingAll: "13px",
                                backgroundColor: "#FFFFFF",
                                cornerRadius: "10px",
                                margin: "sm",
                                height: "70px",
                                width: "125px",
                                action: {
                                    type: "uri",
                                    label: "action",
                                    uri: "http://linecorp.com/",
                                },
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
                                                text: "สินค้าร่วมรายการ",
                                                size: "13px",
                                                color: "#CD242B",
                                                flex: 0,
                                                align: "start",
                                                margin: "6px",
                                                weight: "bold",
                                            },
                                        ],
                                        margin: "12px",
                                    },
                                ],
                                paddingAll: "13px",
                                backgroundColor: "#FFFFFF",
                                cornerRadius: "10px",
                                margin: "sm",
                                height: "70px",
                                width: "125px",
                            },
                        ],
                    },
                    {
                        type: "box",
                        layout: "horizontal",
                        margin: "3px",
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
                                                text: "ข้อมูลผู้ใช้",
                                                size: "14px",
                                                color: "#CD242B",
                                                flex: 0,
                                                align: "center",
                                                margin: "20px",
                                                weight: "bold",
                                            },
                                        ],
                                        margin: "10px",
                                    },
                                ],
                                paddingAll: "13px",
                                backgroundColor: "#FFFFFF",
                                cornerRadius: "10px",
                                margin: "sm",
                                height: "70px",
                                width: "125px",
                                action: {
                                    type: "uri",
                                    label: "action",
                                    uri: "http://linecorp.com/",
                                },
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
                                                text: "ดาวน์โหลดแอปพลิเคชั่น ช้างแฟมิลี่",
                                                size: "9px",
                                                color: "#CD242B",
                                                flex: 0,
                                                align: "center",
                                                margin: "1px",
                                                weight: "bold",
                                                wrap: true,
                                            },
                                        ],
                                        margin: "8px",
                                    },
                                ],
                                paddingAll: "13px",
                                backgroundColor: "#FFFFFF",
                                cornerRadius: "10px",
                                margin: "sm",
                                height: "70px",
                                width: "125px",
                                action: {
                                    type: "uri",
                                    label: "action",
                                    uri: "http://linecorp.com/",
                                },
                            },
                        ],
                    },
                ],
                backgroundColor: "#7D1416",
            },
            styles: {
                footer: {
                    separator: true,
                },
            },
        };
        bodyContent.header.contents[0].contents[0].text = v.body.contents[0].text; // partner name's
        bodyContent.header.contents[1].contents[1].text = `รหัสร้านค้า: ${dataContent[0]}`; // store's code
        bodyContent.body.contents[0].contents[1].text = `วันที่ : ${dataContent[6]}`; //date current
        bodyContent.body.contents[1].contents[0].contents[0].contents[0].text = dataContent[1]; // total point
        bodyContent.body.contents[1].contents[0].contents[1].contents[0].text = dataContent[2]; // expired point
        bodyContent.body.contents[1].contents[0].contents[1].contents[3].text = `${dataContent[4]}/${dataContent[3]}`; // expired date point
        bodyContent.body.contents[1].contents[2].contents[0].contents[0].text = dataContent[5]; //total balance
        bodyContent.body.contents[2].contents[0].contents[0].contents[0].text = dataContent[7]; // btn1
        bodyContent.body.contents[2].contents[1].contents[0].contents[0].text = dataContent[8]; // btn2
        bodyContent.body.contents[3].contents[0].contents[0].contents[0].text = dataContent[9]; // btn3
        bodyContent.body.contents[3].contents[1].contents[0].contents[0].text = dataContent[10]; // btn4
        node.warn(dataContent[10]);
        bodyContent.body.contents[2].contents[0].action.uri = encodeURI(dataContent[11]); // url1
        // bodyContent.body.contents[2].contents[1].action.uri = encodeURI(dataContent[12]); // url2
        bodyContent.body.contents[3].contents[0].action.uri = encodeURI(dataContent[13]); // url3
        bodyContent.body.contents[3].contents[1].action.uri = encodeURI(dataContent[14]); // url4
        newData.push(JSON.parse(JSON.stringify(bodyContent)));
    });
    message.contents.contents = newData;
}

function trans_flex_promotion(message) {
    const preContents = message.contents.contents;
    let newData = [];
    let countButton = 0;
    for (let index = 0; index < preContents.length; index++) {
        if (preContents[index].footer.contents[0].action.label !== "null") countButton += 1;
    }
    preContents.forEach((v, index) => {
        let setDataBody = v.body.contents[1].text.split("|");
        node.warn(setDataBody.length);
        let bodyContent = {
            type: "bubble",
            body: {
                type: "box",
                layout: "vertical",
                contents: [
                    {
                        type: "image",
                        url: "https://i.imgur.com/VrLnVgK.jpg",
                        size: "full",
                        aspectMode: "cover",
                        aspectRatio: "4:3",
                        gravity: "top",
                    },
                    {
                        type: "box",
                        layout: "vertical",
                        contents: [
                            {
                                type: "text",
                                text: "Lorem ipsum dolor sit amet, cons",
                                gravity: "center",
                                align: "start",
                                weight: "bold",
                                size: "14px",
                                style: "normal",
                            },
                        ],
                        offsetTop: "10px",
                        paddingStart: "16px",
                        paddingEnd: "16px",
                    },
                    {
                        type: "box",
                        layout: "vertical",
                        contents: [
                            {
                                type: "text",
                                maxLines: 2,
                                size: "12px",
                                color: "#808285",
                                wrap: true,
                                text: 'The JSON is data only, and if you include a comment, then it will be data too.  You could have a designated data element called "_comment" (or something) that should be ignored by apps that use the JSON data.  You would probably be better having the comment in the processes that generates/receives the JSON, as they are supposed to know what the JSON data will be in advance, or at least the structure of it.',
                            },
                            {
                                type: "box",
                                layout: "vertical",
                                contents: [],
                                paddingStart: "16px",
                                paddingEnd: "16px",
                                paddingTop: "5px",
                            },
                        ],
                        paddingStart: "16px",
                        paddingEnd: "16px",
                        paddingTop: "12px",
                    },
                ],
                paddingAll: "0px",
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
                                type: "separator",
                            },
                            {
                                type: "text",
                                text: "1 - 30 พ.ย. 2564",
                                color: "#808285",
                                size: "12px",
                                margin: "7.09091px",
                                offsetBottom: "5px",
                            },
                        ],
                        offsetBottom: "5px",
                        paddingStart: "5px",
                    },
                    {
                        type: "box",
                        layout: "vertical",
                        contents: [
                            {
                                type: "text",
                                text: "รายละเอียด",
                                gravity: "center",
                                align: "center",
                                offsetTop: "8px",
                                color: "#FFFFFF",
                                weight: "bold",
                                size: "16px",
                            },
                        ],
                        cornerRadius: "10px",
                        borderColor: "#ED1C24",
                        backgroundColor: "#ED1C24",
                        height: "40px",
                        action: {
                            type: "uri",
                            label: "action",
                            uri: "http://linecorp.com/",
                        },
                    },
                    {
                        type: "box",
                        layout: "vertical",
                        contents: [
                            {
                                type: "text",
                                text: "รายละเอียด",
                                gravity: "center",
                                align: "center",
                                offsetTop: "8px",
                                color: "#FFFFFF",
                                weight: "bold",
                                size: "16px",
                            },
                        ],
                        cornerRadius: "10px",
                        borderColor: "#ED1C24",
                        backgroundColor: "#ED1C24",
                        height: "40px",
                        action: {
                            type: "uri",
                            label: "action",
                            uri: "http://linecorp.com/",
                        },
                        offsetTop: "5px",
                    },
                ],
                backgroundColor: "#FFFFFF",
                height: "130px",
                position: "relative",
                offsetBottom: "0px",
            },
        };

        let lastBodyContent = {
            type: "bubble",
            body: {
                type: "box",
                layout: "vertical",
                contents: [
                    {
                        type: "image",
                        url: "https://i.imgur.com/VrLnVgK.jpg",
                        size: "full",
                        aspectMode: "cover",
                        aspectRatio: "4:3",
                        gravity: "top",
                    },
                    {
                        type: "box",
                        layout: "vertical",
                        contents: [
                            {
                                type: "text",
                                text: "​",
                                gravity: "center",
                                align: "start",
                                weight: "bold",
                                size: "14px",
                                style: "normal",
                            },
                        ],
                        offsetTop: "10px",
                        paddingStart: "16px",
                        paddingEnd: "16px",
                    },
                    {
                        type: "box",
                        layout: "vertical",
                        contents: [
                            {
                                type: "text",
                                text: "​",
                                maxLines: 5,
                                size: "12px",
                                color: "#808285",
                                wrap: true,
                            },
                            {
                                type: "box",
                                layout: "vertical",
                                contents: [],
                                paddingStart: "16px",
                                paddingEnd: "16px",
                                paddingTop: "5px",
                            },
                        ],
                        paddingStart: "16px",
                        paddingEnd: "16px",
                        paddingTop: "12px",
                    },
                ],
                paddingAll: "0px",
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
                                text: "​",
                                color: "#808285",
                                size: "12px",
                                margin: "7.09091px",
                                offsetBottom: "5px",
                            },
                        ],
                        offsetBottom: "5px",
                        paddingStart: "5px",
                    },
                    {
                        type: "box",
                        layout: "vertical",
                        contents: [
                            {
                                type: "text",
                                text: "รายละเอียด",
                                gravity: "center",
                                align: "center",
                                offsetTop: "8px",
                                color: "#FFFFFF",
                                weight: "bold",
                                size: "16px",
                            },
                        ],
                        cornerRadius: "10px",
                        borderColor: "#ED1C24",
                        backgroundColor: "#ED1C24",
                        height: "40px",
                        action: {
                            type: "uri",
                            label: "action",
                            uri: "http://linecorp.com/",
                        },
                        offsetTop: "5px",
                    },
                ],
                backgroundColor: "#FFFFFF",
                height: "95px",
                position: "relative",
                offsetBottom: "0px",
            },
        };

        if (v.footer.contents[0].action.label === "null") {
            if (countButton === 0) {
                bodyContent.footer.contents.splice(1, 1);
                bodyContent.footer.height = "90px";
                bodyContent.footer.contents[1].action.uri = v.footer.contents[1].action.uri; // url button go to new page of promotion page or promotion products
            } else {
                bodyContent.footer.contents[2].action.uri = v.footer.contents[1].action.uri; // url button go to new page of promotion page or promotion products
                bodyContent.footer.contents[1].borderColor = "#FFFFFF";
                bodyContent.footer.contents[1].backgroundColor = "#FFFFFF";
                bodyContent.footer.contents[1].action.uri = encodeURI("https://google.com");
            }
        } else {
            bodyContent.footer.contents[1].action.label = v.footer.contents[0].action.label;
            bodyContent.footer.contents[1].action.uri = v.footer.contents[0].action.uri;
            bodyContent.footer.contents[2].action.label = v.footer.contents[1].action.label;
            bodyContent.footer.contents[2].action.uri = encodeURI(v.footer.contents[1].action.uri);
        }

        if (index === preContents.length - 1) {
            // lastBodyContent.footer.contents[0].action.label = v.footer.contents[1].action.label;
            lastBodyContent.body.contents[0].url = v.hero.url;
            lastBodyContent.footer.contents[1].action.uri = encodeURI(v.footer.contents[1].action.uri);
            newData.push(JSON.parse(JSON.stringify(lastBodyContent)));
        } else {
            bodyContent.body.contents[0].url = v.hero.url; //set url image
            bodyContent.body.contents[1].contents[0].text = v.body.contents[0].text; // header name
            if (setDataBody.length === 1) bodyContent.body.contents[1].contents[0].text = "​";
            else bodyContent.footer.contents[0].contents[1].text = setDataBody[2]; //set valid date;

            if (!v.body.contents[1].text) {
                bodyContent.body.contents.text = "​";
            } else {
                bodyContent.body.contents[2].contents[0].text = setDataBody[1];
            }
            newData.push(JSON.parse(JSON.stringify(bodyContent)));
        }
    });
    message.contents.contents = newData;
}

function trans_text_to_flex(message) {
    let getData = message.text.split("|");
    getData.shift();
    let newData = [];
    let listData = []; // use for last flex's card go to another products in websites.

    // Loop for add each a product in card
    node.error(getData);
    let bodyContentTemp = {};
    for (let index = 0; index < getData.length; index++) {
        let indexList = 0;
        let bodyContent = {
            type: "bubble",
            direction: "ltr",
            size: "kilo",
            header: {
                type: "box",
                layout: "vertical",
                contents: [
                    {
                        type: "image",
                        url: "https://i.imgur.com/zGvnyzi.png",
                        aspectMode: "cover",
                        position: "absolute",
                        size: "300px",
                        aspectRatio: "4:1",
                    },
                    {
                        type: "text",
                        text: "ชื่อ",
                        align: "center",
                        gravity: "center",
                        color: "#FFFFFF",
                        offsetBottom: "9px",
                        size: "18px",
                        position: "absolute",
                    },
                ],
                height: "40px",
                backgroundColor: "#CD242B",
                justifyContent: "center",
                alignItems: "center",
                background: {
                    type: "linearGradient",
                    angle: "0deg",
                    startColor: "#CD242B",
                    endColor: "#7D1416",
                },
            },
            body: {
                type: "box",
                layout: "vertical",
                contents: [],
                paddingTop: "2px",
                height: "270px",
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
                                text: "ชมสินค้ากลุ่มนี้เพิ่มเติม คลิก!",
                                align: "center",
                                gravity: "center",
                                size: "14px",
                                weight: "bold",
                                color: "#FFFFFF",
                            },
                        ],
                        backgroundColor: "#D61F26",
                        offsetBottom: "3px",
                        borderWidth: "10px",
                        borderColor: "#D61F26",
                        cornerRadius: "10px",
                        action: {
                            type: "uri",
                            label: "action",
                            uri: "http://linecorp.com/",
                        },
                    },
                ],
                height: "55px",
            },
            styles: {
                header: {
                    separator: true,
                },
            },
        };

        let bodyListData = {
            type: "box",
            layout: "baseline",
            contents: [
                {
                    type: "icon",
                    url: "https://i.imgur.com/pvinl1r.png",
                    aspectRatio: "1:1",
                    size: "40px",
                    offsetTop: "8px",
                },
                {
                    type: "text",
                    text: "ปูนงานโครงสร้าง เอสซีจี สูตรไฮบริด (ปูนซีเมนต์ถุง 50 กก.)",
                    align: "start",
                    gravity: "center",
                    adjustMode: "shrink-to-fit",
                    position: "relative",
                    offsetTop: "-22px",
                    size: "13px",
                    wrap: true,
                    maxLines: 2,
                    weight: "bold",
                },
            ],
            spacing: "sm",
            height: "55px",
            alignItems: "center",
            justifyContent: "flex-start",
            action: {
                type: "uri",
                label: "action",
                uri: "http://linecorp.com/",
            },
        };

        let separator = {
            type: "separator",
        };

        let lastContent = {
            type: "bubble",
            size: "kilo",
            direction: "ltr",
            hero: {
                type: "image",
                size: "full",
                aspectRatio: "4:3",
                aspectMode: "cover",
                url: "https://i.imgur.com/tBBRiDI.png",
            },
            body: {
                type: "box",
                layout: "vertical",
                spacing: "sm",
                contents: [
                    {
                        type: "text",
                        wrap: true,
                        weight: "bold",
                        size: "16px",
                        text: "เลือกซื้อสินค้า จากรายการสินค้าทั้งหมด ได้ที่นี่!    ",
                    },
                ],
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
                                text: "คลิก",
                                align: "center",
                                gravity: "center",
                                size: "14px",
                                weight: "bold",
                                color: "#FFFFFF",
                                offsetBottom: "2px",
                            },
                        ],
                        backgroundColor: "#D61F26",
                        offsetBottom: "3px",
                        borderWidth: "8px",
                        borderColor: "#D61F26",
                        cornerRadius: "10px",
                        action: {
                            type: "uri",
                            label: "action",
                            uri: "https://promptplus.scg.com",
                        },
                    },
                ],
            },
        };

        if (getData[index] === "start") {
            bodyContent.header.contents[1].text = getData[index + 2]; // name of product class
            bodyContent.footer.contents[0].action.uri = getData[index + 4].replace(/\s/g, ""); // url of product class
            bodyContentTemp = JSON.parse(JSON.stringify(bodyContent));
        }
        if (getData[index] === "end_list") {
            bodyListData.contents[0].url = getData[index - 3].replace(/\s/g, "");
            bodyListData.contents[1].text = getData[index - 6]; // name of product list
            bodyListData.action.uri = getData[index - 2]; // url of product list
            listData.push(JSON.parse(JSON.stringify(bodyListData)));
            listData.push(JSON.parse(JSON.stringify(separator)));
        }
        if (getData[index] === "end_card" && index != getData.length - 2) {
            // bodyContent.header.contents[1].text = getData[index + 2];
            // bodyContent.footer.contents[0].action.uri = getData[index + 4].replace(/\s/g, "");
            bodyContentTemp.body.contents = JSON.parse(JSON.stringify(listData));
            newData.push(JSON.parse(JSON.stringify(bodyContentTemp)));
            listData = [];
        } // else if (index === getData.length - 1) {
        //     newData.push(JSON.parse(JSON.stringify(lastContent)));
        // }
        if (getData[index] === "last_card") {
            lastContent.hero.url = getData[index + 3]; // url image of last card
            lastContent.body.contents[0].text = getData[index + 1]; // wording details
            lastContent.footer.contents[0].contents[0].text = getData[index + 2]; // name of button
            lastContent.footer.contents[0].action.uri = getData[index + 4]; // url go to product class page
            newData.push(JSON.parse(JSON.stringify(lastContent)));
        }
    }
    // newData.splice(0, 1);
    let contents = {
        type: "carousel",
        contents: JSON.parse(JSON.stringify(newData)),
    };
    delete message.text;
    message.type = "flex";
    message.altText = "Products";
    message.contents = JSON.parse(JSON.stringify(contents));
}

function trans_flex_part_products_member(message) {
    const preContents = message.contents.contents;
    let newData = [];

    preContents.forEach((v) => {
        let bodyContent = {
            type: "bubble",
            body: {
                type: "box",
                layout: "vertical",
                contents: [
                    {
                        type: "image",
                        url: "https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip3.jpg",
                        size: "full",
                        aspectMode: "cover",
                        aspectRatio: "4:3",
                        gravity: "center",
                    },
                    {
                        type: "box",
                        layout: "vertical",
                        contents: [],
                        position: "absolute",
                        width: "100%",
                        height: "40%",
                        offsetBottom: "0px",
                        offsetStart: "0px",
                        offsetEnd: "0px",
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
                                                text: "คลิกเลย",
                                                size: "12px",
                                                color: "#ffffff",
                                                align: "center",
                                                gravity: "center",
                                                style: "normal",
                                            },
                                        ],
                                        justifyContent: "center",
                                        alignItems: "center",
                                        cornerRadius: "12px",
                                        borderColor: "#A7A9AC",
                                        backgroundColor: "#A7A9AC",
                                        height: "24.99px",
                                        width: "78.71px",
                                        action: {
                                            type: "uri",
                                            label: "action",
                                            uri: "http://linecorp.com/",
                                        },
                                    },
                                ],
                                spacing: "xs",
                                justifyContent: "center",
                                alignItems: "center",
                            },
                        ],
                        position: "absolute",
                        offsetBottom: "0px",
                        offsetStart: "0px",
                        offsetEnd: "0px",
                        paddingAll: "20px",
                    },
                ],
                paddingAll: "0px",
            },
        };

        bodyContent.body.contents[0].url = v.hero.url; // image of card.
        bodyContent.body.contents[2].contents[0].contents[0].action = JSON.parse(JSON.stringify(v.footer.contents[0].action)); // action button of card
        newData.push(JSON.parse(JSON.stringify(bodyContent)));
    });

    message.contents.contents = newData;
}
