var maxGuesses = 5; // Set the maximum number of guesses allowed
var numGuesses = 0; // Initialize the number of guesses made to zero
var playerScore = 0; // Initialize the player's score to zero
var randomNumber = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100

function guessNumber() {
    var guessInput = document.getElementById("guessInput");
    var guess = parseInt(guessInput.value);
    var result = document.getElementById("result");
    var score = document.getElementById("score");
    var guesses = document.getElementById("guesses");

    if (isNaN(guess) || guess < 1 || guess > 100) { // Check if the player's input is valid
        result.innerHTML = "Please enter a valid number between 1 and 100!";
        return;
    }

    numGuesses++; // Increment the number of guesses made each time the function is called
    guesses.innerHTML = "Guesses remaining: " + (maxGuesses - numGuesses); // Update the number of guesses remaining

    if (numGuesses > maxGuesses) { // Check if the player has exceeded the maximum number of guesses
        result.innerHTML = "Sorry, you have used up all your guesses!";
        return;
    }

    if (guess === randomNumber) { // Check if the player's guess is correct
        result.innerHTML = "Congratulations! You guessed the number!";
        playerScore += 10; // Add 10 points to the player's score for a correct guess
        score.innerHTML = "Score: " + playerScore; // Update the score display
        maxGuesses += 5; // Increase the maximum number of guesses by 5
        guesses.innerHTML = "Guesses remaining: " + (maxGuesses - numGuesses); // Update the number of guesses remaining
        randomNumber = Math.floor(Math.random() * 100) + 1; // Generate a new random number
    } else if (guess < randomNumber) { // Check if the player's guess is too low
        result.innerHTML = "Your guess is too low. Try again!";
    } else { // The player's guess must be too high
        result.innerHTML = "Your guess is too high. Try again!";
    }
}

function resetGame() {
    numGuesses = 0; // Reset the number of guesses made to zero
    playerScore = 0; // Reset the player's score to zero
    maxGuesses = 5; // Reset the maximum number of guesses to 5
    guesses.innerHTML = "Guesses remaining: " + (maxGuesses - numGuesses); // Update the number of guesses remaining
    score.innerHTML = "Score: " + playerScore; // Update the score display
    result.innerHTML = ""; // Clear the result message
    randomNumber = Math.floor(Math.random() * 100) + 1; // Generate a new random number
}
