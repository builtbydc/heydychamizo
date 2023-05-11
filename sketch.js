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

    background(255, 200, 200);
}

function draw() {
    fill(255, 150, 170, 25);
    rect(0, 0, windowWidth, windowHeight);
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
        this.dx = 100*Math.random()-50;
        this.dy = 0;
        this.ddx = 0;
        this.ddy = 0.1;
        this.dd = 0.2;

        this.dir = 0;

        this.angle = 0;
        this.angleSign = Math.sign(Math.random() - 0.5);
        this.angleD = 20*Math.random()+20;

        this.colorFlag = false;
    }

    update() {

        if(Math.abs(this.x - this.goalX) < 1 && Math.abs(this.y - this.goalY) < 1 && Math.sqrt(this.dx*this.dx + this.dy*this.dy) < 1){
            if(this.angle <= Math.PI / this.angleD) {
                this.angle = 0;
                this.colorFlag = true;
            } else {
                this.angle += Math.PI / this.angleD;
                if(this.angle >= 2*Math.PI) this.angle -= 2*Math.PI;
            }
        } else {    
            this.dir = Math.atan2(this.goalY - this.y, this.goalX - this.x);
            this.ddx = this.dd*Math.cos(this.dir);
            this.ddy = this.dd*Math.sin(this.dir);
            this.dx += this.ddx;
            this.dy += this.ddy;

            this.dx*=0.985;
            this.dy*=0.985;

            this.x += this.dx;
            this.y += this.dy;
            this.angle += Math.PI / this.angleD;
            if(this.angle >= 2*Math.PI) this.angle -= 2*Math.PI;
        }

    }

    display() {
        fill(0);
        textSize(this.size);

        push();
        translate(this.x, this.y);
        rotate(this.angleSign*this.angle);
        text(this.letter, 0, 0);
        pop();

        this.update();
    }
}