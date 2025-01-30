function getComputerChoice() {
  const rpsArr = ['rock', 'paper', 'scissors'];
  const rndIdx = Math.floor(Math.random() * rpsArr.length);
  return rpsArr[rndIdx];
}

console.log(getComputerChoice());

function getHumanChoice() {
  let humanChoice = prompt('Type "rock", "paper" or "scissors": ');
  return humanChoice;
}

console.log(getHumanChoice());
