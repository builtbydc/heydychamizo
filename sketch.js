let colors = [];

let bubbles = [];

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
}

function draw() {
    background(0);
    if(bubbles.length < 100) {
        let size = 100*Math.random() + 25;
        let x = (windowWidth - size)*Math.random() + 0.5*size;
        let y = (windowHeight - size)*Math.random() + 0.5*size;
        let color = colors[~~(9*Math.random())];

        let bubble = new Bubble(x, y, size, color);
        bubbles.push(bubble);
    }


    for(let b of bubbles) {
        b.display();
    }
}

class Bubble {
    constructor() {
        this.createRandom();
    }

    createRandom() {
        this.size = 0;
        this.sizeGoal = 100*Math.random() + 25;
        this.x = (windowWidth - this.size)*Math.random() + 0.5*this.size;
        this.y = (windowHeight - this.size)*Math.random() + 0.5*this.size;
        this.color = colors[~~(9*Math.random())];
        this.dx = 6*Math.random() + 4;
        this.dy = 6*Math.random() + 4;
        if(Math.random() > 0.5) this.dx *= -1;
        if(Math.random() > 0.5) this.dy *= -1;

        this.lifetime = 0;
        this.sizeVariation = 10*Math.random() + 10;

        this.theta = Math.atan2(-this.y + windowHeight / 2, -this.x + windowWidth / 2);
        this.dd = 0.1;
        this.ddx = this.dd*Math.cos(this.theta);
        this.ddy = this.dd*Math.sin(this.theta);
    }

    leftTheScreen() {
        if( this.x > windowWidth + 0.5*this.size  ||
            this.x < 0 - 0.5*this.size            ||
            this.y > windowHeight + 0.5*this.size ||
            this.y < 0 - 0.5*this.size) 
        {
            return true;
        } else return false;
    }

    update() {
        this.x += this.dx;
        this.y += this.dy;

        this.theta = Math.atan2(-this.y + windowHeight / 2, -this.x + windowWidth / 2);
        this.ddx = this.dd*Math.cos(this.theta);
        this.ddy = this.dd*Math.sin(this.theta);
        this.dx+=this.ddx;
        this.dy+= this.ddy;

        if(this.leftTheScreen()) {
            this.createRandom();
        }
        this.lifetime++;

        if(this.size < this.sizeGoal) {
            this.size += 1;
            this.lifetime = 0;
        }
    }

    display() {
        push();
        stroke(this.color);
        let sizeCalculation = this.size;
        if(this.size >= this.sizeGoal) sizeCalculation += this.sizeVariation*Math.sin(this.lifetime / 10);
        ellipse(this.x, this.y, sizeCalculation, sizeCalculation);
        pop();

        this.update();
    }
}
