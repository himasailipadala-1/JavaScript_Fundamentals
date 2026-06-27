function countOccurenceString(arr,num)
{
    let count=0
    for (let i=0; i<arr.length;i++){
        if(arr[i]==num){
            count++
        }
    }
    console.log(`The occurence of ${num} 
        in ${arr} is ${count}`)

}
function countOccurenceUsingSet(arr){
    let uniquevalues= new Set(arr)
    let count=0
    for (let i=0;i<uniquevalues.length;i++){
        count=0
        for(j=0;j<arr.length;j++)
        {
            if(uniquevalues[i]==arr[j]){
                count++
            }
        }
        console.log(`Occurence of ${uniquevalues[i]} is ${count}`)
    }
}
#countOccurenceString([ 2,4,5,2,1,2],2)
countOccurenceUsingSet([ 2,4,5,2,1,2])