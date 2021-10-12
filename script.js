const pcChoice = ['Rock', 'Paper', 'Scissor'];

function computerPlay() {
  return pcChoice[Math.floor(Math.random() * pcChoice.length)];
}

  const computerSelection = computerPlay();
  playerInput =prompt("Rock, Paper or Scissor? Choose wisely.");
  playerInputLength = playerInput.length;
  playerInputEnd = playerInput.slice(1, playerInputLength);
  playerInputEndSmall = playerInputEnd.toLowerCase();
  playerInputFirstLetter = playerInput[0];
  playerInputFirstLetterBig = playerInputFirstLetter.toUpperCase();
  const playerSelection = playerInputFirstLetterBig + playerInputEndSmall;

console.log(playerSelection);

function playRound() {
  if (playerSelection === computerSelection) {
    return "It's a tie!"
  }else if (playerSelection == "Rock" && computerSelection == "Scissor" || 
            playerSelection == "Scissor" && computerSelection == "Paper" ||
            playerSelection =="Paper" && computerSelection =="Rock") {
    return "You Win!";
  }else {
    return "You lose!";
  }
}

//console.log(playerSelection);
console.log(computerSelection);
console.log(playRound())