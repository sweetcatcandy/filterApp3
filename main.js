noseX=0;
noseY=0;
function preload(){
lipstick_1=loadImage('lipstick1.png');
}

function setup(){
 canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.hide();
posenet=ml5.poseNet(video,modelLoaded);
posenet.on("pose",got_poses);
}

function draw(){
image(video,0,0,300,300);
fill(255,0,0);
stroke(126,0,0);
image(lipstick_1,noseX-225,noseY-100,50,50);
}

function take_snapshot(){
    save('picture.png');
}

function modelLoaded(){
    console.log("model is loaded");
}

function got_poses(poses){
 if(poses.length>0){
    console.log(poses);
    console.log("nose x="+poses[0].pose.nose.x);
    console.log("nose y="+poses[0].pose.nose.y);
    noseX=poses[0].pose.nose.x;
    noseY=poses[0].pose.nose.y;
 }   
}
