const screen = document.getElementById('para');
const seven =document.getElementById('7');
const eight =document.getElementById('8');
const nine =document.getElementById('9');
const clear =document.getElementById('Clear');
const four =document.getElementById('4');
const five =document.getElementById('5');
const six =document.getElementById('6');
const multiplyBtn =document.getElementById('multiply');
const one =document.getElementById('1');
const two =document.getElementById('2');
const three =document.getElementById('3');
const divideBtn = document.getElementById('divide');
const zero = document.getElementById('0');
const addBtn = document.getElementById('add');
const subtractBtn = document.getElementById('subtract');
const equal = document.getElementById('equal');
const eye1 = document.getElementById('eye1');
const eye2 = document.getElementById('eye2');


seven.addEventListener('click', () => {
    newNumber();
})

function changeEyes() {
    eye1.style.alignItems= 'flex-end';
    eye2.style.alignItems= 'flex-end';
}

equal.addEventListener('click', () => {
    eye1.classList.toggle = ("move-eyes");
    eye2.classList.toggle = ("move-eyes");
})




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
        case 'add':
            return add(a,b);
        case 'subtract':
            return subtract(a,b);
        case 'divide':
            return divide(a,b);
        case 'multiply':
            return multiply(a,b);
        default:
            return 'You did not choose what you would like to do'
    }
}
