'use strict';

/*
console.log (document.querySelector(`.message`).textContent);

document.querySelector(`.message`).textContent = `you got it nigga🎆🎊🎉`

document.querySelector(`.number`).textContent = 11;
document.querySelector(`.score`).textContent = 10;

document.querySelector(`.guess`) .value = 23;
console.log(document.querySelector(`.guess`) .value);
*/

// settting the random number
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

// creating the functions that make the game work
document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(`.message`).textContent = `🤬 NO NUMBER  🤬`;
  } else if (guess === secretNumber) {
    document.querySelector(`.message`).textContent = `you got it nigga🥳🎈✨🎉`;
  }
});
