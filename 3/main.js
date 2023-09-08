const count = document.querySelector('#count');
const button = document.querySelector('#button');

let counter = 0;

function updatebutton() {
    counter += 1;
    count.textContent = counter;
}

button.addEventListener('click', updatebutton);
