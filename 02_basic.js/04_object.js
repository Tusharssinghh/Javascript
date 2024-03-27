// const tinderuser = {}           this isn't a singhleton object
// const obj = new Object()        this is a singleton object
// obj.id = 18
// obj.name = "Tushar singh"
// obj.isloggedin = false
// console.log(obj)

// const newobj = {
//     fullname : {
//         firstname : "Tushar",
//         lastname : "Singh",
//         gharkanaam : {
//             first : "Pappu",
//             last : "Can't dance saala"
//         }
//     }
// }
// console.log(newobj.fullname.gharkanaam.first)

// const myobj = new Object()
// console.log(typeof myobj)

// myobj.id = "123abc"
// myobj.name = "Tushar singh"
// myobj.loggedin = false

// console.log(myobj)
 
// const user = {
//     name : "Tushar singh",
//     gharkanaam : {
//         firstname : "Tushar",
//         lastname : "singh"
//     }
// }
// console.log(user)
// console.log(user.gharkanaam.lastname)


////to add objects..
const obj1 = {1:"a", 2:"b", 3:"c", 4:"d"}
const obj2 = {5:"e", 6:"f", 7:"g", 8:"h"}
// const obj3 = {obj1, obj2} //this makes the object into object..
// console.log(obj3)

// const obj3 = Object.assign(obj1, obj2)
const obj3 = Object.assign({}, obj1, obj2) //this is important
// console.log(obj3)

// const obj3 = {...obj1, ...obj2}

//array of objects...
const user = [
    {
        id : 1,
        email : "Tusharsinghmodi@gmail.com"
    },
    {
        id : 2,
        email : "Tusharsingh2031@gmail.com"
    }
]
// console.log(user[1].email)


const mynewobj = new Object();
mynewobj.id = 1
mynewobj.email = "Tusharsinghmodi@gmail.com"
mynewobj.loggedin = true
// console.log(Object.keys(mynewobj))          //this is important since it convert object into array..
// console.log(Object.values(mynewobj))
// console.log(Object.entries(mynewobj))

console.log(mynewobj.hasOwnProperty('loggedin'))
console.log(mynewobj.hasOwnProperty('name'))

