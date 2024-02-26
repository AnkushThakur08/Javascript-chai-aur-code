// Date

const myDate = new Date();

console.log(myDate.toDateString()); /* Mon Feb 26 2024 */
console.log(myDate.toLocaleString()); /* 2/26/2024, 6:05:37 PM */

console.log(myDate.toLocaleDateString()); /* 2/26/2024 */
console.log(myDate.toLocaleTimeString()); /* 12:35:37 PM */

console.log(myDate.toString()); /* Mon Feb 26 2024 12:35:37 GMT+0000 (Coordinated Universal Time) */
console.log(myDate); /* 2024-02-26T12:35:37.025Z */
console.log(myDate.toISOString()); /* 2024-02-26T12:35:37.025Z */
console.log(myDate.toTimeString()); /* 12:35:37 GMT+0000 (Coordinated Universal Time) */
console.log(myDate.toUTCString()); /* Mon, 26 Feb 2024 12:35:37 GMT */

// DATE IS A TYPE OF OBJECT
console.log(typeof myDate);

// HOW We can create Dates

// let myCreatedDate = new Date(2023, 0, 23) /* 0 - January  */
// let myCreatedDate = new Date(2023, 0, 23, 5, 3); /* 5, 3  for Hour and minutes*/
// let myCreatedDate = new Date("2023-01-14") /* Format - yyyy/mm-dd */
let myCreatedDate = new Date("01-14-2023"); /* dd-mm-yyyy */
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now(); /* It will give us the time in milliseconds */

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1); /* As month always start from 0 */
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString("default", {
  weekday: "long",
});

// MONTH always starts from 0
