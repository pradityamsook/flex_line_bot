// // var flexpromotiondesigncard = require("./script/flex-all");

// function toThaiDateString(dateFrom, dateTo) {
//     let monthNames = ["ม.ค.", "ก.พ.", "มี.ค.", "ม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];

//     // let year = date.getFullYear() + 543; //uncomment if you want to convert to bhuddhist's year.
//     let year_dateFrom = dateFrom.getFullYear();
//     let year_dateTo = dateTo.getFullYear();
//     let month_dateFrom = monthNames[dateFrom.getMonth()];
//     let month_dateTo = monthNames[dateTo.getMonth()];
//     let numOfDay_dateFrom = dateFrom.getDate();
//     let numOfDay_dateTo = dateTo.getDate();

//     // let hour = dateFrom.getHours().toString().padStart(2, "0");
//     // let minutes = dateFrom.getMinutes().toString().padStart(2, "0");
//     // let second = dateFrom.getSeconds().toString().padStart(2, "0");
//     if (month_dateFrom === month_dateTo && year_dateFrom === year_dateTo) {
//         return `${numOfDay_dateFrom} - ${numOfDay_dateTo} ${month_dateTo} ${year}`;
//     } else if (month_dateFrom != month_dateTo && year_dateFrom === year_dateTo) {
//         console.log(`${year_dateFrom}  ${year_dateTo}`);
//         return `${numOfDay_dateFrom} ${month_dateFrom} - ${numOfDay_dateTo} ${month_dateTo} ${year_dateTo}`;
//     } else {
//         return `${numOfDay_dateFrom} ${month_dateFrom} ${year_dateFrom} - ${numOfDay_dateTo} ${month_dateTo} ${year_dateTo}`;
//     }
// }

// // console.log(flexpromotiondesigncard);
// const valid_from = new Date("2564-04-17T17:00:00.000Z");
// const valid_to = new Date("2565-04-29T17:00:00.000Z");

// // const splitDateFrom = valid_from.split("T");
// // const splitDateTo = valid_to.split("T");

// console.log(`${valid_to} ${valid_to.getTimezoneOffset()}`);

// const date = new Date();
// const offset = date.getTimezoneOffset();

// console.log(`${date} ${offset}`);

const num = 457.7333;
console.log(Math.trunc(num));
