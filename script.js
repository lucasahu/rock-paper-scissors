// Global Variables

let gameComplete = false;
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

    console.log(playerSelection, computerSelection);

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

function gameReset (gameComplete) {
    console.log(gameComplete)
    if (gameComplete === true) {
        computerWins = 0;
        playerWins = 0;
        count = 0;
        gameDisplay.textContent = `Game ${count}`
        display.textContent = ``
        scoreDisplay.textContent = `The score is ${playerWins} - ${computerWins}`
    }
}

function resetGameBoolean () {
    gameComplete = false;
}

const main = document.querySelector('div.main');
const content = document.createElement('div');
const header = document.createElement('div');
const footer = document.createElement('div');
const title = document.createElement('h1');
const footerText = document.createElement('p');
const buttonRock = document.createElement('button');
const buttonPaper = document.createElement('button');
const buttonScissors = document.createElement('button');
const div = document.createElement('div');
const gameDisplay = document.createElement('p');
const display = document.createElement('p');
const scoreDisplay = document.createElement('p');
const rockImage = document.createElement('img');
const paperImage = document.createElement('img');
const scissorsImage = document.createElement('img');

main.appendChild(header);
header.appendChild(title);
main.appendChild(content);
content.appendChild(buttonRock);
buttonRock.appendChild(rockImage);
content.appendChild(buttonPaper);
buttonPaper.appendChild(paperImage);
content.appendChild(buttonScissors);
buttonScissors.appendChild(scissorsImage);
main.appendChild(div)
div.appendChild(gameDisplay);
div.appendChild(scoreDisplay);
div.appendChild(display);
main.appendChild(footer);
footer.appendChild(footerText);

title.textContent = 'Rock Paper Scissors'
header.className = 'header';
gameDisplay.className = 'round';
display.className = 'result';
scoreDisplay.className = 'score';
footer.className = 'footer';
footerText.className = 'footer-text'
footerText.textContent = 'Copyright @ lucasahu 2023'
div.className = 'display'
content.className = 'content';
rockImage.src= './img/img1.png';
paperImage.src= './img/img2.png';
scissorsImage.src= './img/img3.png';

gameDisplay.textContent = `Game ${count}`
display.textContent = ``
scoreDisplay.textContent = `The score is ${playerWins} - ${computerWins}`

buttonRock.addEventListener('click', () => playRound('rock'));
buttonPaper.addEventListener('click', () => playRound('paper'));
buttonScissors.addEventListener('click', () => playRound('scissors'));

buttonRock.addEventListener('click', () => winCheck(playerWins, computerWins));
buttonPaper.addEventListener('click', () => winCheck(playerWins, computerWins));
buttonScissors.addEventListener('click', () => winCheck(playerWins, computerWins));

buttonRock.addEventListener('click', () => gameReset(gameComplete));
buttonPaper.addEventListener('click', () => gameReset(gameComplete));
buttonScissors.addEventListener('click', () => gameReset(gameComplete));

buttonRock.addEventListener('click', () => resetGameBoolean());
buttonPaper.addEventListener('click', () => resetGameBoolean());
buttonScissors.addEventListener('click', () => resetGameBoolean());


