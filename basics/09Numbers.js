const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length); /* By toString we have converted the type to String, thn we can use other methods */
// console.log(balance.toFixed(1)); /* Value up to how many Decimal places */

const otherNumber = 123.8966

// console.log("RES",otherNumber.toPrecision(1)); /* Decimal se PHLE KITNI DIGIT, so be very carefull */
// OUTPUT: 1e+2

// console.log("RES",otherNumber.toPrecision(3)); /* Decimal se PHLE KITNI DIGIT */
//  OUTPUT: 124 

const hundreds = 1000000
// console.log(hundreds); /* 1000000 */ 
// console.log(hundreds.toLocaleString()); /* 1,000,000  */
// console.log(hundreds.toLocaleString('en-IN')); /*10,00,000  */

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); /* Convert Negitive number into Positive */
// console.log(Math.round(4.6)); /* Round off the number */
// console.log(Math.ceil(4.2)); /* Always the Higher Number */
// console.log(Math.floor(4.9)); /* Always the Losest Number */
// console.log(Math.min(4, 3, 6, 8)); /* To get the minimum value */
// console.log(Math.max(4, 3, 6, 8)); /* To get the Maximum value */

console.log(Math.random()); /* 0-1 */
console.log((Math.random()*10) + 1); /* +1 , so that 0 should not be the output */
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)