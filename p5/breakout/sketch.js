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

//gets called on a loop.
function draw() {
    background(100);


    reflector.display();


    for(var i = 0; i < 24; i++){
        blocks[i].display();

		//if the ball hits any of the blocks.
        if((ball.x > blocks[i].x && ball.x < (blocks[i].x + block_width)) && (ball.y > blocks[i].y && ball.y < (blocks[i].y + block_height))){
            ball.hit_block();
            blocks[i].dead = true;
            blocks[i].x = 500;
            blocks[i].y = 500;
            score++;
        }
    }

	//if all the blocks are hit.
    if(score == 24){
        alert("Game Over, You Win!");
		location.reload();
        //remove();
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
		location.reload();
        //remove();
    }

    if(ball.y < 0){
        ball.hit_ceiling();
    }



}

//"reflector" object that can be moved by the left and right arrow keys.
// bounces the ball back.
function Reflector(){
    this.x = 0;
    this.y = 388;
    this.width = 80;
    this.height = 10;

	//sets the X position of the reflector
    this.set_x = function(x){
        this.x = x;
    };

	//displays the reflector
    this.display = function(){
        rect(this.x, this.y, this.width, this.height);
    };

}

//detects the key pressed
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

// "block" object. Array of these exist at the top of the canvas.
function Block(x, y){
    this.dead = false;
    this.x = x;
    this.y = y;
    this.left = x;
    this.right = x + 50;

	//displays the individual block.
    this.display = function(){
        if(!this.dead){
            rect(x, y, block_width, block_height);
        }
    }

}

//"Ball" object. Bounces off if it comes in contact
//with any surface (except the bottom of the screen)
function Ball(){
    this.diameter = 20;
    this.x = (reflector.width /2);
    this.y = (reflector.y) - (this.diameter/2);

    this.xspeed = 1;
    this.yspeed = -1;

	//displays the ball.
    this.display = function(){
        ellipse(this.x, this.y, this.diameter, this.diameter);
    };

	//moves the ball.
    this.move = function () {
        this.x += this.xspeed * 3;
        this.y += this.yspeed * 3;
    };

	//Random change to xspeed and yspeed if the ball hits
	// the reflector.
    this.hit_reflector = function() {
        this.xspeed = random(-1, 1);
        this.yspeed = this.yspeed * -1;
    };

	//predictive, symmetrical reflection on the x axis.
    this.hit_block = function(){
        this.yspeed = this.yspeed * -1;
    };

	//predictive symmetrical reflection on the Y axis
    this.hit_wall = function(){
        this.xspeed = this.xspeed * -1;
    };

	//predictive symmetrical reflection on the x axis.
    this.hit_ceiling = function(){
        this.yspeed = this.yspeed * -1;
    };



}
