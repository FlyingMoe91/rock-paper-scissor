let computerSelection;
let playerSelection;

function computerPlay() {
  const pcChoice = ['rock', 'paper', 'scissors'];
  return pcChoice[Math.floor(Math.random() * pcChoice.length)];
}

function playRound() {
  computerSelection = computerPlay();
  playerSelection =prompt("Rock, Paper or Scissors? Choose wisely.").toLowerCase();

  if (playerSelection == "rock" && computerSelection == "scissors" || 
      playerSelection == "scissors" && computerSelection == "paper" ||
      playerSelection =="paper" && computerSelection =="rock") {
    return `You Win this round! ${playerSelection} beats ${computerSelection}`;
  }else if(computerSelection == "rock" && playerSelection == "scissors" || 
           computerSelection == "scissors" && playerSelection == "paper" ||
           computerSelection =="paper" && playerSelection =="rock") {
    return `You lose this round! ${computerSelection} beats ${playerSelection}`;
  }else if(playerSelection === computerSelection) {
    return "It's a tie!";
  }else {
    return "Choice unknown";
  }
}

function game() {

  let playerScore = 0;
  let computerScore = 0;

  for (let round = 0; round < 3; round++) {
    let playround = playRound();
    console.log(playround);

    if(playround == `You Win this round! ${playerSelection} beats ${computerSelection}`) {
      playerScore++;
    }else if(playround == `You lose this round! ${computerSelection} beats ${playerSelection}` ||
             "Choice unknown"){
      computerScore++;
    }
  console.log("Player: " + playerScore + "  || Computer: " + computerScore);
  }

  if(playerScore === computerScore) {
    console.log(`No Winner, No Loser. This game was a tie`)
  }else if(playerScore > computerScore) {
    console.log(`Cangrats" You've won this game with ${playerScore}:${computerScore}`)
  }else{
    console.log( `That didn't went so well. You lose this game with ${playerScore}:${computerScore}`)
  }
}

game();