const name = ['Ashu', 'Tushar', 'kanik']
const sir_name = ['gangwar', 'Singh', 'pathak']

name.push(sir_name)
console.log(name)
// here it push array into arrrays..it actually push whole array into it...


// By concat method..it makes new array and all the existing elements into it..
const total_name = name.concat(sir_name)
console.log(total_name)

// *************************spread operator to add strings */
const new_names = [...name, ...sir_name]
console.log(new_names)
// This method is usually preferred
// ********************************** */

 
const newarr = [1,2,3,[2,3,4,[43,4,4,[23,2,32,33]]]] 
const array1 = newarr.flat(Infinity) //to extract all elements from nested arrays
console.log(array1)

// when we are accessting from info from web the data may be in nodelist, string, objects..so we need it in array..to check it we use..
console.log(Array.isArray("Hello world"))


//To convert string into arrays...
console.log(Array.from("Tushar Singh"))

// to change number, string into array..
const num1 = 100
const num2 = 200
const num3 = 300
console.log(Array.of(num1, num2, num3))

