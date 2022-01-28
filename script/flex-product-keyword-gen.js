node.warn(msg.payload);

// format to Thai data
function toThaiDateString(date) {
  let monthNames = [
    "ม.ค.",
    "ก.พ.",
    "มี.ค.",
    "ม.ย.",
    "พ.ค.",
    "มิ.ย.",
    "ก.ค.",
    "ส.ค.",
    "ก.ย.",
    "ต.ค.",
    "พ.ย.",
    "ธ.ค.",
  ];

  let year = date.getFullYear();
  let month = monthNames[date.getMonth()];
  let numOfDay = date.getDate();

  let hour = date.getHours().toString().padStart(2, "0");
  let minutes = date.getMinutes().toString().padStart(2, "0");
  let second = date.getSeconds().toString().padStart(2, "0");

  return `${numOfDay} ${month} ${year}`;
}

const preContents = msg.payload.messages[0].contents.contents;
let newData = [];
let date = new Date();

preContents.map((v, index) => {
  let dataContent = v.body.contents[1].text.split("|");
  const white =
    "https://upload.convolab.ai/scg-promptplus-dev%2Fb82f1698-5485-4514-9651-190b520b5a06.png";
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
              offsetTop: "-10px",
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
          offsetBottom: "310px",
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
      layout: "vertical",
      spacing: "sm",
      contents: [
        {
          type: "text",
          wrap: true,
          weight: "bold",
          text: "เสือ เดคอร์ โพลิเมอร์ซีเมนต์ ลอฟท์วอลล์ - สีเทาอ่อน (L01)",
          size: "16px",
          offsetBottom: "10px",
        },
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
          offsetBottom: "10px",
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
          offsetBottom: "10px",
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
          offsetBottom: "10px",
        },
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
            {
              type: "icon",
              url: "https://i.imgur.com/vVcsjMQ.png",
              position: "relative",
              aspectRatio: "1:1.2",
              size: "xxl",
              offsetStart: "120px",
            },
            {
              type: "icon",
              url: "https://i.imgur.com/OabotYy.png",
              size: "xxl",
              aspectRatio: "1:1.2",
              offsetStart: "125px",
            },
            {
              type: "icon",
              url: "https://i.imgur.com/RHJXfvA.png",
              size: "xxl",
              aspectRatio: "1:1.2",
              offsetStart: "130px",
            },
          ],
          width: "570px",
          offsetBottom: "10px",
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
          offsetTop: "10px",
        },
      ],
      backgroundColor: "#ED1C24",
      height: "65px",
      action: {
        type: "uri",
        label: "action",
        uri: "http://linecorp.com/",
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
          offsetTop: "10px",
        },
      ],
      backgroundColor: "#ED1C24",
      height: "65px",
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

  if (index === preContents.length - 1) {
    lastContent.hero.url = v.hero.url;
    lastContent.body.contents[0].text = v.body.contents[0].text; // detail all products
    lastContent.footer.action.uri = v.body.contents[1].text; // url all products
    newData.push(JSON.parse(JSON.stringify(lastContent)));
  } else {
    var salePrice = dataContent[dataContent.length - 7];
    var percenDiscount = dataContent[dataContent.length - 4];
    var basePrice = dataContent[dataContent.length - 5];
    var netPrice = dataContent[dataContent.length - 6];
    var unit = dataContent[dataContent.length - 3];
    var eta = dataContent[dataContent.length - 2];
    var url = dataContent[dataContent.length - 1];
    bodyContent.hero.contents[0].url = v.hero.url; //image
    bodyContent.body.contents[0].text = v.body.contents[0].text; //description
    bodyContent.hero.contents[3].contents[0].text = `-${percenDiscount}%`; // percent discount
    bodyContent.body.contents[3].contents[0].text = `ราคา ณ วันที่ ${toThaiDateString(
      date
    )}`; // Thai date
    bodyContent.body.contents[1].contents[0].text = `${netPrice} / ${unit}`; // net price
    bodyContent.footer.action.uri = url; // url of products

    for (var indexData = 0; indexData < dataContent.length; indexData++) {
      if (dataContent[indexData] === "logo") {
        // add chang icon
        bodyContent.body.contents[4].contents[0].contents[0].url =
          dataContent[indexData + 1];
      } else if (dataContent[indexData] === "!logo") {
        bodyContent.body.contents[4].contents[0].contents.splice(0, 0);
      }

      if (dataContent[indexData] === "points") {
        // add points icon
        bodyContent.body.contents[4].contents[1].contenst[0].url =
          dataContent[indexData + 1];
      } else if (dataContent[indexData] === "!points") {
        // hide points icon
        bodyContent.body.contents[4].contents[1].contenst.splice(0, 1);
      }

      if (dataContent[indexData] === "wallet") {
        // add wallet icon
        bodyContent.body.contents[4].contents[2].contenst[1].url =
          dataContent[indexData + 1];
      } else if (dataContent[indexData] === "!wallet") {
        // hide wallet icon
        bodyContent.body.contents[4].contents[2].contenst.splice(1, 1);
      }

      if (dataContent[indexData] === "free goods") {
        // add free goods icon
        bodyContent.body.contents[4].contents[3].contenst[2].url =
          dataContent[indexData + 1];
      } else if (dataContent[indexData] === "!free goods") {
        // hide free goods icon
        bodyContent.body.contents[4].contents[3].contenst.splice(2, 1);
      }

      if (dataContent[indexData] === "flash sale") {
        bodyContent.hero.contents[2].contents[0].url =
          dataContent[indexData + 1]; // add flash sale tag's image
        bodyContent.body.contents[1].contents[0].text = `${netPrice}`; // net price if has flash sale
        bodyContent.body.contents[2].contents[0].text = `${salePrice}`; // sale price
        bodyContent.body.contents[2].contents[1].text = ` / ${unit}`;
      } else if (dataContent[indexData] === "!flash sale") {
        bodyContent.hero.contents[2].contents.splice(0, 1); // remove flash sale icon
        bodyContent.hero.contents.splice(3, 1); // remove percent discount
        bodyContent.body.contents[1].contents[0].text = "​"; // remove net price
        bodyContent.body.contents[2].contents[0].text = `${netPrice}`; // net price
        bodyContent.body.contents[2].contents[1].text = ` / ${unit}`;
        bodyContent.body.contents[2].contents[0].color = "#000000";
      }
    }
    if (eta === "undefined") {
      bodyContent.hero.contents.splice(1, 1);
    } else {
      bodyContent.hero.contents[1].contents[1].text = eta; // in delivery
    }

    // if (!v.body.contents[1].text) {
    //   bodyContent.body.contents.text = "";
    // } else {
    //   bodyContent.body.contents[2].contents[0].text = `฿ ${
    //     dataContent[dataContent.length - 4]
    //   } / ${dataContent[dataContent.length - 1]}`; // net price
    // }
    newData.push(JSON.parse(JSON.stringify(bodyContent)));
  }
});
msg.payload.messages[0].contents.contents = newData;
// node.warn(msg.payload.messages);
msg.backup_payload = JSON.parse(JSON.stringify(msg.payload));

return msg;
