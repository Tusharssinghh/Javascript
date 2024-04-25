class hello{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    sayhello(){
        console.log(`My name is ${this.name} and my age is ${this.age}`);
    }
}
let hell = new hello('Tushar', 25)
// sayhello()
hell.sayhello()