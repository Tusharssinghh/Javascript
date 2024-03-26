let today = new Date()
// console.log(today)
// console.log(today.toString())
// console.log(today.toLocaleDateString())

// console.log(typeof(today))

// let newdate = new Date(2031, 0, 27)
// console.log(newdate.toLocaleString())


let newdate1 = new Date("11-02-2023")
// console.log(newdate1.toLocaleString())

let mytimestamp = Date.now()
//to compare date in miliseconds..
// console.log(mytimestamp)
// console.log(newdate1.getTime())

//to get in seconds
// console.log(mytimestamp.now())

let date1 = new Date()
// console.log(date1.getMonth())

// console.log(date1.getDay())
console.log(date1.toLocaleString('default' ,{weekday:"long"}))
