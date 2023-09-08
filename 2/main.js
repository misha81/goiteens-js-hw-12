const random = Math.floor(Math.random() * 100) + 1;
const guessField = document.querySelector("#guessField");
const guessResult = document.querySelector("#guessResult");
const guessButton = document.querySelector('#button');


function checkGuess() {
    const guess = parseInt(guessField.value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        guessResult.textContent = 'Введіть число від 1 до 100';
    } else if (guess === random) {
        guessResult.textContent = "Вітаємо! Ви вгадали число!";
    } else {
        guessResult.textContent = "Вітаємо! Ви програли!";
    }

    guessField.value = '';
}

guessButton.addEventListener('click', checkGuess);