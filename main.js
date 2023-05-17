nosex = 0
nosey = 0

function preload()
{
  clown = loadImage("https://i.postimg.cc/4d3n9Ds0/m.png");
}

function draw()
{
   image(video,0,0,350,350);
   image(clown, nosex, nosey, 130, 30);
}

function setup()
{
    Canvas = createCanvas(350, 350)   
    Canvas.center();
    video = createCapture(VIDEO);
    video.size(350,350);
    video.hide();

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function modelLoaded()
{
   console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results)
        console.log("nose x = " + results[0].pose.nose.x);
        nosex = results[0].pose.nose.x-60;
        console.log("nose y = " + results[0].pose.nose.y);
        nosey = results[0].pose.nose.y +9;
    }
}

function take_snapshot()
{
     save("Jay.png");
}
