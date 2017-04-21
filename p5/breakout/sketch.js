/**
 * Author: Aditya Pokharel
 * Email: adityapokharel97@gmail.com
 * github.com/adityapokharel
 * adityapokharel.github.io
 * Date: 21/04/2017
 */

var CANVAS_WIDTH = 400;
var CANVAS_HEIGHT = 400;
var score = 0;

//OBJECTS
var blocks = [];
var reflector = new Reflector();
var ball = new Ball();

var block_width = 50;
var block_height = 20;

function setup() {
	createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);

    for(var i = 0; i < 3; i++){
        for(var j = 0; j < 8; j++){
            blocks.push(new Block(j*block_width, i*block_height));
        }
    }
}


function draw() {
    background(100);


    reflector.display();


    for(var i = 0; i < 24; i++){
        blocks[i].display();
        if((ball.x > blocks[i].x && ball.x < (blocks[i].x + block_width)) && (ball.y > blocks[i].y && ball.y < (blocks[i].y + block_height))){
            ball.hit_block();
            blocks[i].dead = true;
            blocks[i].x = 500;
            blocks[i].y = 500;
            score++;
        }
    }

    if(score == 24){
        alert("Game Over, You Win!");
        remove();
    }

    if(ball.x <= 0 || ball.x >= CANVAS_WIDTH){
        ball.hit_wall();
    }

    ball.display();

    ball.move();

    if(ball.x > reflector.x && ball.x < (reflector.x + reflector.width) && ball.y > reflector.y && ball.y < (reflector.y + reflector.height)){
        ball.hit_reflector();
    }

    if(ball.y > CANVAS_HEIGHT){
        alert("Game Over! You Lose!");
        remove();
    }

    if(ball.y < 0){
        ball.hit_ceiling();
    }

	
	
}


function Reflector(){
    this.x = 0;
    this.y = 388;
    this.width = 80;
    this.height = 10;

    this.set_x = function(x){
        this.x = x;
    };

    this.display = function(){
        rect(this.x, this.y, this.width, this.height);
    };
	
}

function keyPressed(){
	if(keyCode == LEFT_ARROW){
		if(reflector.x > 0){
            reflector.set_x(reflector.x - 20);
        }
	}
	else if(keyCode == RIGHT_ARROW){
        if(reflector.x < CANVAS_WIDTH - (reflector.width)){
            reflector.set_x(reflector.x + 20);
        }
	}
}

function Block(x, y){
    this.dead = false;
    this.x = x;
    this.y = y;
    this.left = x;
    this.right = x + 50;

    this.display = function(){
        if(!this.dead){
            rect(x, y, block_width, block_height);
        }
    }

}

function Ball(){
    this.diameter = 20;
    this.x = (reflector.width /2);
    this.y = (reflector.y) - (this.diameter/2);

    this.xspeed = 1;
    this.yspeed = -1;

    this.display = function(){
        ellipse(this.x, this.y, this.diameter, this.diameter);
    };

    this.move = function () {
        this.x += this.xspeed * 3;
        this.y += this.yspeed * 3;
    };

    this.hit_reflector = function() {
        this.xspeed = random(-1, 1);
        this.yspeed = this.yspeed * -1;
    };

    this.hit_block = function(){
        this.yspeed = this.yspeed * -1;
    };

    this.hit_wall = function(){
        this.xspeed = this.xspeed * -1;
    };

    this.hit_ceiling = function(){
        this.yspeed = this.yspeed * -1;
    };



}