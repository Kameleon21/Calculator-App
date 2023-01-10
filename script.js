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
let tell = prompt("What would you like to do add/subtract/divide or multiply");
let dig1 = Number.parseFloat(prompt());
let dig2 = Number.parseFloat(prompt());
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
alert(operate(dig1,dig2));