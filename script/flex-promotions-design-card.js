const preData = require("../json/pre-promotion-payload.json");

const preContents = preData.messages[0].contents.contents;

let newData = [];

preContents.map((v) => {
  let bodyContent = {
    type: "bubble",
    direction: "ltr",
    size: "kilo",
    body: {
      type: "box",
      layout: "vertical",
      spacing: "none",
      margin: "none",
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
              type: "box",
              layout: "vertical",
              contents: [
                {
                  type: "filler",
                },
                {
                  type: "box",
                  layout: "baseline",
                  contents: [
                    {
                      type: "filler",
                    },
                    {
                      type: "text",
                      text: "คลิกเลย",
                      color: "#ffffff",
                      flex: 0,
                      offsetTop: "-2px",
                    },
                    {
                      type: "filler",
                    },
                  ],
                  spacing: "sm",
                },
                {
                  type: "filler",
                },
              ],
              borderWidth: "1px",
              cornerRadius: "20px",
              spacing: "sm",
              borderColor: "#A7A9ACAA",
              margin: "xxl",
              height: "40px",
              width: "100px",
              offsetTop: "10px",
              offsetStart: "65px",
              backgroundColor: "#A7A9ACAA",
              action: {
                type: "uri",
                label: "action",
                uri: "http://linecorp.com/",
              },
            },
          ],
          position: "absolute",
          offsetBottom: "0px",
          offsetStart: "0px",
          offsetEnd: "0px",
          paddingAll: "20px",
          paddingTop: "18px",
        },
      ],
    },
  };

  bodyContent.body.contents[0].url = v.hero.url;
  newData.push(bodyContent);
});

console.log(newData[0].body.contents[0].url);
console.log(newData[1].body.contents[0].url);
