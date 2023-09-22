let randomNumber;
let startGenerate;
let sum =0;

const generateRandomNumber = function (){
    return Math.floor(Math.random() * 100 + 1);
}


const calc = function () {
    randomNumber = generateRandomNumber();
    sum += randomNumber;
    const randomNumberDisplay = document.getElementById('random-number');
    randomNumberDisplay.textContent = `random number : ${randomNumber}`;
    
    return sum;
}

const startSum = function () {
    startGenerate = setInterval(startCalc, 2000);
}



const stopSum = function() {
    clearInterval(startGenerate);
}

function startCalc() {
    const result = calc();
    document.getElementById('result').textContent = `sum : ${result}`;

    const randomNum = generateRandomNumber();

document.getElementById('random-number').textContent = `random num : ${randomNum}`;
}








document.querySelector('#start').addEventListener('click', startSum);

document.querySelector('#stop').addEventListener('click', stopSum);