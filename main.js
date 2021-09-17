function preload()
{

}

function setup()
{
    canvas=createCanvas(640,480);
    canvas.position(350,350);
    video=createCapture(VIDEO);
    video.hide();
    tint_colour="";
}

function draw()
{
    image(video,0,0,640,480);
    tint(tint_colour);
}
function take_snapshot()
{
    img_nme=document.getElementById("name_of_img").value;
    save(img_nme+".png");
}
function filter_tint()
{
    tint_colour=document.getElementById("colour_nme").value;
}