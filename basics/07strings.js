// We can Declare String using new Keyword,
// output will be in key values pair
const myVar = new String("Hello World");

const gameName = new String("hitesh-hc-com");

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2)); /* Charater at 2 index/position */
console.log(gameName.indexOf("t")); /*Character t index  */

const newString = gameName.substring(4, 8); /* Start position & end Position (end position does not include) */
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "   hitesh    ";
console.log(newStringOne);
console.log(newStringOne.trim()); /* remove spaces */

const url = "https://hitesh.com/hitesh%20choudhary";

console.log(url.replace("%20", "-"));

console.log(url.includes("sundar"));

console.log(gameName.split("-"));
