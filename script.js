"use strict";
//dom objects
const humanChoice = document.querySelectorAll("button");
const para = document.createElement("p");
const result = document.querySelector(".result");
const humanScoreBox = document.querySelector(".human");
const computerScoreBox = document.querySelector(".computer");
//global variables
let humanScore = 0;
let computerScore = 0;
let round = 0;

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

// const getHumanChoice = function () {
//   let choice = prompt("Rock Paper Scissors").toLowerCase();

//   return choice;
// };

//Rules

const rules = {
  rock: { beats: ["scissors"] },
  paper: { beats: ["rock"] },
  scissors: { beats: ["paper"] },
};

//update Score
function updateScore() {
  humanScoreBox.textContent = `Human: ${humanScore}`;
  computerScoreBox.textContent = `Computer: ${computerScore}`;
}
//Game Rounds
function playRound() {
  const humanChoice = this.classList.value;
  if (humanScore < 5 && computerScore < 5) {
    round++;
    console.log(round);
    if (rules[getComputerChoice()].beats.includes(humanChoice)) {
      para.textContent = `You lose! ${getComputerChoice()} beats ${
        this.classList.value
      } `;
      result.appendChild(para);

      computerScore++;
      updateScore();
    } else if (rules[humanChoice].beats.includes(getComputerChoice())) {
      para.textContent = `You win! ${
        this.classList.value
      } beats ${getComputerChoice()}`;
      result.appendChild(para);

      humanScore++;
      updateScore();
    } else {
      para.textContent = "It's a tie";
      result.appendChild(para);
    }
  } else {
    winner();
  }
}

//Game Logic
function playGame() {
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
