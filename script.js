"use strict";
//dom objects
const humanChoice = document.querySelectorAll("button");
const para = document.createElement("p");

//global variables
let humanScore = 0;
let computerScore = 0;

//Generating random choice from Computer
const getComputerChoice = function () {
  let choice = Math.floor(Math.random() * 3 + 1);

  if (choice === 1) {
    return "rock";
  } else if (choice === 2) {
    return "paper";
  } else {
    return "scissors";
  }
};

const getHumanChoice = function () {
  let choice = prompt("Rock Paper Scissors").toLowerCase();

  return choice;
};

//Rules

const rules = {
  rock: { beats: ["scissors"] },
  paper: { beats: ["rock"] },
  scissors: { beats: ["paper"] },
};

//Game Rounds
function playRound() {
  if (rules[getComputerChoice()].beats.includes(this.classList.value)) {
    console.log(
      `You lose! ${getComputerChoice()} beats ${this.classList.value} `
    );
    computerScore++;
  } else if (rules[this.classList.value].beats.includes(getComputerChoice())) {
    console.log(
      `You win! ${this.classList.value} beats ${getComputerChoice()}`
    );
    humanScore++;
  } else {
    console.log("It's a tie");
  }
}

//Game Logic
function playGame() {
  console.log(`Round ${i + 1}`);
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);

  winner();
}

//Winner Logic
function winner() {
  console.log("<-------------------------------->");
  if (computerScore > humanScore) {
    console.log("You loose the Game!!!😔😔");
  } else if (computerScore < humanScore) {
    console.log("You win the Game!!! 🎉 🎉");
  } else {
    console.log("It's a tie");
  }
}
//Play Game
// playGame();

//Experiment
humanChoice.forEach((choice) => {
  choice.addEventListener("click", playRound);
});
