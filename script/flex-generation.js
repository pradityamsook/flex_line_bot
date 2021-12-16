var msg = require("./pre-promotion-payload.json");

var bodyContent = {
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
}; //flex promotion

// var item = msg.messages;
var imageUrlPromotion = [];

// if (item[0].type === "flex") {
//   console.log("flex");
//   var card = item[0].contents.contents;
//   for (let index = 0; index < card.length; index++) {
//     if (card[index].body.contents[1].text === "promotion") {
//       imageUrlPromotion.push(card[index].hero.url);
//       card[index].body.contents = bodyContent;
//       console.log(card[index].body.contents);
//       console.log("--------------------------------");
//       card[index].body.paddingAll = "0px";

//       delete card[index].hero;
//       delete card[index].footer;
//     }
//   }
//   for (let index = 0; index < card.length; index++) {
//     card[index].body.contents[index].url = imageUrlPromotion[index];
//   }
//   msg.messages[0].contents.contents = card;
// }

// get in contents type bubble //

var imageUrlArr = [];
function getImageUrl(obj) {
  obj.map((item) => {
    imageUrlArr.push(item.hero.url);
  });
}
getImageUrl(msg.messages[0].contents.contents);
console.log(imageUrlArr);

let tempContents = [];
imageUrlArr.forEach((item, index) => {
  var tempBodyContents = bodyContent;
  tempContents.push(tempBodyContents);
});
// console.log(tempContents);
const lastTempBodyContents = tempContents[0].body.contents.slice();

imageUrlArr.forEach((item, index) => {
  lastTempBodyContents.url = item;
});

console.log(lastTempBodyContents[0].body.contents);
console.log(lastTempBodyContents[1].body.contents);
// let messagesObj = msg.messages[0];
// msg.messages[0].contents.contents = msg.messages[0].contents.contents.map(
//   (item, index) => {
//     // var temp = msg.messages[0].contents.contents.map((item, index) => {
//     // console.log(item);
//     if (messagesObj.type === "flex") {
//       if (item.body.contents[1].text === "promotion") {
//         if (item.hero) imageUrlPromotion.push(item.hero.url);
//         item = [].slice();
//         // bodyContent.body.contents.slice();
//         bodyContent.body.contents[0].url = imageUrlPromotion[index];
//         // item.slice();
//         item = bodyContent;
//       }
//     } else return item;
//     // console.log(item.body.contents[0].url);
//     return item;
//   }
// );
// const card = msg.messages[0].contents.contents;
// // console.log(imageUrlPromotion);
// console.log(card[0].body);
// console.log(card[1].body);
msg.backup_payload = JSON.parse(JSON.stringify(msg));
msg.backup_payload_zanroo = JSON.parse(JSON.stringify(msg));
// return msg;
