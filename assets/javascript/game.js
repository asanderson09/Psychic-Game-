// set game var
var wins = 0;
var losses = 0;
var attemptsLeft = 10;
var randChoice;
var playerGuess = [];


// game begins
// function to start game
initiatePlay();

function initiatePlay() {

    //computer selects a letter from the alphabet at random
    var abc = "abcdefghijklmnopqrstuvwxyz";
    var randLetter = abc[Math.floor(Math.random() * 26)];
    var randChoice = randLetter;

    console.log(randChoice);
    console.log(randLetter);



    // function to check if right 

    checkInfo();

    function checkInfo() {
        document.onkeyup = function (event) {

            // key pressed reflected as alphanumeric key, and turned into lowercase string

            var playerKey = String.fromCharCode(event.keyCode).toLowerCase();

            // forces player to select only letters from the alphabet
            if (event.keyCode < 65 || event.keyCode > 90) {
                alert("That's SOOO not a Number!");

                // alerts player of repeated attempts
            } else if (playerGuess.indexOf(playerKey) >= 0) {
                alert("I think you tried that already!!!");

                //When a guess is correct guess,
            } else if (playerKey === randChoice) {


                alert("You won! Was it really that hard");

                //Increase  win by 1 and reset
                wins = wins + 1;
                document.getElementById("player-wins").innerHTML = wins;

                resetGame();

            } else {

                // For an incorrect guess, decreases remaining guesses by 1
                attemptsLeft--;

                // Appends player's choice to the array/yourGuess variable
                document.getElementById("attempts-left").innerHTML = attemptsLeft;
                playerGuess.push(playerKey);

                console.log("guesses so far: " + playerGuess);

                document.getElementById("player-guesses").innerHTML = playerGuess;

                console.log("Guesses Left: " + attemptsLeft);

                checkattemptsLeft();
            }
        }
    }

    function resetGame() {

        // Guesses left starts back at 10
        attemptsLeft = 10;

        //Player's guesses array zerod out
        playerGuess = [];

        //Reset on player's screen
        document.getElementById("attempts-left").innerHTML = attemptsLeft;
        document.getElementById("player-guesses").innerHTML = playerGuess;

        //Restart game & choose new random letter
        initiatePlay();

    }

    function checkattemptsLeft() {

        if (attemptsLeft === 0) {

            //Game alerts player to loss
            console.log("You lost.");
            alert("You lost! you're not a real psychic, are you?");

            //Losses increase by 1 and new loss count displays on screen
            losses = losses + 1
            document.getElementById("player-losses").innerHTML = losses;

            //Restart game 
            resetGame();

        } else {
            console.log("Incorrect. Try again"); //test
            checkInfo();
        }

    }

}






















