
//35 * 35 grid
var Food = function(canvas_size){
    this.x = floor(random(canvas_size/20)) * 20;
    this.y = floor(random(canvas_size/20)) * 20;

    //displays the food in the x and y coordinates calculated above.
    this.display = function(){
        fill("#FF8A80");
        rect(this.x, this.y, 20, 20);
    }

    //changes the location of the x and y variables above.
    this.change_location = function(){
        this.x = floor(random(canvas_size/20)) * 20;
        this.y = floor(random(canvas_size/20)) * 20;
    }
}