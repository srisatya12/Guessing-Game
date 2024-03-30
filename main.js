let userInput = document.getElementById('userInput');
let randomNumber = Math.ceil(Math.random() * 100);
let gameResult = document.getElementById('gameResult');
console.log(randomNumber);

function checkGuess() {
    let value = parseInt(userInput.value);
    if (value > randomNumber) {
        gameResult.textContent = 'Too High! Try Again';
        gameResult.style.backgroundColor = '#1e217c'
    } else if (value < randomNumber) {
        gameResult.textContent = 'Too Low! Try Again';
        gameResult.style.backgroundColor = '#1e217c'
    } else if (value === randomNumber) {
        gameResult.textContent = "Congratulations! You got it right.";
        gameResult.style.backgroundColor = "green";
    } else {
        gameResult.textContent = "Please provide a valid input.";
        gameResult.style.backgroundColor = "#1e217c";
    }
}