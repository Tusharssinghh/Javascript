let coding = ["C++", "C", "javascript", "python", "ruby"]
coding.forEach( (item) =>{
    // console.log(item)
} )

let ans = coding.forEach( (item) =>{
    // console.log(item)   \
    // return item
} )
// console.log(ans) //this gives nothing..
// -> for each return nothing..


//applying filter to arrays..
let arr = [11,12,13,14,15,16,17,18,19,20]
//now filter prototype which returns value..`
let newnum = arr.filter( (num) => num > 15  )  //don't use {} it return nothing..or with it use.. return to return something...
// console.log(newnum)

//++++++++++++++++++++++or we want to use for each..
const newnumss = []
arr.forEach( (num) => {
    if(num > 16){
        newnumss.push(num)
    }
} )
console.log(newnumss)

const books = [
    {
        title : 'bookone', genre : 'fiction', publish : 1998, edition : 2004
    },
    {
        title : 'booktwo', genre : 'history', publish : 1970, edition : 1981
    },
    {
        title : 'bookthree', genre : 'science', publish : 2000, edition : 2023
    },
    {
        title : 'bookfour', genre : 'polity', publish : 2000, edition : 2020
    },
    {
        title : 'bookfive', genre : 'OOPS', publish : 2008, edition : 20088
    },
    {
        title : 'booksix', genre : 'Computer Networks', publish : 2002, edition : 2010
    },
    {
        title : 'bookseven', genre : 'Bible', publish : 1556, edition : 1927
    }
]
// const newans = books.filter( (bk) => bk.publish === 2000 )
// console.log(newans)

let newbooks = books.filter((bk) => {return bk.publish >= 2000})
// console.log(newbooks)

newbooks = books.filter((bk) => {
    return bk.genre === 'history' && bk.edition === 1981
})
console.log(newbooks)





