function preload(){
}

function setup()
{
    canvas = createCanvas(640,480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
}

function draw()
{
    image(video, 0, 0, 640, 480);
    circle(30, 30, 20);
    eclipse(56, 46, 55, 55);
    rect(30, 20, 55, 55);
}

function take_snapshot()
{
    save('student_name.png');
}