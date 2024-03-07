const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros) /* [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ] */
// console.log(marvel_heros[3][1])


// CONCAT - RETURNS A NEW ARRAY
marvel_heros.concat(dc_heros)
// console.log(marvel_heros) /* Give old result, as we are logging the existing array  Push- Modify krta hai original ko, concat return krta hai new ko */

const res = marvel_heros.concat(dc_heros)
// console.log(res) /* [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ] */


const result = [...marvel_heros, ...dc_heros]
console.log(result); /* [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ] */


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// Flat - Returns a new array with all sub-array elements
// console.log(another_array.flat()) /* will solve 1 level down */
// console.log(another_array.flat(2)) /* Flat solve 2 level down */
console.log(another_array.flat(Infinity)) /* Flat solve 2 level down */


console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));