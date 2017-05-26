
function Grid(level){
    this.grid_size = 10;
    this.grid = new Array(10);
    this.data = new Array(10);
    var i, j;

    for(i = 0; i < this.grid_size; i++){
        this.grid[i] = new Array(10);
        for(j = 0; j < this.grid_size; j++){
            this.grid[i][j] = new Cell(i * 60, j * 60);
        }
    }



    if(level === 1){
        this.data = [
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
                //var tempx = i * 10;
                //var tempy = j * 10;
                if(this.data[j][i] === 1){
                    this.grid[i][j].solid = true;
                }
            }
        }
        this.grid[6][8].makeHole();


    }

    this.display = function(){
         
        for(var i = 0; i < 10; i++){
            for(var j = 0; j < 10; j++){

                this.grid[i][j].display();
            }
        }
    };




}