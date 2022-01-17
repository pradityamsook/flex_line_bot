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
          paddingStart: "20px",
          paddingEnd: "20px",
          offsetTop: "10px",
        },
        {
          type: "box",
          layout: "vertical",
          contents: [
            {
              type: "text",
              text: "Lorem ipsum dolor sit amet, consectetu adipiscing elit. Proin blandit, odio acoorn suscipit, turpis risus volutpat nulla, utpn dui quis felis. Orci varius natoque penati et magnis dis parturient montes.",
              maxLines: 5,
              size: "12px",
              color: "#808285",
              wrap: true,
            },
          ],
          paddingAll: "20px",
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
          paddingAll: "10px",
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
          offsetTop: "5px",
          action: {
            type: "uri",
            label: "action",
            uri: "http://linecorp.com/",
          },
        },
      ],
      backgroundColor: "#FFFFFF",
      height: "120px",
      position: "relative",
      offsetBottom: "10px",
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
          offsetTop: "30px",
        },
      ],
      backgroundColor: "#FFFFFF",
      height: "120px",
      position: "relative",
      offsetBottom: "10px",
      justifyContent: "center",
    },
  };
  bodyContent.footer.contents[0].action.uri = v.hero.url;
  bodyContent.body.contents[0].url = v.hero.url;

  // if (condition) {
  //   footer.contents.splice(1, 1);
  //   footer.contents[0].offsetTop = "55px";
  // }

  if (index === preContents.length - 1) {
    promotionBodyContent.footer.contents[0].action.label = "รายละเอียด";
    //   v.footer.contents[1].action.label;
    promotionBodyContent.body.contents[0].url = v.hero.url;
    newData.push(promotionBodyContent);
  } else {
    bodyContent.body.contents[0].url = v.hero.url; //set url image
    bodyContent.body.contents[1].contents[0].text = v.body.contents[0].text; // header name
    // if (setDataBody.length === 1)
    //   bodyContent.body.contents[4].contents.text = v.body.contents[1].text;
    // else bodyContent.body.contents[4].contents[0].text = setDataBody[2]; //set valid date;

    // if (!v.body.contents[1].text) {
    //   bodyContent.body.contents.text = "";
    // } else {
    //   bodyContent.body.contents[2].contents[0].text = setDataBody[1];
    // }
    newData.push(JSON.parse(JSON.stringify(bodyContent)));
  }

  //   node.warn(v.body.contents[1].text);
  //   if (!v.body.contents[1].text) {
  //     bodyContent.body.contents.text = "";
  //   } else {
  //     bodyContent.body.contents[2].contents[0].text = v.body.contents[1].text;
  //   }
  //   newData.push(bodyContent);
});
msg.payload.messages[0].contents.contents = newData;
msg.backup_payload = JSON.parse(JSON.stringify(msg.payload));

return msg;
