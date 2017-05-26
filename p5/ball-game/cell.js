function Cell(x, y){
    this.x = x;
    this.y = y;
    this.solid = false;
    this.sides = [true, true, true, true];
    this.hole = false;

    this.getX = function(){ return this.x; };
    this.getY = function(){ return this.y; };
    this.isSolid = function(){ return this.solid; };

    this.makeSolid = function(){
        this.solid = true;
        return true;
    };

    this.makeHole = function(){
        this.hole = true;
    }

    this.display = function(){
        if(this.hole){
            fill(50);
            rect(x, y, 60, 60);
        }
        else if (this.solid){
            fill(300);
            rect(x, y, 60, 60);
        }
        
        
    };



}