song = "";
leftWristX = 0;
leftWristy = 0;

function setup() {
    canvas = createCapture(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose',gotPoses);
}

function modelloaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristy = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX +"leftWristy = "+ leftWristy);
    
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rigtWristX = " + rightWristX +"rightWristY = "+ rightWristY);
        
    }
}

function draw() {
    image(video, 0, 0, 600, 500);

    fill('#FF0000');
    stroke('#FF0000');

    circle(leftWristX, leftWristY, 20);
    InNumberleftWristY = Number9(leftWristY);
    remove_decimals = floor(InNumberleftWristY);
    volume = remeove_decimals/500;
    document.getElementById("volume"). innerHTML = " Volume = " + volume;
    song.setVolume(volume);
}

function preload()
{
    song = loadSound("music.mp3")
}

function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}