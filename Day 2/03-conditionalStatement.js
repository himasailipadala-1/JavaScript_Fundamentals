function getBrowser(browserName){ //Named function
if(browserName === "Edge"){
    console.log("You've got the Edge!");    
}else if(browserName === "Chrome" || browserName === "Firefox" || browserName === "Safari" || browserName === "Opera"){
    console.log('Okay we support these browsers too');
}else{
    console.log('We hope that this page looks ok!');    
}

}
getBrowser("Edge");
getBrowser("Chrome");
getBrowser("Firefox");
getBrowser("Safari");
getBrowser("Opera");
getBrowser(1);

//1.debugging, Add breakpoints
//click on the bug symbol on the left panel
//2. click on + (launch profile)and click javascript debug terminal
//go to current folder cd <folder name> and run node ./filename.js
//switch(browserName){    
    