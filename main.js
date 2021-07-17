
Webcam.set({
width:350,
height:300,
image_format:'png',
png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function take(){
    Webcam.snap(function(data_uri)
{
    document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
});
}
console.log('ml5 version',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/7aYmve178/model.json',modelLoaded);
function modelLoaded(){
    console.log('modelLoaded');
}
function check(){
    img=document.getElementById('captured_image');
    classifier.classify(img,gotResult);
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        document.getElementById("result1").innerHTML=results[0].label;
        document.getElementById("result2").innerHTML=results[0].confidence.toFixed(3);
    };
}
