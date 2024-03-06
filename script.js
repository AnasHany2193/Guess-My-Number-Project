'use strict';

let randomNumber = Math.floor(Math.random() * 20) + 1;
console.log(randomNumber);

let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

let score = 20;
let highscore = 0;
let newHighScore = 0;
let guessed = false;

// Check Button Action
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // Where there is no input or number less than 1 or greated than 20
  if (guess > 20 || !guess) {
    displayMessage('⛔ (Number between 1 and 20)');

    // when player wins
  } else if (guess === randomNumber) {
    newHighScore = score;
    // Winning message
    displayMessage('🎉 Correct Number!');
    // Styling background color
    document.querySelector('body').style.backgroundColor = '#60b347';
    // Styling the div number
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = randomNumber;
    // Set score if there is a new record
    if (newHighScore > highscore) {
      highscore = newHighScore;
      document.querySelector('.highscore').textContent = highscore;
    }

    // when player input a wrong number
  } else if (guess !== randomNumber) {
    if (score > 1) {
      displayMessage(guess > randomNumber ? '↗️ Too high!' : '↙️ Too low!');
      document.querySelector('.score').textContent = --score;

      // when score = 0
    } else {
      displayMessage('💥You Lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Again Button Action
document.querySelector('.again').addEventListener('click', function () {
  // reset the score
  score = 20;
  document.querySelector('.score').textContent = score;

  // get a new random value
  randomNumber = Math.floor(Math.random() * 20) + 1;

  // reset the starting messages
  displayMessage('Start guessing...');

  // reset the number '?'
  document.querySelector('.number').textContent = '?';
  document.querySelector('.highscore').textContent = highscore;
  document.querySelector('.number').style.width = '15rem';

  // reset input guess
  document.querySelector('.guess').value = '';

  // reset background color
  document.querySelector('body').style.backgroundColor = '#222';
});
