function sayHi(){
    console.log("Hi")
}
sayHi();

let sayHello=function (name){
    console.log("Hello  "+name)
}
console.log(sayHello)


let sayGm=()=>{
    console.log("Good Morning")
}
sayGm()

function myFunction(greet){
    let name="Sanket"
    greet(name)
}

myFunction(sayHello)



