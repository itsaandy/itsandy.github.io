function Cell(x, y){
    this.x = x; //x value of the cell.
    this.y = y; //y value of the cell.
    this.has_bomb = false;
    this.clicked = false;
    this.display_value = 0; //-1 for a bomb, 1-8 for number of surrounding bombs

    this.get_x = function() { return this.x; };
    this.click = function(){ this.clicked = true; };
    this.get_y = function() { return this.y; };
    this.has_bomb = function() { return this.has_bomb; };
    this.place_bomb = function(){ has_bomb = true; };
    this.is_clicked = function(){return this.clicked; };
    this.set_display_value = function(new_value){ this.display_value = new_value; };
}
