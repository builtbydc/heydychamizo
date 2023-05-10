let letterH;
let letterE;
let letterY1;
let letterD;
let letterY2;

function setup() {
    createCanvas(windowWidth, windowHeight);
    letterH = new Letter("H", 50, windowWidth*Math.random(), 100*Math.random()-200, windowWidth/2 - 77.5, windowHeight/2 + 25);
    letterE = new Letter("e", 50, windowWidth*Math.random(), 100*Math.random()-200, windowWidth/2 - 77.5 + 40, windowHeight/2 + 25);
    letterY1 = new Letter("y", 50, windowWidth*Math.random(), 100*Math.random()-200, windowWidth/2 - 77.5 + 70, windowHeight/2 + 25);
    letterD = new Letter("d", 50, windowWidth*Math.random(), 100*Math.random()-200, windowWidth/2 - 77.5 + 95, windowHeight/2 + 25);
    letterY2 = new Letter("y", 50, windowWidth*Math.random(), 100*Math.random()-200, windowWidth/2 - 77.5 + 125, windowHeight/2 + 25);
}

function draw() {
    background(0);
    letterH.display();
    letterE.display();
    letterY1.display();
    letterD.display();
    letterY2.display();
}

class Letter {
    constructor(letter, size, initX, initY, goalX, goalY) {
        this.letter = letter;
        this.size = size;
        this.initX = initX;
        this.initY = initY;
        this.goalX = goalX;
        this.goalY = goalY;

        this.x = initX;
        this.y = initY;
        this.dx = 10*Math.random()-5;
        this.dy = 0;
        this.ddx = 0;
        this.ddy = 0.1;
        this.dd = 0.15;

        this.dir = 0;
    }

    update() {

        if(Math.abs(this.x - this.goalX) < 1 && Math.abs(this.y - this.goalY) < 1 && Math.sqrt(this.dx*this.dx + this.dy*this.dy) < 1){}
        else {    
            this.dir = Math.atan2(this.goalY - this.y, this.goalX - this.x);
            this.ddx = this.dd*Math.cos(this.dir);
            this.ddy = this.dd*Math.sin(this.dir);
            this.dx += this.ddx;
            this.dy += this.ddy;

            this.dx*=0.99;
            this.dy*=0.99;

            this.x += this.dx;
            this.y += this.dy;
        }

    }

    display() {
        fill(255);
        textSize(this.size);
        text(this.letter, this.x, this.y);
        this.update();
    }
}