//JavaScript array stores multiple items under single variable and they are re-sizable and can stores different values
// let arr = [0, 1, 2, 3, true, "Tushar singh"]
// console.log(arr[5])

// // const myarr = [0,1,3,4]
// // const myhero = ['Tushar', 'Rahul', 'Ankit', 'Himanshu']
// const arr1 = new Array(1,2,3,4)
// // console.log(myhero)
// console.log(arr1[3])
// arr1.push(100)
// console.log(arr1)

// arr1.pop()
// console.log(arr1)

// arr1.unshift(11)   it enters value at front..
// console.log(arr1)    

// arr1.shift()
// console.log(arr1)

// console.log(arr1.includes(4))
// console.log(arr1.indexOf(4))

// //add all the elements of array into string use .join operation
// const newarr = arr1.join()
// console.log(typeof(newarr))

// console.log(arr1)
// console.log(newarr)

const arr = new Array(11,12,13,14,15)
console.log("Array before is " , arr)

const arr1 = arr.slice(1,4)
console.log(arr1)
console.log(arr)

const final_array = arr.splice(1,3)
console.log(final_array)
console.log(arr)

//slice doesn't include last digit but splice include last digit and manipulate(cut) the original array...
