// //how to give many arguments in a function by rest operator...
// function ans(...num1){
//     return num1
// }
// // console.log(ans(5,6,7,8,89))
// //it gives values in array form.... [5,6,7,8,9,89]

// function fun(...num1){
//     return num1
// }
// // console.log(fun(1,2,3,4,5,6,7,8,9,10))

// function log1(...num1){
//     const sum1 = num1 + num1
//     return sum1  
// }
// console.log(log1(1,2,3,4,5))  //what is this..

// //by excluding few parameters..it exclude first two parameter
// function newfun(val1, val2, ...num){
//     return num
// }
// console.log(newfun(1,2,3,4,5,6))

// function fullfunction (...num1){
//     return num1
// }
// // console.log(fullfunction(1,2,3,4,5,6))







// //Passing object values in function..
// const user = {              //making an object
//     name : "Tushar singh",
//     age : 18,
//     location : "Ghaziabad"
// }

// function fun(anyobject){
//     return `The value of name is ${anyobject.name} and the value of age is ${anyobject.age} and the location is ${anyobject.location}`
// }

// console.log(fun(user))   

//another method..
// fun({
//     name : "Tushar singh",
//     age : 18,
//     location : "Ghazaibad"
// })





//passsing the value  of object in function..
//first making objects..
// const newobj = {
//     name : 'Tushar singh',
//     age : 18,
//     location : 'ghaziabad'
// }
//making the function
// function newfun(anynewobject){
//     console.log(`The name of user is ${anynewobject.name} and the age of user is ${anynewobject.age} and the location of user is ${anynewobject.location}`)
//     return 
// }
// console.log(newfun(newobj))

// newfun({
//     name : "Kanik khansali",
//     age : 23,
//     location : "Uttarakhand"
// })


//passing Arrays values in function
// const newarr = [11,22,33,44,55,66]
// function fun(anyarray){
//     return anyarray[2]
// }
// // console.log(fun(newarr))

// console.log(fun([11,12,13,14,15]))