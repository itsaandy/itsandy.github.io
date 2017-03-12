/**
 * Created by adityapokharel on 27/02/17.
 */

function Cell(x, y, visited){
    this.x = x;
    this.y = y;
    this.visited = false;
    this.sides = [true, true, true, true]; //[left, right, top, bottom]
    



    this.getCameFrom = function() { return cameFrom; };

    this.getX = function() { return x; };

    this.getY = function() { return y; };

    this.isVisited = function() { return this.visited; };

    this.visit = function() { this.visited = true;}

}