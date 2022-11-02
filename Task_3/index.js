let firstNumber = parseInt(enterNumber());
let secondNumber = parseInt(enterNumber(firstNumber));



let randomNumber = Math.round(Math.random()*(secondNumber - firstNumber) + firstNumber);
alert(randomNumber);
findNumber(randomNumber);

function findNumber(num) {
    let differnt = 0;
    let isIncorrect = true;
    let varNum;
    let counter = 0;
    while (isIncorrect) {
        counter++;
        varNum = parseInt(prompt('угадайте число'));
        if(varNum === num) {
            alert('Win');
            isIncorrect = false;
        }
        else if (((varNum + 1) === num) || ((varNum - 1) ===num)) {
            alert('Almos');
            differnt = Math.abs(num - varNum);
        }
        else if (Math.abs(num - varNum) >= differnt) {
            alert('Colder');
            differnt = Math.abs(num - varNum);

        }
        else {
            alert('Warmer');
            differnt = Math.abs(num - varNum);
        }
    }


}

function enterNumber(fNumber) {
    let text;
    let isFirst = true;
    let number;
    let firstValidation = true;
    let secondValidation = false;

    if (fNumber === undefined) {
        text = 'Введите первое число';
    }
    else {
        text = 'Введите второе число';
        isFirst = false;
        secondValidation = true;
    }

    while(firstValidation) {
        number = prompt(text);
        if (parseInt(number) > 0) {
            firstValidation = false;
        }
        else {
            alert('Please enter only positive numbers');
        }
    }

    while(secondValidation) {
        if (parseInt(number) > (fNumber + 100)) {
            secondValidation = false;
        }
        else {
            alert(`Please enter a number greater than ${fNumber + 100}`);
            number = prompt(text);
        }
    }
    return number;

}
