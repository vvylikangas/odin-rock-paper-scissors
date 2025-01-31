const btnCont = document.getElementById('btn-container');
const rockButton = document.getElementById('rock-btn');
const paperButton = document.getElementById('paper-btn');
const scissorsButton = document.getElementById('scissors-btn');
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('scoreboard');

let humanChoice;
let computerChoice;

function getComputerChoice() {
  const rpsArr = ['rock', 'paper', 'scissors'];
  const rndIdx = Math.floor(Math.random() * rpsArr.length);
  return rpsArr[rndIdx];
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  btnCont.addEventListener('click', (event) => {
    if (humanScore === 5 || computerScore === 5) return;

    humanChoice = event.target.textContent;
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);

    if (humanScore === 5) {
      resultElement.innerText = 'You win!';
    } else if (computerScore === 5) {
      resultElement.innerText = 'Computer wins!';
    }
  });

  function playRound(humanChoice, computerChoice) {
    let human = humanChoice.toLowerCase();
    let computer = computerChoice;

    if (
      (human === 'paper' && computer === 'scissors') ||
      (human === 'scissors' && computer === 'rock') ||
      (human === 'rock' && computer === 'paper')
    ) {
      resultElement.innerText = `You lose! ${computer} beats ${human}`;
      computerScore += 1;
    } else if (human === computer) {
      resultElement.innerText = "It's a draw!";
    } else {
      resultElement.innerText = `You win! ${human} beats ${computer}`;
      humanScore += 1;
    }
    scoreElement.innerText = `Player: ${humanScore} - Computer ${computerScore}`;
  }
}

playGame();
