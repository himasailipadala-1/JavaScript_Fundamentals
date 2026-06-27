function forLoop(){
    for ( let j=0;j<10;j++) //By default the variable j is declared as a global variable and can be accessed outside the for loop.
        {
        console.log(j);
        }

    console.log(j); //10
    for(let i = 0; i < 5; i++){
        console.log(i);
    }

}
forLoop();
function whileLoop(){
    let i = 0;
    while(i < 5){
        console.log(i);
        i++;
    }
}
whileLoop();
