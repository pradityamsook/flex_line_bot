node.warn(msg.payload);
const preContents = msg.payload.messages[0].contents.contents;
let newData = [];
preContents.map((v) => {
  let dataContent = v.body.contents[1].text.split("|");
  dataContent.shift();
  let bodyContent = {
    type: "bubble",
    header: {
      type: "box",
      layout: "vertical",
      contents: [
        {
          type: "box",
          layout: "horizontal",
          contents: [
            {
              type: "text",
              text: "เอสแอนด์พีนครหลวงอลูมิเนียม",
              weight: "bold",
              color: "#FFFFFF",
              size: "18px",
              gravity: "center",
              position: "relative",
              align: "center",
            },
          ],
          height: "30px",
          alignItems: "center",
          margin: "16px",
        },
        {
          type: "box",
          layout: "horizontal",
          contents: [
            {
              type: "text",
              text: "รหัสร้าน: ",
              size: "12px",
              color: "#FFFFFF",
              flex: 0,
            },
            {
              type: "text",
              text: "12345678",
              size: "12px",
              align: "start",
              color: "#FFFFFF",
            },
            {
              type: "text",
              text: "กรุงเทพมหานคร",
              size: "12px",
              align: "end",
              color: "#FFFFFF",
            },
          ],
          height: "40px",
          alignItems: "center",
        },
      ],
      width: "300px",
      height: "87px",
      justifyContent: "center",
      backgroundColor: "#CD242B",
    },
    body: {
      type: "box",
      layout: "vertical",
      contents: [
        {
          type: "box",
          layout: "horizontal",
          contents: [
            {
              type: "text",
              text: "คะแนนสะสม ช้าง แฟมิลี่",
              weight: "regular",
              color: "#FFFFFF",
              size: "12px",
              gravity: "center",
              position: "relative",
            },
            {
              type: "text",
              text: "วันที่ :  12 / 12 / 2021",
              weight: "regular",
              color: "#FFFFFF",
              size: "12px",
              gravity: "center",
              position: "relative",
              align: "end",
            },
          ],
        },
        {
          type: "box",
          layout: "vertical",
          margin: "xs",
          spacing: "sm",
          contents: [
            {
              type: "box",
              layout: "vertical",
              contents: [
                {
                  type: "box",
                  layout: "horizontal",
                  contents: [
                    {
                      type: "text",
                      text: "7,950",
                      size: "28px",
                      color: "#FFFFFF",
                      flex: 0,
                      align: "center",
                      margin: "80px",
                      weight: "regular",
                    },
                    {
                      type: "text",
                      text: "คะแนน",
                      size: "16px",
                      color: "#FFFFFF",
                      flex: 0,
                      align: "center",
                      weight: "regular",
                      gravity: "center",
                      margin: "18px",
                    },
                  ],
                },
                {
                  type: "box",
                  layout: "horizontal",
                  contents: [
                    {
                      type: "text",
                      text: "350",
                      size: "12px",
                      color: "#FFFFFF",
                      margin: "35px",
                      flex: 0,
                    },
                    {
                      type: "text",
                      text: "คะแนน",
                      size: "12px",
                      color: "#FFFFFF",
                      align: "start",
                      margin: "7px",
                      flex: 0,
                    },
                    {
                      type: "text",
                      text: "หมดอายุ",
                      size: "12px",
                      color: "#FFFFFF",
                      align: "start",
                      margin: "7px",
                      flex: 0,
                    },
                    {
                      type: "text",
                      text: "12/2021",
                      size: "12px",
                      color: "#FFFFFF",
                      align: "start",
                      margin: "7px",
                      flex: 0,
                    },
                  ],
                  margin: "12px",
                },
              ],
              paddingAll: "13px",
              backgroundColor: "#AA1C21",
              cornerRadius: "10px",
              margin: "xl",
              height: "90px",
              width: "300px",
            },
            {
              type: "box",
              layout: "horizontal",
              margin: "6px",
              contents: [
                {
                  type: "text",
                  text: "ยอดเงิน ช้าง แฟมิลี่ วอลเล็ท",
                  size: "12px",
                  color: "#FFFFFF",
                  gravity: "top",
                },
              ],
            },
            {
              type: "box",
              layout: "horizontal",
              contents: [
                {
                  type: "text",
                  text: "5,790",
                  size: "28px",
                  color: "#FFFFFF",
                  align: "center",
                  margin: "90px",
                },
                {
                  type: "text",
                  text: "บาท",
                  size: "16px",
                  color: "#FFFFFF",
                  align: "end",
                  position: "relative",
                  decoration: "none",
                  gravity: "center",
                },
              ],
              margin: "9px",
            },
          ],
        },
        {
          type: "box",
          layout: "horizontal",
          margin: "xxl",
          contents: [
            {
              type: "box",
              layout: "vertical",
              contents: [
                {
                  type: "box",
                  layout: "horizontal",
                  contents: [
                    {
                      type: "text",
                      text: "แลกของรางวัล",
                      size: "14px",
                      color: "#CD242B",
                      flex: 0,
                      align: "start",
                      margin: "10px",
                      weight: "regular",
                    },
                  ],
                  margin: "10px",
                },
              ],
              paddingAll: "13px",
              backgroundColor: "#FFFFFF",
              cornerRadius: "10px",
              margin: "sm",
              height: "70px",
              width: "125px",
            },
            {
              type: "box",
              layout: "vertical",
              contents: [
                {
                  type: "box",
                  layout: "horizontal",
                  contents: [
                    {
                      type: "text",
                      text: "สินค้าร่วมรายการ",
                      size: "13px",
                      color: "#CD242B",
                      flex: 0,
                      align: "start",
                      margin: "6px",
                      weight: "regular",
                    },
                  ],
                  margin: "12px",
                },
              ],
              paddingAll: "13px",
              backgroundColor: "#FFFFFF",
              cornerRadius: "10px",
              margin: "sm",
              height: "70px",
              width: "125px",
            },
          ],
        },
        {
          type: "box",
          layout: "horizontal",
          margin: "3px",
          contents: [
            {
              type: "box",
              layout: "vertical",
              contents: [
                {
                  type: "box",
                  layout: "horizontal",
                  contents: [
                    {
                      type: "text",
                      text: "ข้อมูลผู้ใช้",
                      size: "14px",
                      color: "#CD242B",
                      flex: 0,
                      align: "center",
                      margin: "20px",
                      weight: "regular",
                    },
                  ],
                  margin: "10px",
                },
              ],
              paddingAll: "13px",
              backgroundColor: "#FFFFFF",
              cornerRadius: "10px",
              margin: "sm",
              height: "70px",
              width: "125px",
            },
            {
              type: "box",
              layout: "vertical",
              contents: [
                {
                  type: "box",
                  layout: "horizontal",
                  contents: [
                    {
                      type: "text",
                      text: "ดาวน์โหลดแอปพลิเคชั่น",
                      size: "10px",
                      color: "#CD242B",
                      flex: 0,
                      align: "start",
                      margin: "1px",
                      weight: "regular",
                    },
                  ],
                  margin: "8px",
                },
                {
                  type: "box",
                  layout: "horizontal",
                  contents: [
                    {
                      type: "text",
                      text: "ช้างแฟมิลี่",
                      size: "10px",
                      color: "#CD242B",
                      flex: 0,
                      align: "start",
                      margin: "30px",
                      weight: "regular",
                    },
                  ],
                },
              ],
              paddingAll: "13px",
              backgroundColor: "#FFFFFF",
              cornerRadius: "10px",
              margin: "sm",
              height: "70px",
              width: "125px",
            },
          ],
        },
      ],
      backgroundColor: "#7D1416",
    },
    styles: {
      footer: {
        separator: true,
      },
    },
  };

  bodyContent.header.contents[0].contents[0].text = v.body.contents[0].text; // partner name's
  bodyContent.header.contents[1].contents[1].text = dataContent[0]; // store's code
  bodyContent.body.contents[0].contents[1].text = `วันที่: ${20} / ${
    dataContent[4]
  } / ${dataContent[3]}`; //date current
  bodyContent.body.contents[1].contents[0].contents[0].text = dataContent[1]; // total point
  bodyContent.body.contents[1].contents[0].contents[0].text = dataContent[2]; // expired point
  bodyContent.body.contents[1].contents[0].contents[3].text = `${dataContent[4]}/${dataContent[3]}`; // expired date point
  bodyContent.body.contents[1].contents[1].contents[2].contents[0].text =
    dataContent[5]; //total balance

  newData.push(bodyContent);
});
msg.payload.messages[0].contents.contents = newData;
// node.warn(msg.payload.messages);
msg.backup_payload = JSON.parse(JSON.stringify(msg.payload));

return msg;
