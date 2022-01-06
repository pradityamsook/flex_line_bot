// node.warn(msg.payload);
var getData = msg.payload.messages[0].text.split("|");
// node.warn(getData);
getData.shift();
// node.warn(getData.length);
node.warn(getData);

var newData = [];
var lastDataContents = [];
let contents = {
  type: "carousel",
  contents: newData,
};

for (var index = 0; index < getData.length; index++) {
  let indexList = 0;
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

  var bodyListData = {
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
  };

  var lastContent = {
    type: "bubble",
    direction: "ltr",
    size: "kilo",
    body: {
      type: "box",
      layout: "vertical",
      contents: [
        {
          type: "image",
          url: "https://i.imgur.com/Cy3SQ74.png",
          aspectMode: "cover",
          aspectRatio: "2:3",
          gravity: "top",
          size: "full",
        },
        {
          type: "box",
          layout: "vertical",
          contents: [
            {
              type: "text",
              text: "เลือกซื้อสินค้า จากรายการสินค้าทั้งหมดที่นี่!",
              wrap: true,
              gravity: "center",
              align: "center",
              style: "normal",
              weight: "bold",
            },
          ],
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
          offsetTop: "20px",
          height: "75px",
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
            label: "คลิก",
            uri: "http://linecorp.com/",
          },
          style: "primary",
          color: "#D61F26",
        },
      ],
      borderWidth: "8px",
      cornerRadius: "8px",
    },
    styles: {
      header: {
        separator: true,
      },
    },
  };

  if (getData[index] === "end_list") {
    bodyListData.contents[0].url = getData[index - 1];
    bodyListData.contents[1].text = getData[index - 2];
    lastDataContents.push(bodyListData);
    // bodyContent.body.contents.push(lastDataContents);
  }

  if (getData[index] === "end_card" && index != getData.length - 2) {
    newData.push(bodyContent);
    bodyContent.header.contents[1].text = getData[index + 1];
    bodyContent.footer.contents[0].type.uri = getData[index + 3];
    // node.warn(`-------${bodyContent.header.contents[1].text}`);
  } else if (index === 0) {
    bodyContent.header.contents[1].text = getData[0];
    bodyContent.footer.contents[0].action.uri = getData[2];
    newData.push(bodyContent);
  } else if (index === getData.length - 1) {
    newData.push(lastContent);
  }
}

node.warn(lastDataContents);
// node.warn(lastDataContents);
msg.payload.messages[0].type = "flex";
msg.payload.messages[0].altText = "Products";
msg.payload.messages[0].contents = contents;

for (var index = 0; index < getData.length; index++) {
  var bodyListData = {
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
  };
  var indexContents = 0;
  if (getData[index] === "end_list") {
    bodyListData.contents[0].url = getData[index - 1];
    bodyListData.contents[1].text = getData[index - 2];
    lastDataContents.push(bodyListData);
    msg.payload.messages[0].contents.contents[indexContents].body.contents =
      lastDataContents;
    indexContents++;
  }
}

delete msg.payload.messages[0].text;
msg.backup_payload = msg.payload;
node.warn(msg.payload);
return msg;
