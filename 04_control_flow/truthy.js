// +++++++++++++++++++++++++   Falsy values   +++++++++++++++++++++++++//
 
//       false, 0, -0, BigInt mein value likte hai..(0n), '', "", null, undefined, NaN-> not a number

// +++++++++++++++++++++++++   Truthy values  +++++++++++++++++++++++++//

//        "0", " ", 'false', [], {}, function(){}


//+++++++++++++++++++++++++++how to check empty array length++++++++++++++++++++++
// let arr = []
// if(arr.length === 0){
//     console.log("Array is empty")
// }

//+++++++++++++++++++how to check empty object length+++++++++++++++++++++++++++++++++++
// let myobj = {}
// if(Object.keys(myobj).length === 0){
//     console.log("This is my empty object...")
// }

//+++++++++++++++++++++++++++++++
//
//  false == 0
//  true
// 
//  false == ''
//  true
//
//  0 == ''
//  true
//
//+++++++++++++++++++++++++++++++

// function user(num1, num2){
//     return num1 + num2
// }
// console.log(user(2,3))

// if(false == 0){
//     console.log("They are equal")
// }

// if(false == '') console.log("This is also equal")

// if(0 == '' ) console.log("This is also equal")


//Nullish Coalescing Operator (??) -> null or undefined se bachne ke liye...
let val
// val = 5 ?? 10
// val = null ?? 5
// val = undefined ?? 10
// val = null ?? 10 ?? 5
// console.log(val)

//Ternary operator
// let userid = 100
// userid <= 80 ? console.log("we won") : console.log("we lost")

