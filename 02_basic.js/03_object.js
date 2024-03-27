// singleton
// Object.create

//object through literal..
// const jsuser = {}

//how to create symbol..
const mysym = Symbol("key1")

const jsuser = {
    name : "Tushar",
    age : 18,
    email : "tusharsinghmodi@gmail.com",
    loggedin : true,
    location : "Ghaziabad",
    lastlogin : ["Saturday", "Sunday"],
    "full name" : "Tushar Singh",  //This is string
    [mysym] : "mykey1"
}

// console.log(jsuser.name)
// console.log(jsuser.age)
// console.log(jsuser.email)

// console.log(jsuser["name"])
// console.log(jsuser["age"])
// console.log(jsuser["location"])
// console.log(typeof jsuser["full name"])

// accessing symbol
console.log(jsuser[mysym]) //creating symbol and intitiate it through symbol & accessing..

// changing value of object's values: 
jsuser.email = "Tusharsingh2031@gmail.com"

// if we want ki object value doenn't changed...we apply freeze to object...

// Object.freeze(jsuser)
// // now we can't change object values..
// jsuser.email = "Tusharsingh2031@google.com"
// console.log(jsuser)

// jsuser.greeting = function(){
//     console.log("This is the first function")
// }
jsuser.greeting1 = function(){
    console.log(`The exactly age is ${this.age} and my name is ${this["full name"]}`)
}
// console.log(jsuser.greeting)
console.log(jsuser.greeting1())

console.log(jsuser)

