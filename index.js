let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const rpsArr = ['rock', 'paper', 'scissors'];
  const rndIdx = Math.floor(Math.random() * rpsArr.length);
  return rpsArr[rndIdx];
}

function getHumanChoice() {
  let humanChoice = prompt('Type "rock", "paper" or "scissors": ');
  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  let human = humanChoice.toLowerCase();
  let computer = computerChoice;

  if (
    (human === 'paper' && computer === 'scissors') ||
    (human === 'scissors' && computer === 'rock') ||
    (human === 'rock' && computer === 'paper')
  ) {
    console.log(`You lose! ${computer} beats ${human}`);
    computerScore += 1;
  } else if (human === computer) {
    console.log("It's a draw!");
  } else {
    console.log(`You win! ${human} beats ${computer}`);
    humanScore += 1;
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
