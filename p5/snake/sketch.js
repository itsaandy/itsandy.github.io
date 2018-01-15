var CANVAS_SIZE = 700;
var snake;
var food;


function setup(){
    createCanvas(CANVAS_SIZE, CANVAS_SIZE);
    background("#264454");

    snake = new Snake();
    food = new Food(CANVAS_SIZE);

    frameRate(10);
}

//checks whether the food has been eaten by the snake
function eaten(){
    var x_bound = (snake.x < (food.x + 20) && snake.x >= food.x); //true if snake is in the x boundary of the food.
    var y_bound = (snake.y < (food.y + 20) && snake.y >= food.y); //true if snake is in teh y boundary of the food.

    //True if snake is touching the food. False otherwise.
    var is_within_bounds = (x_bound && y_bound);

    return is_within_bounds;
}


function draw(){
    background("#264454");
    snake.display();
    food.display();

    //increments length if the snake eats food. 
    if(eaten()){
        food.change_location();
        snake.length++; //increments total length
        snake.body_length++; //increments the body length --- total length - 1 (1 being the head)
        snake.body[snake.body_length - 1] = new TailSquare(); //create a new square to add on to the snake.
        
        //sets new square at the end of the trail.
        if(snake.body_length > 1){ //Since (i - 2)th element of the body array needs to be accessed.
            snake.body[snake.body_length - 1].set_xy(snake.body[snake.body_length - 2].x, snake.body[snake.body_length - 2].y);
        }
        else{ // this means there is only one body element (the one that was created before the if statement)
            snake.body[snake.body_length-1].set_xy(snake.x, snake.y);
        }
        console.log(snake.length);
    }

    //if the snake crosses the screen's edge, KILL THE SNAKE 😡
    if(snake.touched_screen_edge(CANVAS_SIZE)){
        snake.die();
        snake.x_speed = 0;
        snake.y_speed = 0;
    }

    //if the snake touches its own body.
    if(snake.touched_body()){
        snake.die();
    }

}

//for debugging purposes (also for some sly gameplay hacking 😈)
function mousePressed(){
    snake.length++;
    snake.body_length++;
    snake.body[snake.body_length - 1] = new TailSquare();
    if(snake.length > 2){
        snake.body[snake.body_length - 1].set_xy(snake.body[snake.body_length - 2].x, snake.body[snake.body_length - 2].y);
    }
    else{
        snake.body[snake.length-2].set_xy(snake.x, snake.y);
    }
}


//arrow keys input handler. 👈🏽👉🏽👆🏽👇🏽
function keyPressed(){
    if(keyCode === UP_ARROW)
        snake.move_up();
    else if(keyCode === DOWN_ARROW)
        snake.move_down();
    else if(keyCode === LEFT_ARROW)
        snake.move_left();
    else if(keyCode === RIGHT_ARROW)
        snake.move_right();

}
