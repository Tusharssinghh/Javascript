// const user = {
//     name : "Tushar singh",
//     age : 18,
//     location : "Ghaziabad",
//     welcomemessage : function(){
//         console.log(`${this.name}, welcome to BHU`)
//         console.log(this)
//     }
// }
// console.log(user.name)
// console.log(user.age)
// console.log(user.location)
// console.log(user.welcomemessage())
// console.log(this)

//This keyword current context ko refer krta hai...mtlb same local scope mein..

// const user = {
//     name : "Tushar singh",
//     age : 18,
//     location : "Ghaziabad",
//     newrule : function(){
//         console.log(`My name is ${this.name} and my age is ${this.age} and my location is ${this.location}`)
//         console.log(this)
//     }
// }
// user.newrule()
// user.name = "Abhishek tiwari"
// user.newrule()

// console.log(this) //node enviroment mein this..empty object ko refer krta hai..

// -> -> Browser ke andar jbb engine run krta hai toh..toh sabse jayda global object, window object hai..

// function one(){
//     console.log(this)
// }
// one()

// function one(){
//     let user = "Tushar singh"
//     console.log(this.user) //we can't access this keyword in a function..it can only be accessible in object..+++++++ IMPORTANT +++++++++++
// }
// one()

// const user = function(){
//     const user = "Tushar singh"
//     console.log(this.user)
// }
// user()

// const user = () => {
//     const user = "Tushar"
//     console.log(this.user)
// }
// user()

// const user = (num1, num2) => {
//     return num1 + num2   //explicit return
// }
// console.log(user(2,4))

// const user = (num1, num2) => num1 + num2 //Implicit return..(to return something we want to close it into parantheses)
// console.log(user(34,2))

// const user = (num1, num2) => (num1 + num2)
// console.log(user(1,101))

// const user = (num1, num2) => ({name : "Tushar singh"}) //to return an object..
// console.log(user(1,4))


const arr = [1,2,3,4]
arr.forEach(element => {
    
});