/**
 * Created by Aitya Pokharel on DD/MM/YY.
 */

var maze;
var stack = [];
var rows, columns;

function setup(){
    createCanvas(200, 200);
    maze = new Grid(20);
    background(220);
}

function draw(){
    // console.log(stack.length);

    maze.display();

    if(stack[stack.length -1] !== maze.getXY()) {
        stack.push(maze.getXY()); // Push the current position to the stack.
    }
    num = Math.floor(Math.random() * 4);

    // Just a bit of housekeeping --
    var upNotVisited = maze.upNotVisited();
    var downNotvisited = maze.downNotVisited();
    var leftNotVisited = maze.leftNotVisited();
    var rightNotVisited = maze.rightNotVisited();
    // -----------------------------

    // If none of the neighbors are visited, move to any of the unvisited neighbors randomly.
    if(upNotVisited || downNotvisited || leftNotVisited || rightNotVisited) {
        if (num === 0) {
            if (upNotVisited) {
                maze.goUp();
            }
        }
        if (num === 1) {
            if (downNotvisited) {
                maze.goDown();
            }
        }
        if (num === 2) {
            if (leftNotVisited) {
                maze.goLeft();
            }
        }
        if (num === 3) {
            if (rightNotVisited) {
                maze.goRight();
            }
        }
    }

    // If all the neighbors are visited, then pop the stack and move to the previous position.
    else {
        stack.pop();
        var temp = stack.pop();
        maze.setXY(temp);
    }

    // End case -- terminate if stack is empty.
    if(stack.length < 1){
        maze.display();
        noLoop();
        console.log("END");
    }



}

// Triggered when any keys are pressed.
function keyPressed(){
    if(keyCode === UP_ARROW){
        maze.goUp();
    }
    else if(keyCode === DOWN_ARROW) {
        maze.goDown();
    }
    else if(keyCode === LEFT_ARROW){
        maze.goLeft();
    }
    else if(keyCode === RIGHT_ARROW){
        maze.goRight();
    }

}
