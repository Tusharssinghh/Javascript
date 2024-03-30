//how to iterate objects..using for in loop
//to iterate arrays we use for of loop

const user = {
    cpp : 'c plus plus',
    js : 'javascript',
    rb : 'ruby',
    java : 'java for life',
    py : 'python'
}
for(let key in user){
    // console.log(`The value of key ${key} is ${user[key]} `)
}

const arr = ["cpp", "C", "java", "python", "javascript"]
for(let index in arr){
    // console.log(index) //this provided keys...
    console.log(arr[index])
}
