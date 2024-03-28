// function fun1(){
//     const a = 1
//     function fun2(){
//         const b = 2
//         console.log("value of a is " , a)
//         console.log("The value of b is ", b)
//     }
//     fun2()
// }
// fun1() //This is Accessible...
// fun2() //But this isn't Accessible...


// if(true){
//     const name = "Tushar"
//     if(name === "Tushar"){

//         const sirname = " Singh"
//         console.log(name + sirname)
//     }
// }

function sum(num){
    return num + 1
}
// console.log(sum(4))

const addnum = function (num){  //this can be said as expression..
    return num + 2
}
console.log(addnum(4))
