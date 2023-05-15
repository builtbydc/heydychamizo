let colors = [];
let t = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);

    strokeWeight(3);
    noFill();

    colors.push(color(255, 173, 173));
    colors.push(color(255, 214, 165));
    colors.push(color(253, 255, 182));
    colors.push(color(202, 255, 191));
    colors.push(color(155, 246, 255));
    colors.push(color(160, 196, 255));
    colors.push(color(189, 178, 255));
    colors.push(color(255, 198, 255));
    colors.push(color(255, 255, 252));

    background(0);
}

function draw() {

    if(t == 1) {
        let ellipseSize = 100*Math.random();
        stroke(colors[~~(9*Math.random())]);
        ellipse((windowWidth - ellipseSize)*Math.random() + 0.5*ellipseSize, (windowHeight - ellipseSize)*Math.random() + 0.5*ellipseSize, ellipseSize, ellipseSize);
        t = 0;
    }
    t++;

}
