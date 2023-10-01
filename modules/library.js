export let message="variable";
export function user(){
    console.log("function");
}

export class test{
    constructor(){
        console.log("class")
    }
}
export default function(){
    console.log("Default function");
}
// export{message,user,test,default};