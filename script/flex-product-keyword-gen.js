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

  let year = date.getFullYear() + 543;
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
  dataContent.shift();
  node.warn(index);
  node.warn(dataContent);
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
              offsetTop: "4px",
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
          offsetStart: "132px",
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
          offsetBottom: "210px",
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
            },
          ],
          offsetBottom: "270px",
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
      height: "180px",
    },
    body: {
      type: "box",
      layout: "vertical",
      spacing: "sm",
      contents: [
        {
          type: "separator",
        },
        {
          type: "text",
          wrap: true,
          weight: "bold",
          text: "เสือ เดคอร์ โพลิเมอร์ซีเมนต์ ลอฟท์วอลล์ - สีเทาอ่อน (L01)",
          size: "16px",
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
              text: "฿1,000 บาท ",
              wrap: true,
              weight: "regular",
              flex: 0,
              color: "#ED4444",
              size: "19px",
            },
            {
              type: "text",
              text: "/ ถัง",
              color: "#808285",
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
              text: "ราคา ณ วันที่ 22 พ.ย. 2021",
              color: "#808285",
              size: "14px",
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
              aspectRatio: "1.5:1",
              size: "3xl",
            },
            {
              type: "icon",
              url: "https://i.imgur.com/vVcsjMQ.png",
              position: "relative",
              aspectRatio: "1:1.5",
              size: "xxl",
              offsetStart: "130px",
            },
            {
              type: "icon",
              url: "https://i.imgur.com/OabotYy.png",
              size: "xxl",
              aspectRatio: "1:1.5",
              offsetStart: "135px",
            },
            {
              type: "icon",
              url: "https://i.imgur.com/RHJXfvA.png",
              size: "xxl",
              aspectRatio: "1:1.5",
              offsetStart: "140px",
            },
          ],
          width: "600px",
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

  var salePrice = dataContent[dataContent.length - 5];
  var percenDiscount = dataContent[dataContent.length - 2];
  var basePrice = dataContent[dataContent.length - 3];
  var netPrice = dataContent[dataContent.length - 4];
  var unit = dataContent[dataContent.length - 1];

  //   bodyContent.footer.contents[0].action.uri = v.hero.url;
  bodyContent.hero.contents[0].url = v.hero.url; //image
  bodyContent.body.contents[1].text = v.body.contents[0].text; //description
  bodyContent.hero.contents[3].contents[0].text = `-${percenDiscount}%`; // percent discount
  bodyContent.body.contents[4].contents[0].text = `ราคา ณ วันที่ ${toThaiDateString(
    date
  )}`; // Thai date
  bodyContent.body.contents[2].contents[0].text = `${netPrice} บาท / ${unit}`; // net price

  for (var indexData = 0; indexData < dataContent.length; indexData++) {
    if (dataContent[indexData] === "logo") {
      // add chang icon
      bodyContent.body.contents[5].contents[0].url = dataContent[indexData + 1];
    }

    if (dataContent[indexData] === "points") {
      // add points icon
      bodyContent.body.contents[5].contents[1].url = dataContent[indexData + 1];
    }

    if (dataContent[indexData] === "wallet") {
      // add wallet icon
      bodyContent.body.contents[5].contents[2].url = dataContent[indexData + 1];
    }

    if (dataContent[indexData] === "free goods") {
      // add free goods icon
      bodyContent.body.contents[5].contents[3].url = dataContent[indexData + 1];
    }

    if (dataContent[indexData] === "flash sale") {
      // salePrice = (percenDiscount / 100) * netPrice + netPrice; // calculate sale price
      bodyContent.hero.contents[2].contents[0].url = dataContent[indexData + 1]; // add flash sale tag's image
      bodyContent.body.contents[2].contents[0].text = `${netPrice} บาท`; // net price if has flash sale
      bodyContent.body.contents[3].contents[0].text = `${salePrice} บาท`; // sale price
      bodyContent.body.contents[3].contents[1].text = `/ ${unit}`;
    } else if (dataContent[indexData] === "!flash sale") {
      bodyContent.hero.contents[2].contents.splice(0, 1); // remove flash sale icon
      bodyContent.hero.contents.splice(3, 1); // remove percent discount
      bodyContent.body.contents[2].contents[0].text = "​"; // remove net price
      bodyContent.body.contents[3].contents[0].text = `${netPrice} บาท`; // net price
      bodyContent.body.contents[3].contents[0].color = "#000000";
    }
  }

  // if (!v.body.contents[1].text) {
  //   bodyContent.body.contents.text = "";
  // } else {
  //   bodyContent.body.contents[2].contents[0].text = `฿ ${
  //     dataContent[dataContent.length - 4]
  //   } / ${dataContent[dataContent.length - 1]}`; // net price
  // }
  newData.push(bodyContent);
});
msg.payload.messages[0].contents.contents = newData;
// node.warn(msg.payload.messages);
msg.backup_payload = JSON.parse(JSON.stringify(msg.payload));

return msg;
