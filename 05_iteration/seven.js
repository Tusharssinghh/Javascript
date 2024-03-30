//Map...

let arr = [1,2,3,4,5,6,7,8,9,10]
//adding in array..
// let nums = arr.map((num) => num + 10) 
// console.log(nums)

//chaining of methods..
// const numss = arr.map(  ( num ) => num * 10).map((num) => num + 1)
// console.log(numss)

const numss = arr.map(  ( num ) => num * 10).map((num) => num + 1).filter((nums) => nums > 50)
console.log(numss)