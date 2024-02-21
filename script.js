'use strict';
/*
console.log(document.querySelector(`.message`).textContent);

document.querySelector(`.message`).textContent = `Correct Number!`;

document.querySelector(`.number`).textContent = 13;
document.querySelector(`.score`).textContent = 10;

document.querySelector(`.guess`).value = 23;
console.log(document.querySelector(`.guess`).value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    // document.querySelector(`.message`).textContent = `no number!`;
    displayMessage(`No number!`);

    // When player wins
  } else if (guess === secretNumber) {
    score = score + 1;
    document.querySelector(`.score`).textContent = score;
    // document.querySelector(`.message`).textContent = `Correct Number!`;
    displayMessage(`Correct number!`);

    document.querySelector(`.number`).textContent = secretNumber;

    document.querySelector(`body`).style.backgroundColor = ` #60b347`;

    document.querySelector(`.number`).style.width = `30rem`;

    if (score > highscore) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector(`.message`).textContent =
      //     guess > secretNumber ? `Too high!` : `Too low!`;
      displayMessage(guess > secretNumber ? `Too high!` : `Too low!`);
      score = score - 1;
      document.querySelector(`.score`).textContent = score;
    } else {
      //   document.querySelector(`.message`).textContent = `You lose the game!`;
      displayMessage(`You lose the game`);
      document.querySelector(`.score`).textContent = 0;
    }
  }

  //     //when guess is to high
  //   } else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector(`.message`).textContent = `Too high!`;
  //       score = score - 1;
  //       document.querySelector(`.score`).textContent = score;
  //     } else {
  //       document.querySelector(`.message`).textContent = `You lose the game!`;
  //       document.querySelector(`.score`).textContent = 0;
  //     }

  //     //when guess is to low
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector(`.message`).textContent = `Too low!`;
  //       score--;
  //       document.querySelector(`.score`).textContent = score;
  //     } else {
  //       document.querySelector(`.message`).textContent = `You lose the game!`;
  //       document.querySelector(`.score`).textContent = 0;
  //     }
  //   }
});

console.log(document.querySelector(`.again`).textContent);
document.querySelector(`.again`).textContent;

document.querySelector(`.again`).addEventListener(`click`, function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  //   document.querySelector(`.message`).textContent = `Start guessing...`;
  displayMessage(`Start guessing...`);
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).value = ``;
  document.querySelector(`body`).style.backgroundColor = ` #222`;
  document.querySelector(`.number`).style.width = `15rem`;
});
