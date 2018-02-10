var easyMode = false;

startOver();

function startOver() {
    var maxSquares = 6;
    if(easyMode) {
        maxSquares = 3;
    }

    // Setup modes
    var hardModeSelector = document.querySelector("#difficulty-hard");
    hardModeSelector.addEventListener("click", function() {
        easyMode = false;
        startOver();
    });
    var easyModeSelector = document.querySelector("#difficulty-easy");
    easyModeSelector.addEventListener("click", function() {
        easyMode = true;
        startOver();
    });

    // Initial placeholder colors...
    var colors = [];
    var container = document.querySelector("#container");
    container.innerHTML = "";
    for(var i = 0; i < maxSquares; i++){
        colors.push("rgb(255, 0, 0)");
        container.innerHTML += "<div class=\"square\"></div>\n";
    }


    // pick 6 random colors and add to the above array.
    for(var i = 0; i < maxSquares; i++){
        var red = Math.floor(Math.random() * 256);
        var green = Math.floor(Math.random() * 256);
        var blue = Math.floor(Math.random() * 256);
        colors[i] = "rgb(" + red + ", " + green + ", " + blue + ")";
    }

    // select all the squares
    var squares = document.querySelectorAll(".square");

    // pick one of the squares in random
    var chosenColorIndex = Math.floor(Math.random() * maxSquares);
    var chosenColor = colors[chosenColorIndex];

    // apply colours to all the squares
    var bodyElement = document.querySelector("body");
    var statusDisplay = document.querySelector("#status");
    var restartButton = document.querySelector("#restart");
    restartButton.addEventListener("click", function() {
        startOver();
    });

    for(var i = 0; i < maxSquares; i++) {

        //Add the picked color to each square
        squares[i].style.backgroundColor = colors[i];

        // Add click actions to each square
        squares[i].addEventListener("click", function() {
            var current = this.style.backgroundColor;

            // If the choice is correct
            if(current === chosenColor){
                statusDisplay.style.color = "#43A047";
                statusDisplay.innerHTML = "Good Job! <i class=\"fas fa-check\"></i>";

                setTimeout(function() {
                    statusDisplay.innerHTML="";
                    statusDisplay.className="";
                }, 5000);

                restartButton.innerHTML = "Play Again";

            }
            // If the choice is wrong
            else {
                this.style.backgroundColor = "#424242";
                statusDisplay.style.color = "indianred";
                statusDisplay.innerHTML = "Try Again! <i class=\"fas fa-times\"></i>";
                statusDisplay.className = "shake";
                setTimeout(function() {
                    statusDisplay.innerHTML="";
                    statusDisplay.className = "";
                }, 500);

            }
        });
    }

    // select the title area and add the randomly selected colour in the html.
    var rgbTextArea = document.querySelector("#rgb-text-area");
    rgbTextArea.innerHTML = chosenColor.toUpperCase();
}


