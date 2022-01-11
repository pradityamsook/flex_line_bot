node.warn(msg.payload);
const preContents = msg.payload.messages[0].contents.contents;
let newData = [];

preContents.map((v, index) => {
  let dataContent = v.body.contents[index].text.split("|");
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
          aspectRatio: "20:13",
        },
        {
          type: "box",
          layout: "baseline",
          contents: [
            {
              type: "text",
              text: "จัดส่งภายใน 15 วัน",
              color: "#FFFFFF",
              offsetStart: "10px",
              weight: "bold",
              position: "absolute",
            },
          ],
          offsetBottom: "50px",
          cornerRadius: "5px",
          backgroundColor: "#000000AA",
          borderColor: "#000000AA",
          width: "150px",
          offsetStart: "120px",
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
              offsetTop: "10px",
            },
            {
              type: "icon",
              url: "https://i.imgur.com/en2oNPK.png",
              size: "xxl",
              aspectRatio: "3:2",
              offsetTop: "10px",
              offsetStart: "140px",
            },
          ],
          offsetBottom: "200px",
          height: "70px",
          paddingTop: "15px",
        },
      ],
      height: "180px",
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
          size: "xl",
          text: "เสือ เดคอร์ โพลิเมอร์ซีเมนต์ ลอฟท์วอลล์ - สีเทาอ่อน (L01)",
        },
        {
          type: "box",
          layout: "baseline",
          contents: [
            {
              type: "text",
              text: "฿1,023 บาท / ถัง ",
              wrap: true,
              weight: "regular",
              flex: 0,
              decoration: "line-through",
              color: "#BCBEC0",
              size: "14px",
            },
          ],
        },
        {
          type: "box",
          layout: "baseline",
          contents: [
            {
              type: "text",
              text: "฿1,000 บาท / ถัง ",
              wrap: true,
              weight: "regular",
              flex: 0,
              color: "#ED4444",
              size: "19px",
            },
          ],
        },
        {
          type: "box",
          layout: "baseline",
          contents: [
            {
              type: "text",
              text: "ราคา ณ วันที่ 22 พ.ย. 2021",
            },
          ],
        },
        {
          type: "box",
          layout: "baseline",
          contents: [
            {
              type: "icon",
              url: "https://i.imgur.com/ynXV8ia.png",
              aspectRatio: "1:1",
              size: "3xl",
            },
            {
              type: "icon",
              url: "https://i.imgur.com/vVcsjMQ.png",
              position: "relative",
              aspectRatio: "1:1",
              size: "xxl",
              offsetStart: "115px",
            },
            {
              type: "icon",
              url: "https://i.imgur.com/OabotYy.png",
              size: "xxl",
              aspectRatio: "1:1",
              offsetStart: "120px",
            },
            {
              type: "icon",
              url: "https://i.imgur.com/RHJXfvA.png",
              size: "xxl",
              aspectRatio: "1:1",
              offsetStart: "125px",
            },
          ],
        },
      ],
    },
    footer: {
      type: "box",
      layout: "vertical",
      spacing: "sm",
      contents: [
        {
          type: "button",
          action: {
            type: "uri",
            label: "คลิกดูสินค้า",
            uri: "https://linecorp.com",
          },
          color: "#FFFFFF",
          height: "sm",
        },
      ],
      backgroundColor: "#ED1C24",
      height: "65px",
    },
  };

  //   bodyContent.footer.contents[0].action.uri = v.hero.url;
  bodyContent.hero.contents[0].url = v.hero.url; //image
  bodyContent.body.contents[0].text = v.body.contents[0].text; //description
  bodyContent.node.warn(v.body.contents[1].text);
  if (!v.body.contents[1].text) {
    bodyContent.body.contents.text = "";
  } else {
    bodyContent.body.contents[2].contents[0].text = v.body.contents[1].text;
  }
  newData.push(bodyContent);
});
msg.payload.messages[0].contents.contents = newData;
// node.warn(msg.payload.messages);
msg.backup_payload = JSON.parse(JSON.stringify(msg.payload));

return msg;
