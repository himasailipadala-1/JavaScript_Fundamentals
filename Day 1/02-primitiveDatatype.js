//Primitive datatypes
/* 
1.number
2.string
3.boolean 
4.undefined
5.null  */
//Declaration
var phonenumber; //Memory is allocated to store  a number
//Assignment
phonenumber = 1234567890; //Assigning a value to the variable
//initialization
var name = "John"; //Declaring and initializing a string variable in 1 step
console.log(phonenumber);
console.log(name);

//Nature of changint eh datatype dynamically is called dynamic typing
console.log(typeof phonenumber); //number
console.log(typeof name); //string
var email="himasaili.padala@gmail.com"; 
var password=`hima1234`;
var name1='hima';
//We can use "" '' `` for string declaration
console.log(email);
var isTrue =true; //boolean datatype
console.log(isTrue);
//undefined
var accountNumber =undefined; //undefined is a datatype and also a value
//When we dont know what value is going to be assigned only after executing in future
//  we will come to know the type, so in that case we used undefined
//Null datatype
var landline =null; //Intentionally assigning null to a variable means that it has no value
console.log(landline);
console.log(typeof landline); //object (this is a bug in JavaScript, null is not an object but it returns object)   
