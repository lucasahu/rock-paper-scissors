// required variables
let playerSelection;
// computer choice randomizer function
function getComputerChoice () {
    return Math.floor(Math.random() * 3);
}
// function that converts the prompt input into numerical values and
// holds the rock paper scissors logic and determines a winner for each round played
function displayRoundPick () {
    roundPickText.textContent = ``
}


function displayRoundResult (result) {
    roundResultText.textContent = `${result}`
}

function setPlayerSelection (string) {
    if (string == 'rock') {
        playerSelection = 0;
    } else if (string == 'paper') {
        playerSelection = 1;
    } else if (string == 'scissors') {
        playerSelection = 2;
    }
}

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    console.log('corrio')
   console.log(playerSelection, computerSelection)
    if ((playerSelection + 1 ) % 3 == computerSelection) {
        console.log('computer wins')
        result = 'Computer wins'
    } else if (playerSelection == computerSelection) {
        console.log('draw')
        result = 'Its a draw'
    } else {
        console.log('player wins')
        result = 'Player wins'
    }
    return result
}

// DOM Code 

const main = document.querySelector('div.main');

const buttonRock = document.createElement('button');
buttonRock.classList.add('rock');
buttonRock.textContent = 'Rock';

buttonRock.addEventListener('click', () => setPlayerSelection('rock'));
buttonRock.addEventListener('click', () => playRound(playerSelection))
buttonRock.addEventListener('click', () => displayRoundResult(result))

const buttonPaper = document.createElement('button');
buttonPaper.classList.add('paper');
buttonPaper.textContent = 'Paper';

buttonPaper.addEventListener('click', () => setPlayerSelection('paper'));
buttonPaper.addEventListener('click', () => playRound(playerSelection))
buttonPaper.addEventListener('click', () => displayRoundResult(result))

const buttonScissors = document.createElement('button');
buttonScissors.classList.add('scissors');
buttonScissors.textContent = 'Scissors';

buttonScissors.addEventListener('click', () => setPlayerSelection('scissors'));
buttonScissors.addEventListener('click', () => playRound(playerSelection))
buttonScissors.addEventListener('click', () => displayRoundResult(result))

const displayRound = document.createElement('div');
const roundResultText = document.createElement('p');
roundResultText.textContent = '';
const roundPickText = document.createElement('p');

main.appendChild(buttonRock);
main.appendChild(buttonPaper);
main.appendChild(buttonScissors);
main.appendChild(displayRound);
displayRound.appendChild(roundResultText);
displayRound.appendChild(roundPickText)


