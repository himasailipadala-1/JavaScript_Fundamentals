/*string operations in javascript
"" , '', `` are used to define strings in javascript.
string literals are used to represent text in javascript.
String is a primitive data type in javascript.
*/
let company="Microsoft";
let firmName="Microsoft";
/* Here the company and firmName point to same memory location because they have same value and string is a primitive data type in javascript.
In javascript, when we create a string literal, it is stored in a memory location and the variable that holds the string is actually a reference to that memory location. 
When we create another string literal with the same value, it will point to the same memory location as the first one, instead of creating a new memory location for the second string.
//Arrays and objects are non primitive data types . The objects are stored in heap memory and the variables that hold the objects are references to the memory location where the object is stored.
*/
console.log(company===firmName); //true
let companyName1= new String("Microsoft");//1001
let companyName2= new String("Microsoft");//1002
console.log(companyName1==companyName2);
/* Here the companyName1 and companyName2 point to different memory locations because they are created using the new keyword and they are objects in javascript.
In javascript, when we create a string using the new keyword, it creates a new object in memory and the variable that holds the string is a reference to that memory location.  
When we create another string using    the new keyword with the same value, it will create a new object in memory and the variable will point to that new memory location, instead of pointing to the same memory location as the first one.
*/
console.log(companyName1===companyName2); //false

//Esc sequence characters in javascript
let str1="Hello\nWorld";
console.log(str1);
let str2='Hello hima\'sWorld';
console.log(str2);

//Concatenation of strings in javascript
let testCaseName="Test Case Smoke";
let testCaseNumber=1;
console.log(testCaseName+" "+testCaseNumber); //Test Case Smoke 1
//concat
let concat=testCaseName.concat(testCaseNumber).concat("1").concat("2");
console.log(concat); //Test Case Smoke1

//Template literals in javascript
let tempLiteral=`${testCaseName} in salesforce ${testCaseNumber}`;
console.log(tempLiteral); //Test Case Smoke in salesforce 1
let courseName="Playwright"
console.log(`Length f the coursename is${courseName.length}`); //Length of the coursename is 10
//Index
console.log(courseName[0]); //P
courseName.indexOf("y"); //1    
console.log(`The index of char y is ${courseName.indexOf('y')}`)
//charAt 
console.log(`The character at index 2 is ${courseName.charAt(2)}`); //The character at index 2 is a
//substring
console.log(`The substring from index 2 to 5 is ${courseName.substring(2,5)}`); 
name="      Hima        "
console.log(name.trim())
let sentence="This is a sample sentence for testing the split method in javascript";
console.log(sentence.split(" ")); //["This", "is", "a", "sample", "sentence", "for", "testing", "the", "split", "method", "in", "javascript"]   
