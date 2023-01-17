const screen = document.getElementById('screen');
const clear =document.getElementById('Clear');
const equal = document.getElementById('equal');
const eye1 = document.getElementById('eye1');
const eye2 = document.getElementById('eye2');
let operations=[];
let operatorValue;

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
let variableHolder=[];
function printAnswer(value) {
    changeEyesUp();
    para.textContent += value;
    screen.append(para);
}

// clear function 
function clearScreen() {
    para.textContent = "";
    changeEyesUp();
    variableHolder.length = 0;
    operations.length =0;
}

// check for which operator has been pressed
function checkOperator(value) {
    if(value === 'multiply') {
        variableHolder.push(Number.parseFloat(para.textContent));
        para.textContent = "";
        operations.push("multiply");
        return operations;
    } else if(value === 'add') {
        variableHolder.push(Number.parseFloat(para.textContent));
        para.textContent = "";
        operations.push("add");
        return operations;
    } else if(value === 'subtract') {
        variableHolder.push(Number.parseFloat(para.textContent));
        para.textContent = "";
        operations.push("subtract");
        return operations;
    } else if(value === 'divide') {
        variableHolder.push(Number.parseFloat(para.textContent));
        para.textContent = "";
        operations.push("divide");
        return operations;
    }
    if(value === 'equal') {
        variableHolder.push(Number.parseFloat(para.textContent));
        if(variableHolder.length == 3) {
            orderOfOperation1();
        } else if(variableHolder.length >=4) {
            orderOfOperation1();
            orderOfOperation2();
        }
        if(operations[0] === 'divide') {
            zeroError();
        } else {
             let answer = operate(...operations,...variableHolder);
            // rounds off to two decimal places
            let roundedAnswer = answer.toFixed(2);
            if(answer % 1 === 0) {
                para.textContent = answer;
                screen.append(para);
            } else if (answer % 1 !== 0) {
                para.textContent = roundedAnswer;
                screen.append(para);
            }
            changeEyesDown();
            variableHolder.length = 0;
            operations.length = 0;
        }
    }
}

// displays an error message if users tries to divide by 0
function zeroError() {
    if(variableHolder[0] === 0 || variableHolder[1] === 0 ) {
        para.textContent = 'Not Happening!';
        screen.append(para);
    }
}



// determine the length of the variableHolder array to set order of operations 
// first operation
let sum;
function orderOfOperation1() {
    if(variableHolder.length >=2) {
        for(let i = variableHolder.length;i>0;i--) {
            operations[0];
            let ans1 = variableHolder[0];
            let ans2 = variableHolder[1];
            sum = operate(operations[0],ans1,ans2)
            variableHolder.shift();
            variableHolder.shift();
            variableHolder.unshift(sum);
            operations.shift();
            return sum;
        }
    }
}

// second operation
function orderOfOperation2() {
    if(variableHolder.length >=2) {
        for(let i = variableHolder.length;i>0;i--) {
            operations[0];
            let ans1 = variableHolder[0];
            let ans2 = variableHolder[1];
            sum = operate(operations[0],ans1,ans2)
            variableHolder.shift();
            variableHolder.shift();
            variableHolder.unshift(sum);
            operations.shift();
            return sum;
        }
    }
}

// delete number
function delNum(value) {
    if(value === 'delete') {
        para.textContent = para.innerText.slice(0,-1);
        screen.append(para);
    }
}

// decimal point
function decimalDot(value) {
    if(value === 'dot') {
        if(!(para.textContent.includes(".")))
            para.textContent += ".";
            screen.append(para);
    }
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
const operate = function(operations,...args) {
    return [...args].reduce((acc,cur) => {
        switch(operations) {
            case 'add':
                return add(acc,cur);
            case 'subtract':
                return subtract(acc,cur);
            case 'divide':
                return divide(acc,cur);
            case 'multiply':
                return multiply(acc,cur);
            default:
                return 'You did not choose what you would like to do'
        }
    });
}
