let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore = 0;

const round = document.querySelector('#round');
const score = document.querySelector('#score');
const final = document.querySelector('#game');
const buttons = document.querySelectorAll('button');
const pcPic = document.querySelectorAll('.pcPic');
const animation = document.querySelector('.animation')
let computerRock = document.querySelector("#pcRock");
let computerPaper = document.querySelector("#pcPaper");
let computerScissors = document.querySelector("#pcScissors");



function computerPlay() {
  const pcChoice = ['rock', 'paper', 'scissors'];
  return pcChoice[Math.floor(Math.random() * pcChoice.length)];
}

function removeAnimation() {
  computerRock.classList.remove('animation');
  computerPaper.classList.remove('animation');
  computerScissors.classList.remove('animation');
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playRound(button.id);
  })
})

function playRound(playerSelection) {
  computerSelection = computerPlay();

  if (computerSelection == 'rock') {
    computerRock.classList.add('animation');
  }
  if (computerSelection == 'paper') {
    computerPaper.classList.add('animation');
  }
  if (computerSelection == 'scissors') {
    computerScissors.classList.add('animation');
  }

  pcPic.forEach(animation => animation.addEventListener('transitionend', removeAnimation));

  // Round and Gamescore
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
  }else if(playerSelection === computerSelection) {
    round.textContent = "It's a tie!";
  }

  score.textContent = "Player: " + playerScore + "  || Computer: " + computerScore;

  //Final Score and reset button
  if(playerScore === 5) {
    final.textContent = `Congrats" You've won this game with ${playerScore}:${computerScore}`;
    final.style.cssText = "color: lightgreen;"
    buttons.forEach(button => button.setAttribute('disabled', ''));
    const reset = document.createElement('button');
    reset.innerHTML = "New game";
    reset.id = "reset";
    document.body.appendChild(reset);
    reset.style.cssText = 'background-color: orange; font-size: 30px; border-radius: 4px;'

  }else if(computerScore === 5) {
    final.textContent = `That didn't go so well. You lose this game with ${playerScore}:${computerScore}`;
    final.style.cssText = "color: tomato;"
    buttons.forEach(button => button.setAttribute('disabled', ''));
    const reset = document.createElement('button');
    reset.innerHTML = "New game";
    reset.id = "reset";
    document.body.appendChild(reset);
    reset.style.cssText = 'background-color: orange; color: white; font-size: 30px; border-radius: 4px;'
  }

  const re = document.querySelector('#reset');
  re.addEventListener('click', () => {
    window.location.reload();
  });
}