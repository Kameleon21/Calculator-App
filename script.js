const screen = document.getElementById('screen');
const clear =document.getElementById('Clear');
const multiplyBtn =document.getElementById('multiply');
const divideBtn = document.getElementById('divide');
const addBtn = document.getElementById('add');
const subtractBtn = document.getElementById('subtract');
const equal = document.getElementById('equal');
const eye1 = document.getElementById('eye1');
const eye2 = document.getElementById('eye2');

const screenValue = document.getElementById('screen').value;

// display number for each button pressed
let newNumber = document.createElement('p')
const allBtn = document.querySelectorAll('button');
    allBtn.forEach(allBtn => {
        allBtn.addEventListener('click', (e) => {
            if(e.target.id === '0') {
                newNumber.textContent = 0;
                screen.append(newNumber);
            } else if(e.target.id === '1') {
                newNumber.textContent = 1;
                screen.append(newNumber);
            } else if(e.target.id === '2') {
                newNumber.textContent = 2;
                screen.append(newNumber);
            } else if(e.target.id === '3') {
                newNumber.textContent = 3;
                screen.append(newNumber);
            } else if(e.target.id === '4') {
                newNumber.textContent = 4;
                screen.append(newNumber);
            } else if(e.target.id === '5') {
                newNumber.textContent = 5;
                screen.append(newNumber);
            } else if(e.target.id === '6') {
                newNumber.textContent = 6;
                screen.append(newNumber);
            } else if(e.target.id === '7') {
                newNumber.textContent = 7;
                screen.append(newNumber);
            } else if(e.target.id == '8') {
                newNumber.textContent = 8;
                screen.append(newNumber);
            } else if(e.target.id === '9') {
                newNumber.textContent = 9;
                screen.append(newNumber);
            } else if (e.target.id === 'Clear') {
                screen.innerHTML ='';
                newNumber = undefined;
            }
        })
    })

console.log(newNumber);

function changeEyes() {
    eye1.classList.toggle('move');
    eye2.classList.toggle('move');
}

equal.addEventListener('click', changeEyes)




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
