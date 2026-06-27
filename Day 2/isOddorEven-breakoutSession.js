function isOddorEven(num){
    if(num==0 || num==1){
        console.log(num + " is neither odd nor even");

    }
    else if(num%2==0){
        console.log(num + " is an even number");
    }
    else{
        console.log(num + " is an odd number");

    }
}
isOddorEven(12);
isOddorEven(0);
isOddorEven(1);
isOddorEven(13);

function findAllOddorEven(num){
    for(let i=0;i<=num;i++)
    {
        if(i==0 || i==1){
            console.log(i + " is neither odd nor even");
        }
        else if(i%2==0){
            console.log(i+ "is an even number")
        }
        else{
            console.log(i+ "is an odd number")

        }
    }
}
findAllOddorEven(10);

