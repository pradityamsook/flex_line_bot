var msg = require("./pre-promotion-payload.json");

var bodyContent = [
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
]; //flex promotion

var item = msg.messages;
var imageUrlPromotion = [];

if (item[0].type === "flex") {
  console.log("flex");
  var card = item[0].contents.contents;
  for (let index = 0; index < card.length; index++) {
    if (card[index].body.contents[1].text === "promotion") {
      imageUrlPromotion.push(card[index].hero.url);
      card[index].body.contents = bodyContent;
      console.log(card[index].body.contents);
      console.log("--------------------------------");
      card[index].body.paddingAll = "0px";

      delete card[index].hero;
      delete card[index].footer;
    }
  }
  for (let index = 0; index < card.length; index++) {
    card[index].body.contents[index].url = imageUrlPromotion[index];
  }
  msg.messages[0].contents.contents = card;
}

console.log(msg.messages[0].contents.contents[0].body.contents);
console.log(msg.messages[0].contents.contents[1].body.contents);
// console.log(msg.messages.contents.contents.body);
// msg.messages = msg.messages.map((item) => {
// //   item.altText = item.contents.contents[0].body.contents[0].text;
//   if (item.type === "flex") {
//         const card = item.contents.contents;
//         for (let index = 0; index < card.length; index++) {
//             if (card[index].body.contents[1].text === "promotion") {
//                 card[index].body.contents = bodyContent;
//                 card[index].body.contents[0].url = card[index].hero.url;
//                 console.log(card[index].body.contents[0].url)
//                 card[index].body.paddingAll = "0px";

//                 delete card[index].hero;
//                 delete card[index].footer
//             }

//         }
//         console.log(card)
//     // item.contents.contents = item.contents.contents.map((card, index) => {
//     //     console.log(card.body);
//     //   if (card.body.contents[1].text === "promotion") {
//     //     console.log("Is promotion");
//     //     console.log(index);
//     //     card.body.contents = bodyContent;
//     //     bodyContent[0].url = card.hero.url;
//     //     card.body.paddingAll = "0px";

//     //     delete card.hero;
//     //     delete card[.footer
//     //   }
//     //   return card;
//     // });
//   } else return item;
//   return item;
// });
msg.backup_payload = JSON.parse(JSON.stringify(msg));
msg.backup_payload_zanroo = JSON.parse(JSON.stringify(msg));
// return msg;
