$(document).ready(function() {

var wins = 0;
var losses = 0;
var yourScore = 0;


var randomNum = Math.floor(Math.random() * 120) + 19;
var power = Math.floor(Math.random() * 12) + 1;
var reality = Math.floor(Math.random() * 12) + 1;
var soul = Math.floor(Math.random() * 12) + 1;
var space = Math.floor(Math.random() * 12) + 1;

 $("#stone-1").on("click", function() {
    yourScore += power;
    updateScore();

        if (yourScore === randomNum) {
            wins ++;
            updateWins();
            reset();
        }
    
        else if (yourScore > randomNum) {           
            losses ++;
            updateLosses();
            reset();
        }
 });

 $("#stone-2").on("click", function() {
    yourScore += reality;
    updateScore();

        if (yourScore === randomNum) {
            wins ++;
            updateWins();
            reset();
        }
    
        else if (yourScore > randomNum) {         
            losses ++;
            updateLosses();
            reset();
        }
});

$("#stone-3").on("click", function() {
    yourScore += soul;
    updateScore();

        if (yourScore === randomNum) {
            wins ++;
            updateWins();
            reset();
        }
    
        else if (yourScore > randomNum) {
            losses ++;
            updateLosses();
            reset();
        }
});

$("#stone-4").on("click", function() {
    yourScore += space;
    updateScore();

        if (yourScore === randomNum) {
            wins ++;
            updateWins();
            reset();
        }
    
        else if (yourScore > randomNum) {
            losses ++;
            updateLosses();
            reset();
        }
});



$("#randomNum-text").text(randomNum);
$("#yourScore-text").text(yourScore);

function updateWins () {
    $("#win-text").text(wins);
    $("#game-text").text("You won!");
    //wins ++;
}

function updateLosses () {
    $("#lose-text").text(losses);
    $("#game-text").text("You lost!");
    //losses ++;
}

function updateScore () {
    $("#yourScore-text").text(yourScore);
}

function reset() {
    randomNum = Math.floor(Math.random() * 120) + 19;
    $("#randomNum-text").text(randomNum);
    yourScore = 0;
    $("#yourScore-text").text(yourScore);  
    power = Math.floor(Math.random() * 12) + 1;
    reality = Math.floor(Math.random() * 12) + 1;
    soul = Math.floor(Math.random() * 12) + 1;
    space = Math.floor(Math.random() * 12) + 1;
}

});
