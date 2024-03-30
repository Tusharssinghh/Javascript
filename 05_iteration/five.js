//High order array loop
//forEach prototype of array..
const coding = ["cpp", "javascript", "java", "ruby", "C"]
// coding.forEach(function(item){
//     console.log(item)
// })

//By arrow function..
// coding.forEach( (item) => {
//     console.log(item)
// })

//a simple function..
function printme(item){
    console.log(item)
}

// coding.forEach(printme) //only giving reference of function..

coding.forEach((item, index, arr) => {
    console.log(item, index, arr)
})

const mylanguages = [
    {
        language : "javascript", 
        languageextension : ".js"
    },
    {
        language : "C", 
        languageextension : ".C"
    },
    {
        language : "java", 
        languageextension : "java"
    },
    {
        language : "python", 
        languageextension : ".py"
    }
]

//how to iterate objects of array..
mylanguages.forEach( (item) => {
    console.log(item.languageextension) 
})

mylanguages.forEach( (item) => {
    console.log(item.language)
})
