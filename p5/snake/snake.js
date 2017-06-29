var SPEED = 20;
var SQUARE_SIZE = 20;


function TailSquare(){
    this.x = 0;
    this.y = 0;

    this.display = function(){
        fill("#E0E0E0");
        rect(this.x, this.y, SQUARE_SIZE, SQUARE_SIZE);
    }

    this.set_xy = function(x, y){
        this.x = x;
        this.y = y;
    }
}


function Snake(){
    this.x = 0;
    this.y = 0;
    this.x_speed = 0;
    this.y_speed = 0;
    this.length = 1;
    this.body = [];
    this.body_length = 0;

    this.show_head = function(){
        fill("#E9E9E9");
        rect(this.x, this.y, SQUARE_SIZE, SQUARE_SIZE);
    }

    this.display = function(){
        //TODO: display the tails.
        this.show_head();

        var tempx = this.x;
        var tempy = this.y;

        this.x += this.x_speed;
        this.y += this.y_speed;

        for(var i = this.body_length - 1; i > 0; i--){
            this.body[i].display();
            this.body[i].set_xy(this.body[i-1].x, this.body[i-1].y);
        }

        

        if(this.length > 1){
            this.body[0].display();
            this.body[0].set_xy(tempx, tempy);
        }

        // this.x += this.x_speed;
        // this.y += this.y_speed;
        
    }
    
    this.die = function(){
        console.log("DIED!!!!!!!");
        this.length = 1;
        this.body_length = 0;
    }

    this.touched_body = function(){
        for(var i = 2; i < this.body_length; i++){
            if(this.x == this.body[i].x){
                //TODO: SNAKE NOT DYING WHEN HEAD TOUCHES BODY >:(
                //this.die();
            }
        }
    }
    

    //If the snake crosses any of the edges, it will be put back to the edge of the screen.
    this.touched_screen_edge = function(limit){
        //Crosses the right edge of canvas
        if(this.x + 20 > limit){
            this.x = limit - 20;
            return true;
        }
        //Crosses the left edge of the canvase
        if(this.x < 0){
            this.x = 0;
            return true;
        }

        //Crosses the bottom edge of the screen
        if(this.y + 20 > limit){
            this.y = limit - 20;
            return true;
        }

        //Crosses the top edge of the screen.
        if(this.y < 0){
            this.y = 0;
            return true;
        }
        return false; //Doesn't touch any edge.
    }
    
    //moves the snake up
    this.move_up = function(){
        this.x_speed = 0;
        this.y_speed = -1 * SPEED;
    }

    //moves the snake right
    this.move_right = function(){
        this.x_speed = SPEED;
        this.y_speed = 0;
    }

    //moves the snake down
    this.move_down = function(){
        this.x_speed = 0;
        this.y_speed = SPEED;
    }

    //moves the snake left
    this.move_left = function(){
        this.x_speed = -1 * SPEED;
        this.y_speed = 0;
    }



}
