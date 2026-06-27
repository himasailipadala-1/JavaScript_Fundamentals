console.log(x)
var x=10
// Conclusion: the var variable is hoisted to the top of the code and can be accessed before it is declared, but it will be undefined until it is assigned a value.

console.log(y)
let y=20
// Conclusion: the let variable is not hoisted and cannot be accessed before it is declared, it will throw a ReferenceError.    
 console.log(z)
const z=30
// Conclusion: the const variable is not hoisted and cannot be accessed before it is declared, it will throw a ReferenceError.  
