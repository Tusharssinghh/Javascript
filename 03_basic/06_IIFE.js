//IIFE => Immediately Invoked Function Expressions
//the function who execute immediately and global scope ke problem se bachne ke liye..iife ka use kiya jata hai..



( function hello(){ //named iife

    console.log("Tushar singh")
})(); //use parantheses to revoke the iife


( () => {
    console.log("At Hostel")             
})();

( (name) => {
    console.log(`My name is ${name}`)            //By giving parameters in iife..
})("Tushar singh")



//to write two iife together use parantheses..