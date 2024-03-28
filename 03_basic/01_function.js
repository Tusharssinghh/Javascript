// function fun(){
//     console.log("T")
//     console.log("U")
//     console.log("S")
//     console.log("H")
//     console.log("A")
//     console.log("R")
// }
// // fun()

// function sum(a, b){
//     console.log(a+b)
// }
// // sum(4,5)

// function funans(num1, num2){
//     result = num1 + num2
//     return result
// }
// // console.log(funans(1,3))

// function name(name){
//     return `My name is ${name}`
// }
// // console.log(name("tushar"))

// function myname (name){
//     return `My name is ${name}`
// }
// // console.log(myname("Tushar singh"))

function func(name){
    return `${name} just logged in`
}
console.log(func("Kanik Pathak"))
console.log(func(""))
console.log(func())
console.log(func)

function newfun(name){
    if(name === undefined){
        console.log("Please enter a name")
        return
    }
    return `The user name is ${name}`
}
console.log(newfun())

function newfun1(name){
    if(!name ){
        console.log("Please enter a name")
        return
    }
    return `The user name is ${name}`
}
console.log(newfun1())

//we can give default values..
function newfun2(name = "sammy"){
    if(!name ){
        console.log("Please enter a name")
        return
    }
    return `The user name is ${name}`
}
console.log(newfun2())