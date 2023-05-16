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

    background(0);
}

function draw() {
    
    //background(0);

    // push();
    // strokeWeight(5);
    // for(let i = 0; i < 100; i += 5) {
    //     stroke(255 - 2.55*i, 100 - i, 200 - 2*i);
    //     if(mouseIsPressed) {
    //         ellipse(mouseX, mouseY, i, i);
    //     }else {
    //         ellipse(windowWidth / 2, windowHeight / 2, i, i);
    //     }
    // }
    // pop();
    if(bubbles.length < 20) {
        let bubble = new Bubble();
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
        this.extraX = Math.max((windowWidth - windowHeight) / 2, 0);
        this.extraY = Math.max((windowHeight - windowWidth) / 2, 0);
        this.minSide = Math.min(windowWidth, windowHeight);
        this.maxSize = 50;
        this.x = this.extraX + (this.minSide - this.maxSize)*Math.random() + this.maxSize/2;
        this.y = this.extraY + (this.minSide - this.maxSize)*Math.random() + this.maxSize/2;;
        this.color = colors[~~(9*Math.random())];

        if(mouseIsPressed) {
            this.xDistance = mouseX - this.x;
            this.yDistance = mouseY - this.y;
        } else {
            this.xDistance = windowWidth / 2 - this.x;
            this.yDistance = windowHeight / 2 - this.y;
        }

        this.distance = Math.sqrt(Math.pow(this.xDistance, 2) + Math.pow(this.yDistance, 2));
        this.sizeGoal = 25*Math.random() + 25;
        this.theta = Math.atan2(this.yDistance, this.xDistance);
        this.ddk = 10000;
        this.dk = Math.sqrt(this.ddk);
        this.d = this.dk*Math.sqrt(1/this.distance);
        this.dSign = 1;
        if(Math.random() > 0.5) this.dSign *= -1;
        this.dx = this.d*Math.cos(this.theta + this.dSign * 0.5*Math.PI);
        this.dy = this.d*Math.sin(this.theta + this.dSign *  0.5*Math.PI);
        
        this.dd = this.ddk/Math.pow(this.distance, 2);
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

        if(mouseIsPressed) {
            this.xDistance = mouseX - this.x;
            this.yDistance = mouseY - this.y;
        } else {
            this.xDistance = windowWidth / 2 - this.x;
            this.yDistance = windowHeight / 2 - this.y;
        }
        this.distance = Math.sqrt(Math.pow(this.xDistance, 2) + Math.pow(this.yDistance, 2));
        this.theta = Math.atan2(this.yDistance, this.xDistance);
        this.dd = this.ddk/Math.pow(this.distance, 2);
        this.ddx = this.dd*Math.cos(this.theta);
        this.ddy = this.dd*Math.sin(this.theta);
        this.dx+=this.ddx;
        this.dy+= this.ddy;

        if(this.distance < this.size / 2) this.createRandom();
        if(this.leftTheScreen()) {
            this.createRandom();
        }

        if(this.size < this.sizeGoal) {
            this.size += 1;
        }
    }

    display() {
        push();
        stroke(this.color);
        ellipse(this.x, this.y, this.size, this.size);
        pop();

        this.update();
    }
}
