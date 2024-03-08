// const users = new Object()
const users = {}

users.id = 12121,
    users.name = "Ankush",
    users.isLoggedIn = false

console.log(users)



const anotherUser = {
    userDetails: {
        userInfo: {
            firstName: "Ankush",
            lastName: "Thakur"
        }
    }
}

console.log(anotherUser.userDetails.userInfo.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2}
console.log(obj3, "result") 



// console.log(Object.keys(users)); /*[ id, name, isLoggedIn] */
// console.log(Object.values(users)); /* [ 12121, 'Ankush', false ] */
console.log(Object.entries(users)); /* [ [ 'id', 12121 ], [ 'name', 'Ankush' ], [ 'isLoggedIn', false ] ] */

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));