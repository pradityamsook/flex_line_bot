node.warn(msg.payload);
const preContents = msg.payload.messages[0].contents.contents;
let newData = [];

preContents.map((v, index) => {
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
                            maxLines: 5,
                            size: "12px",
                            color: "#808285",
                            adjustMode: "shrink-to-fit",
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
                            offsetTop: "15px",
                            color: "#FFFFFF",
                            weight: "bold",
                            size: "16px",
                        },
                    ],
                    cornerRadius: "10px",
                    borderColor: "#ED1C24",
                    backgroundColor: "#ED1C24",
                    height: "50px",
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
                            offsetTop: "15px",
                            color: "#FFFFFF",
                            weight: "bold",
                            size: "16px",
                        },
                    ],
                    cornerRadius: "10px",
                    borderColor: "#ED1C24",
                    backgroundColor: "#ED1C24",
                    height: "50px",
                    action: {
                        type: "uri",
                        label: "action",
                        uri: "http://linecorp.com/",
                    },
                    offsetTop: "5px",
                },
            ],
            backgroundColor: "#FFFFFF",
            height: "150px",
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
                            adjustMode: "shrink-to-fit",
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
                            offsetTop: "15px",
                            color: "#FFFFFF",
                            weight: "bold",
                            size: "16px",
                        },
                    ],
                    cornerRadius: "10px",
                    borderColor: "#FFFFFF",
                    backgroundColor: "#FFFFFF",
                    height: "50px",
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
                            offsetTop: "15px",
                            color: "#FFFFFF",
                            weight: "bold",
                            size: "16px",
                        },
                    ],
                    cornerRadius: "10px",
                    borderColor: "#ED1C24",
                    backgroundColor: "#ED1C24",
                    height: "50px",
                    action: {
                        type: "uri",
                        label: "action",
                        uri: "http://linecorp.com/",
                    },
                    offsetTop: "5px",
                },
            ],
            backgroundColor: "#FFFFFF",
            height: "150px",
            position: "relative",
            offsetBottom: "0px",
        },
    };

    bodyContent.footer.contents[1].action.uri = v.hero.url;
    bodyContent.body.contents[0].url = v.hero.url;

    if (index === preContents.length - 1) {
        // add other promotion in last card of this flex messages
        promotionBodyContent.body.contents[0].url = v.hero.url;
        newData.push(promotionBodyContent);
    } else {
        // add contents in main card of promotion's flex messages
        bodyContent.body.contents[0].url = v.hero.url; //set url image
        bodyContent.body.contents[1].contents[0].text = v.body.contents[0].text; // header name

        var details = v.body.contents[1].text.split("|");
        // Check if no contents set details as zero space character
        if (details[0] === "") {
            details[0] = "​";
        }

        bodyContent.body.contents[2].contents[0].text = details[0]; // details promotion
        if (details.length > 3) {
            // if has object's key promotion_page and promotion_products
            bodyContent.footer.contents[1].action.uri = details[2]; // url button go to new page of promotion page
            bodyContent.footer.contents[2].action.uri = details[3]; // url button go to new page of promotion products
        } else {
            // but converse of above if object's either
            bodyContent.footer.contents[2].action.uri = details[2]; // url button go to new page of promotion page or promotion products
            bodyContent.footer.contents[1].borderColor = "#FFFFFF";
            bodyContent.footer.contents[1].backgroundColor = "#FFFFFF";
        }
        newData.push(JSON.parse(JSON.stringify(bodyContent)));
    }
});
msg.payload.messages[0].contents.contents = newData;
msg.backup_payload = JSON.parse(JSON.stringify(msg.payload));

return msg;
