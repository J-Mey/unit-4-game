//$(document).ready(function() {

var wins = 0;
var losses = 0;
var yourScore = 0;


var randomNum = Math.floor(Math.random() * 120) + 9;

var power = Math.floor(Math.random() * 12) + 1;
var reality = Math.floor(Math.random() * 12) + 1;
var soul = Math.floor(Math.random() * 12) + 1;
var space = Math.floor(Math.random() * 12) + 1;

 $("#stone-1").on("click", function() {
    yourScore += power;
    updateScore();

        if (yourScore === randomNum) {
            alert("You Win!");
            wins ++;
            updateWins();
        }
    
        else if (yourScore >= randomNum) {
            alert("You Lose!");
            losses ++;
        }
 });

 $("#stone-2").on("click", function() {
    yourScore += reality;
    updateScore();

        if (yourScore === randomNum) {
            alert("You Win!");
            wins ++;
            updateWins();
        }
    
        else if (yourScore >= randomNum) {
            alert("You Lose!");
            losses ++;
        }
});

$("#stone-3").on("click", function() {
    yourScore += soul;
    updateScore();

        if (yourScore === randomNum) {
            alert("You Win!");
            wins ++;
            updateWins();
        }
    
        else if (yourScore >= randomNum) {
            alert("You Lose!");
            losses ++;
        }
});

$("#stone-4").on("click", function() {
    yourScore += space;
    updateScore();

        if (yourScore === randomNum) {
            alert("You Win!");
            wins ++;
            updateWins();
        }
    
        else if (yourScore >= randomNum) {
            alert("You Lose!");
            Losses ++;
        }
});



$("#randomNum-text").text(randomNum);

function updateWins () {
    $("#win-text").text(wins);
}

function updateLosses () {
    $("#lose-text").text(losses);
}

function updateScore () {
    $("#yourScore-text").text(yourScore);
}

//});
