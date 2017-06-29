function Cell(x, y){
    this.x = x;
    this.y = y;
    this.is_bomb = false;
    this.number = -1;

    this.get_x = function(){
        return this.x;
    };

    this.get_y = function(){
        return this.y;
    };

    this.set_x = function(x){
        this.x =x;
    };

    this.set_y = function(y){
        this.y = y;
    };

    this.display = function(){
        fill(200);
        rect(this.x, this.y, 20, 20);
    }

}
