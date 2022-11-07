let symbols = prompt('Enter a string no longer than three symbols');
let num = prompt('Enter a positive integer less than 10');

if(NumValidation(num) && StringValidation(symbols)) {
    num = parseInt(num);
    console.log(CreatResult(symbols, num));
}
else {
    console.log('Incorrect input!');
}
function numValidation (num) {  
    return !isNaN(num) && (parseFloat(num) > 0) && (parseFloat(num) <= 10);
}

function tringValidation (str) {
    return (str.length < 4) && (str.length > 0);
}

function creatResult (val, num) {
    let result = '';
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            result = result + val + ' ';
        }
        result = result + '\n';
        
    }
    return result;
}
