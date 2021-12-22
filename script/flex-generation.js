node.warn(msg.payload);
const preContents = msg.payload.messages[0].contents.contents;
let newData = [];

preContents.map((v) => {
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
              text: "​",
              wrap: true,
              maxLines: 5,
              size: "12px",
              color: "#808285",
            },
          ],
          paddingAll: "16px",
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
        },
      ],
      paddingAll: "0px",
    },
    footer: {
      type: "box",
      layout: "vertical",
      contents: [
        {
          type: "text",
          text: "รายละเอียด",
          color: "#FFFFFF",
          gravity: "center",
          adjustMode: "shrink-to-fit",
          align: "center",
          offsetTop: "10px",
          action: {
            type: "uri",
            label: "action",
            uri: "http://linecorp.com/",
          },
        },
      ],
      backgroundColor: "#ED1C24",
      height: "63.81px",
      position: "relative",
    },
  };

  bodyContent.footer.contents[0].action.uri = v.hero.url;
  bodyContent.body.contents[0].url = v.hero.url;
  bodyContent.body.contents[1].text = v.body.contents[0].text;

  if (!v.body.contents[1].text) {
    node.warn("test");
    bodyContent.body.contents.text = "";
  } else {
    bodyContent.body.contents[2].text = v.body.contents[1].text;
  }
  newData.push(bodyContent);
});
msg.payload.messages[0].contents.contents = newData;
// node.warn(msg.payload.messages);
msg.backup_payload = JSON.parse(JSON.stringify(msg.payload));

return msg;
