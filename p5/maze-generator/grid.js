/**
 * Created by adityapokharel on 27/02/17.
 */

function Grid(size){
    this.SIZE = size;
    var i, j;
    this.cell = new Array(size);
    var current;



    for(i = 0; i < this.SIZE; i++){
        this.cell[i] = new Array(this.SIZE);
        for(j = 0; j < this.SIZE; j++){
            this.cell[i][j] = new Cell(i, j, false);
        }
    }

    current = this.cell[0][0];
    current.visit();

    this.goDown = function() {
        if((current.getY()+1 < this.SIZE) && !(this.cell[current.getX()][current.getY()+1].isVisited())){
            //this.cell[current.getX()][current.getY()].sides = [true, false, true, true];
            current = this.cell[current.getX()][current.getY()+1];
            current.visit();
            this.cell[current.getX()][current.getY()].sides[2] = false;
            //this.cell[current.getX()][current.getY()].cameFrom = "up";
        }
        else{
            return -1;
        }
    };

    this.goUp = function() {
        if((current.getY()-1 >= 0) && !(this.cell[current.getX()][current.getY()-1].isVisited())){
            this.cell[current.getX()][current.getY()].sides[2] = false;

            current = this.cell[current.getX()][current.getY()-1];
            current.visit();
            this.cell[current.getX()][current.getY()].sides[3] = false;
            //this.cell[current.getX()][current.getY()].cameFrom = "down";
        }
        else{
            return -1;
        }
    };

    this.goLeft = function() {
        if((current.getX() - 1 >= 0)  && !(this.cell[current.getX()-1][current.getY()].isVisited())){
            this.cell[current.getX()][current.getY()].sides[0] = false;

            current = this.cell[current.getX() -1][current.getY()];
            current.visit();
            this.cell[current.getX()][current.getY()].sides[1] = false;
            //this.cell[current.getX()][current.getY()].cameFrom = "right";
        }
        else{
            return -1;
        }
    };

    this.goRight = function(){
        if((current.getX() + 1 < this.SIZE) && !(this.cell[current.getX()+1][current.getY()].isVisited())){
            current = this.cell[current.getX() +1 ][current.getY()];
            current.visit();
            //this.cell[current.getX()][current.getY()].setCameFrom("left");
            this.cell[current.getX()][current.getY()].sides[0] = false;
            //this.cell[current.getX()][current.getY()].cameFrom = "left";

        }
        else{
            return -1;
        }
    };

    this.display = function(){
        for(i = 0; i < this.SIZE; i++){
            for(j = 0; j < this.SIZE; j++){


                if(this.cell[i][j].isVisited()){
                    noStroke();
                    fill(100);
                    rect(i*10, j*10, 10, 10);
                }
                if(i == current.x && j == current.y){
                    fill(129, 206, 15);
                    rect(i*10, j*10, 10, 10);
                }

                stroke(255);
                if(this.cell[i][j].sides[0]){
                    line((i*10), (j*10), i*10, (j*10)+10); //left
                }
                if(this.cell[i][j].sides[1]){
                    line((i*10)+10, (j*10), (i*10)+10, (j*10)+10); //right
                }
                if(this.cell[i][j].sides[2]){
                    line(i*10, j*10, (i*10)+10, j*10); //top
                }
                if(this.cell[i][j].sides[3]){
                    line((i*10), (j*10)+10, (i*10)+10, (j*10)+10); //bottom
                }

            }
        }
    };

    this.getXY = function(){
        return [current.x, current.y];
    };

    this.setXY = function(input_xy_coordinates){
        if((input_xy_coordinates[0] > 0) && (input_xy_coordinates[1] > 0) ){
            current = this.cell[input_xy_coordinates[0]][input_xy_coordinates[1]];
        }
    };

    //checks if the neighboring cells are visited
    //return: true = one of the neighbors isn't visited.
    this.checkNeighbors = function(){
        var neighbors = []; //top right bottom left

        if((current.getY() > 0) && (this.cell[current.getX()][current.getY() - 1].isVisited() === false)){ //top
            return true;
        }
        else if((current.getX() + 1 < this.SIZE) && (this.cell[current.getX() + 1][current.getY()].isVisited() === false)){ //right
            return true;
        }
        else if((current.getY() + 1 < this.SIZE) && (this.cell[current.getX()][current.getY() + 1].isVisited() === false)){ //bottom
            return true;
        }
        else if((current.getX() > 0) && (this.cell[current.getX() - 1][current.getY()].isVisited() === false)){ //left
            return true;
        }
        else{
            return false;
        }

    };

    this.topVisited = function(){
        return (this.cell[current.getX()][current.getY()-1].isVisited());
    };
    this.bottomVisited = function(){
        return this.cell[current.getX()][current.getY()+1].isVisited();
    };
    this.leftVisited = function(){
        return this.cell[current.getX()-1][current.getY()].isVisited();
    };
    this.rightVisited = function(){
        return this.cell[current.getX()+1][current.getY()].isVisited();
    };

}
