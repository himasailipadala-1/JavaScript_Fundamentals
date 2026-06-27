//var, let, const
var name
//Allows declaration,redeclaration ,reinitialization, assignment and re assignment
var name
name="himasaili"
name="padala"
console.log(name) //padala

/********************** */
//Decalration for let
let name1
console.log(name1) //undefined
//let name1 //Cannot redeclare a variable with let in the same scope
name1="himasaili"
name1="padala"
console.log(name1) //padala
//Real time sue case for let if in for
for (let i=0;i<5;i++){
    console.log(i)
}   
/************** */

//Const
//It is mandatory to initialize a variable declared with const
//const name3
const name2="himasaili"
//We cannot reassign a value to a variable declared with const
//name2="padala" //TypeError: Assignment to constant variable.