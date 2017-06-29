var CANVAS_SIZE = 700;
var snake;
var food;


function setup(){
    createCanvas(CANVAS_SIZE, CANVAS_SIZE);
    background("#212121");
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
    background("#212121");
    snake.display();
    food.display();

    if(eaten()){
        food.change_location();
        snake.length++;
        snake.body_length++;
        snake.body[snake.body_length - 1] = new TailSquare();
        if(snake.length > 2){
            snake.body[snake.body_length - 1].set_xy(snake.body[snake.body_length - 2].x, snake.body[snake.body_length - 2].y);
        }
        else{
            snake.body[snake.length-2].set_xy(snake.x, snake.y);
        }
        console.log(snake.length);
    }

    if(snake.touched_screen_edge(CANVAS_SIZE)){
        snake.die();
        snake.x_speed = 0;
        snake.y_speed = 0;
    }

    if(snake.touched_body()){
        snake.die();
    }

    //TODO: Die when snake touches body.
}

function mousePressed(){
    alert("PAUSE");
}


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
