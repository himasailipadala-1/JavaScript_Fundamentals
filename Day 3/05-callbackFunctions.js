/*A callback function is a function 
passed into another function as an argument,
 which is then executed inside the outer
  function to complete an action. Because functions are first-class citizens in JavaScript, you can treat them like any other variable by passing them around.*/
function playVideo(func1,func2){
    func1() //advertisement
    func2() //showRelatedvideos
}
function advertisement(){
    console.log("In advertisement function")
}
function showRelatedVideos(){
    console.log("In showRelatedVideos")
}
playVideo(advertisement,showRelatedVideos)