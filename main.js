function preload() {
     
}

function setup() {
     canvas = createCanvas(300, 300);
     canvas.center();
     video = createCapture(VIDEO);
     video.size(300, 300);
     video.hide();

     poseNet = ml5.poseNet(video, modelLoaded);
     poseNet.on('pose', gotPoses);
}

function modelLoaded() {
     console.log('PoseNet loaded !');
}

function gotPoses(results) {
     if (results.length > 0) {
          console.log(results);
          console.log('eye1 x = ' + results[0].pose.leftEye.x);
          console.log('eye1 y = ' + results[0].pose.leftEye.y);
          console.log('eye2 x = ' + results[0].pose.rightEye.x);
          console.log('eye2 y = ' + results[0].pose.rightEye.y);
     }
}

function draw() {
     image(video, 0, 0, 300, 300);
}

function take_snapshot() {
     save('myFunnyImage.png');
}