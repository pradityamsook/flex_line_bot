var getData = msg.payload.messages[0].text.split("|");

getData.shift();

var newData = [];
var listData = []; // use for last flex's card go to another products in websites.

// loop for add each a product in card
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
          offsetBottom: "14px",
          size: "21px",
          position: "absolute",
        },
      ],
      height: "55px",
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
      height: "530px",
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
        align: "start",
        gravity: "center",

        position: "relative",
        offsetBottom: "10px",
        size: "9px",
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

  // bodyContent.body.contents = [];
  if (getData[index] === "end_list") {
    bodyListData.contents[0].url = getData[index - 3].replace(/\s/g, "");
    bodyListData.contents[1].text = getData[index - 6];
    listData.push(JSON.parse(JSON.stringify(bodyListData)));
  }

  if (getData[index] === "end_card" && index != getData.length - 2) {
    bodyContent.header.contents[1].text = getData[index + 2];
    bodyContent.footer.contents[0].action.uri = getData[index + 4].replace(
      /\s/g,
      ""
    );
    bodyContent.body.contents = listData;
    newData.push(JSON.parse(JSON.stringify(bodyContent)));
    listData = [];
  } else if (index === 0) {
    bodyContent.header.contents[1].text = getData[2];
    bodyContent.footer.contents[0].action.uri = getData[3].replace(/\s/g, "");

    newData.push(JSON.parse(JSON.stringify(bodyContent)));
  } else if (index === getData.length - 1) {
    newData.push(JSON.parse(JSON.stringify(lastContent)));
  }
}

msg.payload.messages[0].type = "flex";
msg.payload.messages[0].altText = "Products";

newData.splice(0, 1); // remove blank card
let contents = {
  type: "carousel",
  contents: JSON.parse(JSON.stringify(newData)),
};
delete msg.payload.messages[0].text;
msg.payload.messages[0].contents = JSON.parse(JSON.stringify(contents));
msg.backup_payload = JSON.parse(JSON.stringify(msg.payload));
node.warn(msg.payload);
return msg;
