var GRID_SIZE = 10;
var BALL = new Ball(1);
var GRID = new Grid(1);



function setup(){
    createCanvas(600, 600);
    
}

function draw(){ 
    background(100);
    GRID.display();
    BALL.display();
    BALL.move();
    
}

function keyPressed(){
    if(keyCode == LEFT_ARROW){
        console.log("AYY:");
        BALL.moveLeft();
        console.log(BALL.xspeed);
    }
    else if(keyCode == RIGHT_ARROW){
        BALL.moveRight();
        BALL.display();
    }
    else if(keyCode == UP_ARROW){
        BALL.moveUp();
        BALL.display();
    }
    else if(keyCode == DOWN_ARROW){
        BALL.moveDown();
        BALL.display();
    }
    else if(keyCode == ENTER){
        BALL.hitWall(); 
    }
}



function Ball(level){
    this.level = level;
    this.xspeed;
    this.yspeed;
    this.x;
    this.y;
    
    if(this.level == 1){
        this.x = 9 * 60 + 30;
        this.y = 0 * 60 + 30;
        this.xspeed = 0;
        this.yspeed = 0;
    }
    this.move = function(){
        this.x += this.xspeed;
        this.y += this.yspeed;
    };

    this.hitWall = function(){
        this.xspeed = 0;
        this.yspeed = 0;
    };

    this.moveUp = function(){
        this.xspeed = 0;
        this.yspeed = -10;        
    };

    this.moveDown = function(){
        this.xspeed = 0;
        this.yspeed = 10;
    };

    this.moveRight = function(){
        this.yspeed = 0;
        this.xspeed = 10;
    };

    this.moveLeft = function(){
        this.yspeed = 0;
        this.xspeed = -10;
    };

    this.display = function(){
        fill(100, 300, 200, 100);
        ellipse(this.x, this.y, 30, 30);
    }

    
}