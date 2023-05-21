let colors = [];

let pastMouseX;
let pastMouseY;

function setup() {
    createCanvas(windowWidth, windowHeight);

    strokeWeight(3);

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

    pastMouseX = mouseX;
    pastMouseY = mouseY;

    stroke(colors[~~(9*Math.random())]);
}


function draw() {
    
    if(mouseIsPressed)
        line(pastMouseX, pastMouseY, mouseX, mouseY);
    else
        stroke(colors[~~(9*Math.random())]);

    pastMouseX = mouseX;
    pastMouseY = mouseY;
}

