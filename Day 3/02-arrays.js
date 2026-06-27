/*Arrayas
1. Dynamic in size
2. Heterogenous in nature
It can store different types of data

*/
let arryChar=['a','b','c','d','e']
arryChar.push('f')//add element at the end of the array
console.log(arryChar)
arryChar.pop()//remove element from the end of the array    
console.log(arryChar)

//unshift Add 1 or more element to the beginning of the array
arryChar.unshift("x","y","z")
console.log(arryChar)

//Can we add in the middle of the array? Yes we can add in the middle of the array using splice method
//4.shift() remove only the 1st element from the beginning of the array
arryChar.shift()
console.log(arryChar)
//5.splice() method can be used to add or remove elements from the middle of the array
//Extract a part of the array with out changing the original array
let arrChar1=["x","y","z","a","b","c"]
console.log(arrChar1.slice(2,5))//["z","a","b"] 
console.log(arrChar1.slice(-4,-1))//["z","a","b"]
//6.Splice() Add or remove elements from an array
let arrayChar3 =["x","y","z","a","b","c"]
console.log(`The arrayChar3 is ${arrayChar3}`)
console.log(arrayChar3.splice(1,3,"n","m","p"))

//7.sort() Sorts the elements alphabetical order
let arrayChar4 =["x","y","z","a","b","c"]
console.log(arrayChar4.sort())

let numArray=[10,8,7,9]
console.log(numArray.sort()) //[10,7,8,9]

//set same as python's It gives unique values from array
let testIds =[100,102,100,100,102,103]
let uniqueIds = new Set(testIds)
console.log(uniqueIds)