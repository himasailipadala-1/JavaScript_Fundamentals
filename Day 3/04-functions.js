//function types
//1.Named function Hoisting happens 

function add(a,b)
{

}

//2. function expression / anonymous function
let x=function (a,b){
    return a+b
}

//3.Arrow function , 
let y =(a,b)=>{
    console.log("Addition of a,b")
    return a+b 
}

console.log(y(10,20))
//4. Simple 1 line Arrow function, no need of return keyword

let z =(a,b)=> a+b
console.log(z(10,20))

let a=()=> console.log("No parameters")
console.log(a())
