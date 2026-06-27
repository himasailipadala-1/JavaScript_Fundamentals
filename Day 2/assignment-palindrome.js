function isPalindrome(str){
    let isPalidrome=true
    for(let i=0;i<str.length;i++){
        isPalidrome=true
        if(str[i]!==str[str.length-1-i]){
            isPalidrome=false
            return false;
        }       
    }
    return isPalidrome
}
let str="abcdcba"
console.log(`Is the string  "${str}" a palindrome? :${isPalindrome(str)}`)
let str1="Himalaya"
console.log(`Is the string "${str1}" a palindrome? :${isPalindrome(str1)}`)
