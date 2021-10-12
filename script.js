const pcChoice = ['Rock', 'Paper', 'Scissor'];

function computerPlay() {
  return pcChoice[Math.floor(Math.random() * pcChoice.length)];
}

console.log(computerPlay());