node.warn(msg.payload);
const preContents = msg.payload.messages[0].contents.contents;
var setDataBody =
  msg.payload.messages[0].contents.contents[0].body.contents[1].text.split("|");
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
            {},
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

  bodyContent.footer.contents[0].action.uri = v.hero.url; //set url image;
  bodyContent.body.contents[0].url = v.hero.url; //set url button
  bodyContent.body.contents[4].contents[0].text = setDataBody[2]; //set valid date;

  node.warn(v.body.contents[1].text);
  if (!v.body.contents[1].text) {
    node.warn("test");
    bodyContent.body.contents.text = "";
  } else {
    bodyContent.body.contents[2].contents[0].text = v.body.contents[1].text;
  }
  newData.push(...bodyContent);
});
msg.payload.messages[0].contents.contents = newData;
// node.warn(msg.payload.messages);
msg.backup_payload = JSON.parse(JSON.stringify(msg.payload));

return msg;
