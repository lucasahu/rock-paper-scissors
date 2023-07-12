// Global Variables

let computerWins = 0;
let playerWins = 0;
let count = 0;

// Helper Functions

function playRound(string) {

    if (string == 'rock') {
        playerSelection = 0;
    } else if (string == 'paper') {
        playerSelection = 1;
    } else if (string == 'scissors') {
        playerSelection = 2;
    }

    computerSelection = Math.floor(Math.random() * 3);

    if ((playerSelection + 1 ) % 3 == computerSelection) {
        result = 'Computer wins'
        count++;
        computerWins++;
        gameDisplay.textContent = `Game ${count}`
        display.textContent = `${result}`
        scoreDisplay.textContent = `The score is ${playerWins} - ${computerWins}`
    } else if (playerSelection == computerSelection) {
        result = 'Its a draw'
        count++;
        gameDisplay.textContent = `Game ${count}`
        display.textContent = `${result}`
        scoreDisplay.textContent = `The score is ${playerWins} - ${computerWins}`
    } else {
        result = 'Player wins'
        count++;
        playerWins++;
        gameDisplay.textContent = `Game ${count}`
        display.textContent = `${result}`
        scoreDisplay.textContent = `The score is ${playerWins} - ${computerWins}`
    }

}

function winCheck (playerWins, computerWins) {
    if (playerWins == 5 || computerWins == 5) {
        if (playerWins > computerWins) {
            setTimeout(function() {
                alert('Player wins!');
              }, 20);
            gameComplete = true;
        } else if (computerWins > playerWins) {
            setTimeout(function() {
                alert('Computer wins!');
              }, 20);
              gameComplete = true;
        }
    }
}



const main = document.querySelector('div.main');
const buttonRock = document.createElement('button');
const buttonPaper = document.createElement('button');
const buttonScissors = document.createElement('button');
const gameDisplay = document.createElement('p')
const display = document.createElement('p');
const scoreDisplay = document.createElement('p');

main.appendChild(buttonRock);
main.appendChild(buttonPaper);
main.appendChild(buttonScissors);
main.appendChild(gameDisplay);
main.appendChild(display);
main.appendChild(scoreDisplay);

buttonRock.textContent = 'ROCK';
buttonPaper.textContent = 'PAPER';
buttonScissors.textContent = 'SCISSORS';
gameDisplay.textContent = ``;
display.textContent = ``;
scoreDisplay.textContent = ``;

buttonRock.addEventListener('click', () => playRound('rock'));
buttonPaper.addEventListener('click', () => playRound('paper'));
buttonScissors.addEventListener('click', () => playRound('scissors'));

buttonRock.addEventListener('click', () => winCheck(playerWins, computerWins));
buttonPaper.addEventListener('click', () => winCheck(playerWins, computerWins));
buttonScissors.addEventListener('click', () => winCheck(playerWins, computerWins));


