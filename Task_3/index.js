const firstNumber = parseInt(enterNumber());
const secondNumber = parseInt(enterNumber(firstNumber));

const randomNumber = Math.round(Math.random()*(secondNumber - firstNumber) + firstNumber);
findNumber(randomNumber);

function findNumber(num) {
    let differnt = 0;
    let isIncorrect = true;
    let varNum;
    let counter = 0;
    while (isIncorrect) {
        counter++;
        varNum = parseInt(prompt('Try to guess the number.'));
        if(varNum === num) {
            if(counter === 1) {
                alert ('Great! It’s like you knew the number!');
            }
            else {
                alert (`You did it in ${counter} attempts. Congratulations!`);
            }
            isIncorrect = false;
        }
        else if (((varNum + 1) === num) || ((varNum - 1) ===num)) {
            alert('You’re almost there!');
            differnt = Math.abs(num - varNum);
        }
        else if (Math.abs(num - varNum) >= differnt) {
            if(counter === 1) {
                alert('Cold.');
            }
            else {
                alert('Colder.');
            }
            differnt = Math.abs(num - varNum);
        }
        else {
            alert('Warmer.');
            differnt = Math.abs(num - varNum);
        }
    }
}

function enterNumber(fNumber) {
    let text;
    let number;
    let firstValidation = true;
    let secondValidation = false;

    if (fNumber === undefined) {
        text = 'Enter the first positive number.';
    }
    else {
        text = 'Enter the second positive number';
        secondValidation = true;
    }

    while(firstValidation) {
        number = prompt(text);
        if (parseInt(number) > 0) {
            firstValidation = false;
        }
        else {
            alert('Please enter only positive numbers.');
        }
    }

    while(secondValidation) {
        if (parseInt(number) > (fNumber + 100)) {
            secondValidation = false;
        }
        else {
            alert(`Please enter a number greater than ${fNumber + 100}.`);
            number = prompt(text);
        }
    }
    return number;

}
