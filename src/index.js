import addPart from './function.js';

//scale the snek!
//define what TYPE of ELEMENT to create
//start by selecting the buttons from the DOM using querySelectorAll,
//which creates something LIKE an array (hence the pluralization of 'buttons')
const buttons = document.querySelectorAll('.color');
const snake = document.getElementById('snake');

//loop the returned buttons with a for loop and subscribe an
//event listener to click event of each one
for(let i = 0; i < buttons.length; i++) {
    const button = buttons[i];

    button.addEventListener('click', () => {
        addPart(snake, button.value);
    });

}