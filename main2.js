img=""
Status=""
function preload(){
img=loadImage("bedrm.jpg")
}
function setup(){
    canvas=createCanvas(500, 400);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
}
function draw(){
    image(img, 0, 0, 500, 400);
}
function modelLoaded(){
    console.log("Model Loaded");
    Status=true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
}