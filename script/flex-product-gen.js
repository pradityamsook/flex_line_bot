// node.warn(msg.payload);
var getData = msg.payload.messages[0].text.split("|");
node.warn(getData);
getData.shift();
node.warn(getData.length);
node.warn(getData);
// const preContents = msg.payload.messages[0].contents.contents;
var newData = [];

//   bodyContent.footer.contents[0].action.uri = v.hero.url;
bodyContent.header.contents[1].text = getData[3];

let contents = {
  type: "carousel",
  contents: newData,
};

bodyContent.header.contents[1].text = getData[0];
// newData.push(bodyContent);
getData.map((v, index) => {
  var bodyContent = {
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
          text: "กลุ่มซีเมนต์โครงสร้าง",
          align: "center",
          gravity: "center",
          color: "#FFFFFF",
          offsetBottom: "10px",
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
      contents: [
        {
          type: "box",
          layout: "baseline",
          contents: [
            {
              type: "icon",
              url: "https://i.imgur.com/pvinl1r.png",
              aspectRatio: "1:1",
              size: "40px",
              offsetTop: "13px",
            },
            {
              type: "text",
              text: "ปูนงานโครงสร้าง เอสซีจี สูตรไฮบริด (ปูนซีเมนต์ถุง 50 กก.)",
              align: "center",
              gravity: "center",
              adjustMode: "shrink-to-fit",
              position: "relative",
              offsetBottom: "15px",
              size: "13px",
            },
          ],
          spacing: "sm",
          height: "60px",
          alignItems: "center",
          justifyContent: "flex-start",
        },
        {
          type: "separator",
        },
        {
          type: "box",
          layout: "baseline",
          contents: [
            {
              type: "icon",
              url: "https://i.imgur.com/pvinl1r.png",
              aspectRatio: "1:1",
              size: "40px",
              offsetTop: "13px",
            },
            {
              type: "text",
              text: "ปูนงานโครงสร้าง เอสซีจี สูตรไฮบริด (ปูนซีเมนต์ถุง 50 กก.)",
              align: "center",
              gravity: "center",
              adjustMode: "shrink-to-fit",
              position: "relative",
              offsetBottom: "15px",
              size: "13px",
            },
          ],
          spacing: "sm",
          height: "60px",
          alignItems: "center",
          justifyContent: "flex-start",
        },
        {
          type: "separator",
        },
        {
          type: "box",
          layout: "baseline",
          contents: [
            {
              type: "icon",
              url: "https://i.imgur.com/pvinl1r.png",
              aspectRatio: "1:1",
              size: "40px",
              offsetTop: "13px",
            },
            {
              type: "text",
              text: "ปูนงานโครงสร้าง เอสซีจี สูตรไฮบริด (ปูนซีเมนต์ถุง 50 กก.)",
              align: "center",
              gravity: "center",
              adjustMode: "shrink-to-fit",
              position: "relative",
              offsetBottom: "15px",
              size: "13px",
            },
          ],
          spacing: "sm",
          height: "60px",
          alignItems: "center",
          justifyContent: "flex-start",
        },
        {
          type: "separator",
        },
        {
          type: "box",
          layout: "baseline",
          contents: [
            {
              type: "icon",
              url: "https://i.imgur.com/pvinl1r.png",
              aspectRatio: "1:1",
              size: "40px",
              offsetTop: "13px",
            },
            {
              type: "text",
              text: "ปูนงานโครงสร้าง เอสซีจี สูตรไฮบริด (ปูนซีเมนต์ถุง 50 กก.)",
              align: "center",
              gravity: "center",
              adjustMode: "shrink-to-fit",
              position: "relative",
              offsetBottom: "15px",
              size: "13px",
            },
          ],
          spacing: "sm",
          height: "60px",
          alignItems: "center",
          justifyContent: "flex-start",
        },
        {
          type: "separator",
        },
        {
          type: "box",
          layout: "baseline",
          contents: [
            {
              type: "icon",
              url: "https://i.imgur.com/pvinl1r.png",
              aspectRatio: "1:1",
              size: "40px",
              offsetTop: "13px",
            },
            {
              type: "text",
              text: "ปูนงานโครงสร้าง เอสซีจี สูตรไฮบริด (ปูนซีเมนต์ถุง 50 กก.)",
              align: "center",
              gravity: "center",
              adjustMode: "shrink-to-fit",
              position: "relative",
              offsetBottom: "15px",
              size: "13px",
            },
          ],
          spacing: "sm",
          height: "60px",
          alignItems: "center",
          justifyContent: "flex-start",
        },
        {
          type: "separator",
        },
        {
          type: "box",
          layout: "baseline",
          contents: [
            {
              type: "icon",
              url: "https://i.imgur.com/pvinl1r.png",
              aspectRatio: "1:1",
              size: "40px",
              offsetTop: "13px",
            },
            {
              type: "text",
              text: "ปูนงานโครงสร้าง เอสซีจี สูตรไฮบริด (ปูนซีเมนต์ถุง 50 กก.)",
              align: "center",
              gravity: "center",
              adjustMode: "shrink-to-fit",
              position: "relative",
              offsetBottom: "15px",
              size: "13px",
            },
          ],
          spacing: "sm",
          height: "60px",
          alignItems: "center",
          justifyContent: "flex-start",
        },
        {
          type: "separator",
        },
      ],
    },
    footer: {
      type: "box",
      layout: "vertical",
      contents: [
        {
          type: "button",
          action: {
            type: "uri",
            label: "ชมสินค้ากลุ่มนี้เพิ่มเติม คลิก!",
            uri: "http://linecorp.com/",
          },
          style: "primary",
          color: "#D61F26",
        },
      ],
      borderWidth: "8px",
      height: "90px",
      cornerRadius: "8px",
    },
    styles: {
      header: {
        separator: true,
      },
    },
  };
  if (getData[index] === "end_card" && index != getData.length - 2) {
    newData.push(bodyContent);
    node.warn(`-------${bodyContent.header.contents[1].text}`);
    bodyContent.header.contents[1].text = getData[index + 1];
  }

  // if (getData[index] === "") {
  //     getData.shift();
  // }
  //   node.warn(bodyContent.header.contents[1].text);
});

msg.payload.messages[0].type = "flex";
msg.payload.messages[0].altText = "Products";
msg.payload.messages[0].contents = contents;

delete msg.payload.messages[0].text;
msg.backup_payload = msg.payload;
node.warn(msg.payload);
return msg;
