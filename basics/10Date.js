// Date


const myDate = new Date()

console.log(myDate.toDateString()) /* Mon Feb 26 2024 */
console.log(myDate.toLocaleDateString()) /* 2/26/2024 */
console.log(myDate.toLocaleTimeString()) /* 12:35:37 PM */

console.log(myDate.toString()) /* Mon Feb 26 2024 12:35:37 GMT+0000 (Coordinated Universal Time) */
console.log(myDate) /* 2024-02-26T12:35:37.025Z */
console.log(myDate.toISOString()) /* 2024-02-26T12:35:37.025Z */
console.log(myDate.toTimeString()) /* 12:35:37 GMT+0000 (Coordinated Universal Time) */
console.log(myDate.toUTCString()) /* Mon, 26 Feb 2024 12:35:37 GMT */

// DATE IS A TYPE OF OBJECT