function Cell(x, y){
    this.x = x;
    this.y = y;
    this.solid = false;
    this.sides = [true, true, true, true];

    this.getX = function(){ return this.x; };
    this.getY = function(){ return this.y; };
    this.isSolid = function(){ return this.solid; };
    this.makeSolid = function(){ this.solid = true; };

    var display = function(){
        if(this.solid === true){
            rect(x, y, 60, 60);
        }
    }

}

function Grid(level){
    this.grid_size = 10;
    this.grid = Array(10, 10);
    this.cell;
    var i, j;

    for(i = 0; i < this.grid_size; i++){

        for(j = 0; j < this.grid_size; j++){
            this.grid[i][j] = new Cell(i * 10, i * 10);
        }
    }



    if(level === 1){
        this.cell = [
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], //0
            [1, 0, 0, 0, 0, 0, 1, 1, 1, 1], //1
            [1, 1, 0, 0, 1, 0, 0, 0, 0, 0], //2
            [0, 0, 0, 0, 1, 0, 0, 0, 1, 0], //3
            [1, 0, 0, 0, 0, 1, 0, 0, 0, 0], //4
            [0, 0, 0, 1, 0, 0, 0, 0, 0, 1], //5
            [0, 0, 0, 1, 0, 0, 1, 1, 1, 1], //6
            [0, 0, 0, 1, 0, 0, 1, 1, 1, 1], //7
            [0, 1, 0, 1, 1, 1, 0, 0, 0, 0], //8
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]  //9
        ];
        for(i = 0; i < this.grid_size; ++i){
            for(j = 0; j < this.grid_size; ++j){
                console.log(this.cell[i][j]);
            }
        }

        for(i = 0; i < this.grid_size; ++i){
            for(j = 0; j < this.grid_size; ++j){
                var tempx = i * 10;
                var tempy = j * 10;
                if(this.cell[i][j] === 1){
                    this.grid[i][j].makeSolid();
                }
            }
        }


    }

    var display = function(){
        for(var i = 0; i < 10; i++){
            for(var j = 0; j < 10; j++){
                grid[i][j].display();
            }
        }
    }




}