const pcChoice = ['rock', 'paper', 'scissors'];

function computerPlay() {
  return pcChoice[Math.floor(Math.random() * pcChoice.length)];
}

  const computerSelection = computerPlay();
  const playerSelection =prompt("Rock, Paper or Scissors? Choose wisely.").toLowerCase();

function playRound() {
  if (playerSelection == "rock" && computerSelection == "scissors" || 
      playerSelection == "scissors" && computerSelection == "paper" ||
      playerSelection =="paper" && computerSelection =="rock") {
    return "You Win! " + playerSelection + " beats " + computerSelection;
  }else if(computerSelection == "rock" && playerSelection == "scissors" || 
           computerSelection == "scissors" && playerSelection == "paper" ||
           computerSelection =="paper" && playerSelection =="rock") {
    return "You lose! " + computerSelection + " beats " + playerSelection;
  }else if(playerSelection === computerSelection) {
    return "It's a tie!";
  }else {
    return "Choice unknown";
  }
}
console.log(playerSelection);
console.log(computerSelection);
console.log(playRound());