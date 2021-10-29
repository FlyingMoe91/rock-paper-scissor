let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore = 0;
const round = document.querySelector('#round');
const score = document.querySelector('#score');
const final = document.querySelector('#game');

function computerPlay() {
  const pcChoice = ['rock', 'paper', 'scissors'];
  return pcChoice[Math.floor(Math.random() * pcChoice.length)];
}
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playRound(button.id);
  })
})

function playRound(arg) {
  computerSelection = computerPlay();
  playerSelection = arg;
  let round = 0;

  if (playerSelection == "rock" && computerSelection == "scissors" || 
      playerSelection == "scissors" && computerSelection == "paper" ||
      playerSelection =="paper" && computerSelection =="rock") {

    playerScore++;
    round.textContent = `You Win this round! ${playerSelection} beats ${computerSelection}`;

  }else if(computerSelection == "rock" && playerSelection == "scissors" || 
           computerSelection == "scissors" && playerSelection == "paper" ||
           computerSelection =="paper" && playerSelection =="rock") {
    computerScore++;
    round.textContent = `You lose this round! ${computerSelection} beats ${playerSelection}`;
    return `You lose this round! ${computerSelection} beats ${playerSelection}`;

  }else if(playerSelection === computerSelection) {
    round.textContent = "It's a tie";
  }

  score.textContent = "Player: " + playerScore + "  || Computer: " + computerScore;


  if(playerScore === 5) {
    final.textContent = `Congrats" You've won this game with ${playerScore}:${computerScore}`;
  }else if(computerScore === 5) {
    final.textContent = `That didn't go so well. You lose this game with ${playerScore}:${computerScore}`;
  }
}


/*
function game(arg) {

  for (let round = 0; round < 5; round++) {
    let playround = playRound(arg);

    if(playround == `You Win this round! ${playerSelection} beats ${computerSelection}`) {
      playerScore++;
    }else if(playround == `You lose this round! ${computerSelection} beats ${playerSelection}`){
      computerScore++;
    }
    score.textContent = "Player: " + playerScore + "  || Computer: " + computerScore;
  }

  if(playerScore === computerScore) {
    final.textContent = `No Winner, No Loser. This game was a tie`;
  }else if(playerScore > computerScore) {
    final.textContent = `Congrats" You've won this game with ${playerScore}:${computerScore}`;
  }else{
    final.textContent = `That didn't go so well. You lose this game with ${playerScore}:${computerScore}`;
  }
  */
}