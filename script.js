'use strict';

// const msg = document.querySelector('.message');
// // Atributo para modificar el contenido del elemento
// msg.textContent = 'Corect Number';

// // Input
// const input = document.querySelector('.guess');
// // Modificar el valor del input
// input.value = 23;
// console.log(input.value);

// Seleccionar button check
const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');
const guess = document.querySelector('.guess');
const number = document.querySelector('.number');
const message = document.querySelector('.message');

let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;

guess.addEventListener('keypress', function (event) {
  // Para que funcione en todo los navegadores si witch o keycode
  const charCode = event.which ? event.which : event.keycode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    // Detiene la acción determinada de un evento
    event.preventDefault();
  }
});

btnCheck.addEventListener('click', function () {
  if (score < 1) return;
  const num = Number(guess.value);

  if (!num) {
    message.textContent = '⛔ No number';
  } else if (num === secretNumber) {
    message.textContent = 'It is corect number 🎉🎉🙌';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.which = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (num > secretNumber) {
    message.textContent = '📈 Too high!';
    score--;
  } else if (num < secretNumber) {
    message.textContent = ' 📉Too low!';
    score--;
  } else {
    message.textContent = '✋ Out of range';
  }

  if (score === 0) {
    message.textContent = '😭 You Loose';
    return;
  }

  document.querySelector('.score').textContent = score;
});

btnAgain.addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  message.textContent = 'Start guessing...';
  guess.value = '';
});
