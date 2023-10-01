class Student{
    constructor(name,age){
        this.name = name;
        this.a=age;
        console.log("Constructor function");
    }
    sayHello(){
        console.log("Inside Prototype function\n Name: "+this.name+" \nAge: "+this.a);
        console.log(`\n\nInside Prototype function\n Name: ${this.name} \nAge: ${this.a}`);
    }
    static sayBye(){
        console.log("Inside static function");
    }
}
let a=new Student("Omkar",22);
a.sayHello();
Student.sayBye();