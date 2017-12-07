function Grid(size){
    this.size = size;
    var x, y;
    this.grid = new Array(size); // the final grid.
    var current;

    // Initialision --------------------------
    for(y = 0;y < this.size; y++){
        this.grid[y] = new Array(size);
        for(x = 0; x < this.size; x++){
            this.grid[y][x] = new Cell(x, y, false);
        }
    }
    current = this.grid[0][0];
    current.visit();
    // End init ------------------------------

    /**
     * Makes the "current" position move down one unit in the grid.
     * @returns: None
     */
    this.goDown = function(){
        if (current.getY() < this.size-1){
            current.sides[3] = false;
            current = this.grid[current.getY() + 1][current.getX()];
            current.sides[2] = false;
            current.visit();
        }
    };

    /**
     * Makes the "current" position move up one unit in the grid.
     * @returns: None
     */
    this.goUp = function(){
        if (current.getY() > 0){
            current.sides[2] = false;
            current = this.grid[current.getY() - 1][current.getX()];
            current.sides[3] = false;
            current.visit();
        }
    };

    /**
     *  Makes the "current" position move right one unit in the grid.
     *  @returns: None
     */
    this.goRight = function(){
        if (current.getX() < this.size-1){
            current.sides[1] = false;
            current = this.grid[current.getY()][current.getX() + 1];
            current.sides[0] = false;
            current.visit();
        }
    };

    /**
     * Makes the "current" position move left one unit in the grid.
     * @returns: None
     */
    this.goLeft = function(){
        if (current.getX() > 0){
            current.sides[0] = false;
            current = this.grid[current.getY()][current.getX() - 1];
            current.sides[1] = false;
            current.visit();
        }
    };

    /**
     * Displays the grid with visited cells marked dark grey, current cell marked green and unvisited cells marked white.
     * @returns: None
     */
    this.display = function(){
        for(y = 0; y < this.size; y++){
            for(x = 0; x < this.size; x++){

                // Colour the visited cell dark grey
                if(this.grid[y][x].isVisited()){
                    noStroke();
                    fill(100);
                    rect(x*10, y*10, 10, 10);
                    // continue;
                }

                // Colour the current cell green
                if(x === current.getX() && y === current.getY()){
                    fill(129, 206, 15);
                    rect(x*10, y*10, 10, 10);
                    continue;
                }

                stroke(255);
                sides = this.grid[y][x].getSides(); // [left, right, top, bottom]

                //Left stroke
                if(sides[0]){
                    line(x*10, y*10, x*10, y*10 + 10);
                }

                //right stroke
                if(sides[1]){
                    line(x*10 + 10, y*10, x*10 + 10, y*10 + 10);
                }

                //top stroke
                if(sides[2]){
                    line(x*10, y*10, x*10 + 10, y*10);
                }

                //bottom stroke
                if(sides[3]){
                    line(x*10, y*10 + 10, x*10 + 10,  y*10 + 10);
                }
            }
        }
    };

    /**
     * returns the current position in the grid as a list of two elements i.e.: [xValue, yValue]
     * @returns : {array} Current position in the format: [xValue, yValue]
     */
    this.getXY = function(){
        return [current.getX(), current.getY()];
    };

    /**
     * Set the current position to the passed paramater.
     * @param {array} xyCoordinates in the format: [xValue, yValue]
     * @returns None
     */
    this.setXY = function(xyCoordinates){
        var xIsWithinBounds = xyCoordinates[0] >= 0 && xyCoordinates[0] < this.size;
        var yIsWithinBounds = xyCoordinates[1] >= 0 && xyCoordinates[1] < this.size;
        if(xIsWithinBounds && yIsWithinBounds){
            var xValue = xyCoordinates[0];
            var yValue = xyCoordinates[1];
            current = this.grid[yValue][xValue];
        }
    };

    /**
     * Checks whether the upper neighbor to the current cell is visited.
     * @returns {boolean} true if it is visited, false if not.
     */
    this.upNotVisited = function(){
        if(current.getY() > 0) {
            return !this.grid[current.getY() - 1][current.getX()].isVisited();
        }
    };

    /**
     *  Checks whether the lower neighbor to the current cell is visited.
     * @returns {boolean} true if it is visited, false if not.
     */
    this.downNotVisited = function(){
        if(current.getY() < this.size - 1){
            return !this.grid[current.getY() + 1][current.getX()].isVisited();
        }
    };

    /**
     * Checks whether the left neighbor to the current cell is visited.
     * @returns {boolean} true if it is visited, false if not.
     */
    this.leftNotVisited = function(){
        if(current.getX() > 0){
            return !this.grid[current.getY()][current.getX() - 1].isVisited();
        }
    };

    /**
     * Checks whether the right neighbor to the current cell is visited.
     * @returns {boolean} true if it is visited, false if not.
     */
    this.rightNotVisited = function(){
        if(current.getX() < this.size - 1){
            return !this.grid[current.getY()][current.getX() + 1].isVisited();
        }
    };
}
