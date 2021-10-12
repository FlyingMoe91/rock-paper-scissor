const pcChoice = ['Rock', 'Paper', 'Scissor'];

function computerPlay() {
  return pcChoice[Math.floor(Math.random() * pcChoice.length)];
}

function playerSelection() {
  
}

console.log(computerPlay());