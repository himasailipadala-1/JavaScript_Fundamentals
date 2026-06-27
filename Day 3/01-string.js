//substring() used in old js
let courseName="Playwright"

console.log(courseName.substring(2,7))

//-ve indices are treated as 0 in substring() method
console.log(courseName.substring(-2,7)) //Playwri
console.log(courseName.substring(-4,7))
//That's why slice came into picture which can handle -ve indices as well.



//slice
let fileName="testleaf.txt"
const ext=fileName.slice(-3)
console.log(ext) //txt
console.log(fileName.slice(2,4))
//start and end index are not swappable like substring
console.log(fileName.slice(4,2))
//From start index till end it will be printed
console.log(fileName.slice(2))
console.log(fileName.slice(-4,10))//.t
console.log(fileName.slice(20))
//.tx
