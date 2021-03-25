'use strict'

const randomInt = (min, max) => Math.floor(Math.random() * (max - min +1) + min);
const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

document.querySelector('.grandma').addEventListener('click', function (e) {
    this.style.backgroundColor = randomColor();
});
document.querySelector('.mom').addEventListener('click', function (e) {
    this.style.backgroundColor = randomColor();
});
document.querySelector('.baby').addEventListener('click', function (e) {
    this.style.backgroundColor = randomColor();
    this.style.top = `${randomInt(0, 100)}px`;
    this.style.left = `${randomInt(0, 100)}px`;
});