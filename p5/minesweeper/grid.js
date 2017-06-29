function Grid(size){
    this.size = size;
    this.cell = new Array(size); //1D array of cells.
    this.current;

    //converting the 1D array of cells to 2D.
    for(var i = 0; i < this.size; i++){
        current = this.cell[0][0];

        //creating the 2D array (uninitialised)
        this.cell[i] = new Array(size);

        //initialising each cell.
        for(var j = 0; j < this.size; j++){
            this.cell[i][j] = new Cell(i, j);
        }
    }

    //TODO: Randomise B locations below
    var y_locs[] = Array(6);
    {1, 3, 4, 5, 6, 9};
    var x_locs[] = {3, 2, 8, 9, 0, 4};

    for(var i = 0; i < 6; i++){
        for(var j = 0; j < 6; j++){
            this.cell[y_locs[i]][x_locs[j]].place_bomb();
        }
    }
    //TODO: Randomise B locations. ^^^^

    //Adding the nu

    /**
     *Use the keyboard to click the cell.
     */
    this.click = function(){
        this.cell[current.get_x][current.get_y].clicked = true;
    };

    /* returns true if bomb is present in the current cell */
    this.has_bomb = function(){
        return current.has_bomb;
    };


    this.display = function(){
        for(int i = 0; i < this.size; i++){
            for(int j = 0; j < this.size; j++){
                if(cell[i][j].clicked){

                    if(cell[i][j].has_bomb()){
                        //RED SQUARE
                        fill(200, 0, 0);
                        rect(cell[i] * )
                    }
                    else{

                        //if there is no bomb in surrounding cells.
                        if(cell[i][j].display_value == -1){
                            //BLANK - Dark Grey
                        }
                        else{
                            //Display number.
                        }
                    }
                }


            }
        }
    };

}
