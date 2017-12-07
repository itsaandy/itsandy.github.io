function Cell(x, y, visited){
    this.x = x;
    this.y = y;
    this.visited = false;
    this.sides = [true, true, true, true]; // [left, right, top, bottom]

    /**
     * Return the x value for this cell.
     * @returns {*} - x value of the cell.
     */
    this.getX = function() {
        return this.x;
    };

    /**
     * Return the y value for this cell.
     * @returns {int} - y value of the cell.
     */
    this.getY = function(){
        return this.y;
    };

    /**
     * Check whether this cell is visited.
     * @returns {boolean} - true if it is visited and false otherwise.
     */
    this.isVisited = function(){
        return this.visited;
    };

    /**
     * Mark this cell as visited.
     * @returns None
     */
    this.visit = function(){
        this.visited = true;
    };

    /**
     * Check which walls of the current cell is to be displayed.
     * @returns {Array|[boolean,boolean,boolean,boolean]} - true if the walls are to be displayed and false otherwise.
     *                                                      Format: [leftWall, rightWall, topWall, bottomWall]
     */
    this.getSides = function(){
        return this.sides;
    }
}
