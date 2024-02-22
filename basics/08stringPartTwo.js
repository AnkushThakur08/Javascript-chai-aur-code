// Methods of String

const myName = "Ankush";
console.log(myName);

const newName = new String("Ankush Thakur");
console.log(newName);

// Length - Also Count the Spaces
console.log(newName.length); /* 14 */

// CharAt- Tell the character based on the index
console.log(newName.charAt(10)); /* k */

// IndexOf - Tell the index of the INDEX based on Character, It is case senstive
console.log(newName.indexOf("T")); /* 7 */

// At - Takes integer value and returns the item at that index, allowing for positive and negative integers.
console.log(newName.at(0)); /* A */
console.log(newName.at(-1)); /* r */

// subString - returns the part of the string between the start and end indexes, or to the end of the string.
/* 1st - indexStart - index of the first character to include in the returned substring. */
/* IndexEnd is optional, IndexEnd element is not included */
console.log(newName.substring(0)); /* Ankush Thakur */
console.log(newName.substring(1, 5)); /* nkus*/
console.log(newName.substring(7, 11)); /* nkus*/

// Slice - Same as SubString, but Negitive value is also allowed
console.log(newName.slice(0)); /* Ankush Thakur */
console.log(newName.slice(1, 5)); /* nkus*/
console.log("CCCC", newName.slice(-6, 13)); /* Thakur*/


// concate - It concatenates the string arguments to this string and returns a new string.
// BUT RECOMMENED IS INTERPOLATION
console.log(newName, myName)


// Includes - performs a case-sensitive search





// charCodeAt() -  returns an integer between 0 and 65535 representing the UTF-16 code, ONLY return the integer
console.log(newName.charCodeAt(0)) /* A ka 65 */

// charCodeAt() - returns a non-negative integer that is the Unicode code point value
console.log("😍".codePointAt(0))

// Ends



