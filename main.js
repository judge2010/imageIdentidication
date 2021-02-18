Webcam.set({
    width: 300,
    height: 300,
    image_format:'png',
    png_quality : 90,
    constraints:{
        facingMode:"enviorment"
    }
});
var camera=document.getElementById("camera");
Webcam.attach(camera);
function take_p(){
 Webcam.snap(function(data_uri){
     document.getElementById("Photo").innerHTML= "<img id='Snapshot' src ='"+data_uri+"'>";
 });
};
console.log(ml5.version);
 classifier = ml5.imageClassifier("MobileNet",modelLoded);
function modelLoded(){
    console.log("Model is loaded.");
}
function iden(){
    Photo= document.getElementById("Snapshot");
    classifier.classify(Photo,gotResult);
};
function gotResult(error,result){
if(error){
    console.log(error);
}
else if(result){
    console.log(result);
    document.getElementById("object-label").innerHTML = result[0].label;
}
};
