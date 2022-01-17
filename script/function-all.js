/*
 * function format money to Thai bath
 * e.g. 1996 -> ฿1,996
 */
function formatMoneyTHB(money) {
  return money.toLocaleString("th-TH", {
    style: "currency",
    currency: "THB",
  });
}
a;

/*
 *function format date to Thai data
 * but years reference from A.D. (e.g. 2022)
 */
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

  // let year = date.getFullYear() + 543; //uncomment if you want to convert to bhuddhist's year.
  let year = date.getFullYear();
  let month = monthNames[date.getMonth()];
  let numOfDay = date.getDate();

  let hour = date.getHours().toString().padStart(2, "0");
  let minutes = date.getMinutes().toString().padStart(2, "0");
  let second = date.getSeconds().toString().padStart(2, "0");

  return `${numOfDay} ${month} ${year}`;
}
