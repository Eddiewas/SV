function preload() {

}
function setup() {
    canvas = createCanvas(640,480);
    canvas.position(100,300);
    video = createCapture(VIDEO);
    video.hide();
    
}
function draw() {
    image(video, 60,60,550,360)
    fill(44,69,99);
    stroke(99,69,44);
    circle(50,50,80);
    circle(50,430,80);
    circle(590,50,80);
    circle(590,430,80);
    rect(90,40,460,20);
    rect(90,420,460,20);
    rect(40,90,20,300);
    rect(585,90,20,300);
}
function takeSnapshot() {
    save('e.png');
}