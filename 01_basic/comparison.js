// console.log(2 <= 1)

// console.log("2" > 1)
// console.log("5" > 4)



// console.log(null > 0)
// console.log(null < 0)
// console.log(null == 0)

// console.log(null >= 0)
// console.log(null <= 0)



// console.log(undefined == 0)
// console.log(undefined > 0)
// console.log(undefined >= 0)
// console.log(undefined <= 0)
// console.log(undefined < 0)

// console.log(4 === "4")

// // const hero = ['a', 'b', 'c', 'd']

// This is how symbol is created
let ans = Symbol('123')
console.log(ans)


// //This is how object is created..objects are in key-value pairs..
// let myobj = {
//     name : "tushar",
//     age : 23
// }


//This is how function is created
// const myfun = ()=>{
//     console.log("Hello World")
// }
// print (myfun.val)





// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Data types are of two types primitive and non-primitive..
// -> Stack uses only primitive datatype..
// -> Primitive datatype mein (stack memory) use hoti...(Call by value)

// -> Non-Primitive datatype mein (heap memory) use hoti hai ...(call by reference)

//call by reference

const fun1 = {
    email : "Tusharsingh2031@gmail.com",
    age : 23,
}

const fun2 = fun1
fun2.email = "Tusharsinghmodi@gmail.com"

console.log(fun1.email)
console.log(fun2.email)

//Heap mein kuch bhi rakhne se, uska reference milta hai..
//Stack mein kuch bhi rakhne se, uski copy milti hai..
