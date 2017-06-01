/**
 * Created by adityapokharel on 27/02/17.
 */
var columns, rows;
var grid;
var stack = [];

function setup(){
    createCanvas(200, 200);
    grid = new Grid(20);
    background(220);
    grid.display();
}

function draw(){
    grid.display();
    stack.push(grid.getXY());

    //console.log(stack.length);

    num = Math.floor(Math.random() * 4);

    if(grid.checkNeighbors()){
        if(num === 0){
            //console.log(grid.getXY());
            grid.goUp();
        }
        else if(num === 1){
            //console.log(grid.getXY());
            grid.goLeft();
        }
        else if(num === 2){
            //console.log(grid.getXY());
            grid.goRight();
        }
        else if(num === 3){
            //console.log(grid.getXY());
            grid.goDown();
        }
    }
    else{
        stack.pop();
        var temp = stack.pop();
        grid.setXY(temp);
    }

    //When stack is empty
    if(stack.length  < 1){
        //console.log(stack.length);
        grid.display();
        noLoop();
        console.log("END");
    }




}

function keyPressed(){
    if(keyCode === UP_ARROW){
        grid.goUp();
    }
    else if(keyCode === LEFT_ARROW){
        grid.goLeft();
    }
    else if(keyCode === RIGHT_ARROW){
        grid.goRight();
    }
    else if(keyCode === DOWN_ARROW){
        grid.goDown();
    }
    grid.display();
}
