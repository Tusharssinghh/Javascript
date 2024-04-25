function  setusername(username){
    this.username = username
    console.log("called")
}

function createuser(name, gmail, password){
    setusername.call(this, name)  //IMPORTANT - use call to 'call' another function in a function due to global exection context
    this.gmail = gmail
    this.password = password
}

const user = new createuser("Tushar", "tushar@hello.com", 123)
console.log(user)