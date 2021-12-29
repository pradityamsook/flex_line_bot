node.warn(msg.payload);
const preContents = msg.payload.messages[0].contents.contents;
let newData = [];

preContents.map((v, index) => {
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
          aspectRatio: "1:1",
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
              align: "center",
              weight: "bold",
              size: "14px",
              style: "normal",
            },
          ],
          paddingTop: "10px",
        },
        {
          type: "box",
          layout: "vertical",
          contents: [
            {
              type: "text",
              text: "Lorem ipsum dolor sit amet, consectetu adipiscing elit. Proin blandit, odio acoorn suscipit, turpis risus volutpat nulla, utpn dui quis felis. Orci varius natoque penati et magnis dis parturient montes.",
              maxLines: 2,
              size: "12px",
              color: "#808285",
              wrap: true,
              adjustMode: "shrink-to-fit",
            },
          ],
          paddingAll: "7px",
          position: "relative",
        },
        {
          type: "separator",
        },
        {
          type: "box",
          layout: "vertical",
          contents: [
            {
              type: "text",
              text: "1 - 30 พ.ย. 2564",
              offsetStart: "10px",
              color: "#808285",
              size: "12px",
              margin: "7.09091px",
            },
          ],
          paddingAll: "5px",
          offsetBottom: "10px",
        },
      ],
      paddingAll: "0px",
    },
    footer: {
      type: "box",
      layout: "vertical",
      contents: [
        {
          type: "button",
          action: {
            type: "uri",
            label: "action",
            uri: "http://linecorp.com/",
          },
          gravity: "center",
          adjustMode: "shrink-to-fit",
          style: "primary",
          color: "#ED1C24",
        },
        {
          type: "button",
          action: {
            type: "uri",
            label: "action",
            uri: "http://linecorp.com/",
          },
          gravity: "center",
          adjustMode: "shrink-to-fit",
          style: "primary",
          color: "#ED1C24",
          offsetTop: "10px",
        },
      ],
      backgroundColor: "#FFFFFF",
      height: "120px",
      position: "relative",
      offsetBottom: "10px",
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
          aspectRatio: "1:1",
          gravity: "top",
        },
        {
          type: "box",
          layout: "vertical",
          contents: [
            {
              type: "text",
              text: "โปรโมชั่นอื่น ๆ",
              gravity: "center",
              align: "center",
              weight: "bold",
              size: "14px",
              style: "normal",
            },
          ],
          paddingTop: "50px",
        },
      ],
      paddingAll: "0px",
    },
    footer: {
      type: "box",
      layout: "vertical",
      contents: [
        {
          type: "button",
          action: {
            type: "uri",
            label: "action",
            uri: "http://linecorp.com/",
          },
          gravity: "center",
          adjustMode: "shrink-to-fit",
          style: "primary",
          color: "#ED1C24",
        },
      ],
      backgroundColor: "#FFFFFF",
      height: "120px",
      position: "relative",
      offsetBottom: "10px",
      justifyContent: "center",
    },
  };

  let footerContent = {
    type: "box",
    layout: "vertical",
    contents: [
      {
        type: "button",
        action: {
          type: "uri",
          label: "action",
          uri: "http://linecorp.com/",
        },
        gravity: "center",
        adjustMode: "shrink-to-fit",
        style: "primary",
        color: "#ED1C24",
      },
    ],
    backgroundColor: "#FFFFFF",
    height: "120px",
    position: "relative",
    offsetBottom: "10px",
    justifyContent: "center",
  };

  if (v.footer.contents[0].action.label === "null") {
    footerContent.contents[0].action.label = v.footer.contents[1].action.label;
    footerContent.contents[0].action.uri = v.footer.contents[1].action.uri;
    bodyContent.footer = footerContent;
  } else {
    bodyContent.footer.contents[0].action.label =
      v.footer.contents[0].action.label;
    bodyContent.footer.contents[0].action.uri = v.footer.contents[0].action.uri;
    bodyContent.footer.contents[1].action.label =
      v.footer.contents[1].action.label;
    bodyContent.footer.contents[1].action.uri = v.footer.contents[1].action.uri;
  }

  if (index === preContents.length - 1) {
    lastBodyContent.footer.contents[0].action.label =
      v.footer.contents[1].action.label;
    lastBodyContent.body.contents[0].url = v.hero.url;
    newData.push(lastBodyContent);
  } else {
    bodyContent.body.contents[0].url = v.hero.url; //set url image
    bodyContent.body.contents[1].contents[0].text = v.body.contents[0].text; // header name
    if (setDataBody.length === 1)
      bodyContent.body.contents[4].contents.text = v.body.contents[1].text;
    else bodyContent.body.contents[4].contents[0].text = setDataBody[2]; //set valid date;

    if (!v.body.contents[1].text) {
      bodyContent.body.contents.text = "";
    } else {
      bodyContent.body.contents[2].contents[0].text = setDataBody[1];
    }
    newData.push(JSON.parse(JSON.stringify(bodyContent)));
  }
});
msg.payload.messages[0].contents.contents = newData;
msg.backup_payload = JSON.parse(JSON.stringify(msg.payload));

return msg;
