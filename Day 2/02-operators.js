//Operators

//+,-,*,/,%,**

let a = 10;
let b = 5;
console.log(a%b); //0
console.log(a**b); //100000
//Pre increment and post increment
let c = 10;
console.log(c++); //10 This means that the value of c is first used in the expression 
// and then it is incremented by 1. 
// So, the output will be 10, but after this line, the value of c will be 11.
console.log(c); //11
let d = 10;
console.log(++d); //11
console.log(d); //11

//pre and post decrement
let e = 10;
console.log(e--); //10
console.log(e); //9
let f = 10;
console.log(--f);
console.log(f); //9

//Comparison operators
console.log(a > b); //true
console.log(a < b);
//Logical operators
console.log(a > b && a < 20); //true
//strict equality operator : Compare the data type and value of the two operands    
a=10
b=10
console.log(a === b);
console.log(1==='1'); //false

//loose equality operator: Compares only the value of the two operands, ignoring their data types
console.log(a == b); //false
console.log(1=='1'); //true
/*Javascript has mechanism called type coercion which automatically converts one data type to another when performing operations between different data types.
In the case of loose equality operator (==), JavaScript will convert the string '1' to a number before comparing it to the number 1. 
Since both values are now of the same type (number), the comparison will return true.*/ 
console.log('1'==true); //true
console.log('0'==false);
//In loose equality comparison, JavaScript will convert the string '1' to a number before comparing it to the boolean true.
//Always use strict equality operator (===) to avoid unexpected results due to type coercion.