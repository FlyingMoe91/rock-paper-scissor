const pcChoice = ['Rock', 'Paper', 'Scissor'];

function computerPlay() {
  return pcChoice[Math.floor(Math.random() * pcChoice.length)];
}

function playerPlay() {
  return pcChoice[Math.floor(Math.random() * pcChoice.length)];
}

 const playerSelection = playerPlay();
 const computerSelection = computerPlay();

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

console.log(playerSelection);
console.log(computerSelection);
console.log(playRound())