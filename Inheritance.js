class employee{
    constructor(name) {
        console.log("Constructor: Employee ");
        this.name=name;
    }
    info(){
        console.log(`Inside info method (parent class) Name: ${this.name}`)
    }
}
class manager extends employee{
    info(){
        super.info();
        console.log(`Inside info method (child class) Name: ${this.name}`)
    }
}
let a=new manager("Omkar");
a.info();

class tester extends employee{
    constructor(){
        super();
        console.log("Constructor: Tester ");
    }
}
let b=new tester();