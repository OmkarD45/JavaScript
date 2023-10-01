function sum(){
    let sum=0;
    for(let i in arguments){
        sum +=arguments[i];
    }
    console.log(sum);
}
sum("Good Morning",1,2,3,4,5);
sum(2,3); 



function Add(name,...args){
    console.log(name);
    let sum=0;
    for(let i in args){
        sum=sum+args[i];
    }
    console.log(sum);
}

Add("Omkar",4,3,2,1,5);



arr=[1,2,3];
Add("Omkar",...arr);

 