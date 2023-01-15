const screen = document.getElementById('screen');
const clear =document.getElementById('Clear');
const multiplyBtn =document.getElementById('multiply');
const divideBtn = document.getElementById('divide');
const addBtn = document.getElementById('add');
const subtractBtn = document.getElementById('subtract');
const equal = document.getElementById('equal');
const eye1 = document.getElementById('eye1');
const eye2 = document.getElementById('eye2');

// Change eyes directions
function changeEyesDown() {
    eye1.classList.add('move');
    eye2.classList.add('move');
}

function changeEyesUp() {
    eye1.classList.remove('move');
    eye2.classList.remove('move');    
}

// print a number to the screen and store it's value
const para = document.getElementById('para');
let paraValue;
function printAnswer(value) {
    changeEyesUp();
    para.textContent += value;
    screen.append(para);
    paraValue =para.textContent;
    return paraValue;
}

// clear function 
function clearScreen() {
    para.textContent = "";
    paraValue = undefined;
}
// clear screen on click
clear.addEventListener('click', clearScreen)

// add,multiply,divide and subtract functions
function add(...args){
    return parseFloat([...args].reduce((acc,cur) => acc + cur,));
}

function subtract(...args){
    return [...args].reduce((acc,cur) => acc - cur);
}

function multiply(...args){
    return [...args].reduce((acc,cur) => acc * cur,);
}

function divide(...args){
    return [...args].reduce((acc,cur) => acc/cur,);
}

// calculator logic 
// let tell = prompt("What would you like to do add/subtract/divide or multiply");
// let dig1 = Number.parseFloat(prompt());
// let dig2 = Number.parseFloat(prompt());
const operate = function(a,b) {
    switch(tell) {
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case '/':
            return divide(a,b);
        case 'x':
            return multiply(a,b);
        default:
            return 'You did not choose what you would like to do'
    }
}
