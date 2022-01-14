/** function format money to Thai bath*/
function formatMoneyTHB(money) {
  return money.toLocaleString("th-TH", {
    style: "currency",
    currency: "THB",
  });
}
