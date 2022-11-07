const firstNumber = prompt('Enter the first number');
const secondNumber = prompt('Enter the second number');

if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    console.log(`First number: ${firstNumber}. Second number: ${secondNumber}. Sum: ${firstNumber + secondNumber}. Product: ${firstNumber * secondNumber}. Power: ${Math.pow(firstNumber, secondNumber)}`)
}
else {
    console.log('Incorrect input!')
}
