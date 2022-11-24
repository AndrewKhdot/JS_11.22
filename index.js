let  text;
let calculator;
document.addEventListener("DOMContentLoaded", function() {
    text = document.getElementById('res');
    let calc = document.getElementById('calc');
    calculator = new Calculator;
    let buttonPress = calc.getElementsByClassName('buttons');
    for (const elem of buttonPress) {
        elem.addEventListener('click', op);
    }
  });
  document.addEventListener('keydown', op);

  class Calculator {
    firstNumber;
    secondNumber;
    inputigNumber;
    operation;
    result;

    constructor() {
        this.result = '0';
        this.inputigNumber ={num: 0, string: '0', isPositive: true, isInt: true};
        this.secondNumber = null;
        this.show();
        this.operation = '';
    }

    getValue(event) {
        let value;
        if(typeof event.key === 'undefined') {
            value = event.target.id;
        }
        else {
            value = event.key;
            }
        this.changeStatemant(value);
    }

    changeStatemant(val) {
        if(isNaN(parseInt(val)))  {
            switch (val) {
                case '+':
                    this.changeOperation(val);
                    break;
                case '-':
                    this.changeOperation(val);                    
                    break;
                case '*':
                    this.changeOperation(val);
                    break;
                case '/':
                    this.changeOperation(val);
                    break;
                case 'Enter':
                    this.calculate();
                    break;
                case '=':
                    this.calculate()
                    break;
                case 'c':
                    this.result = '0';
                    this.inputigNumber ={num: 0, string: '0', isPositive: true, isInt: true};
                    this.operation = '';
                    this.firstNumber = undefined;
                    this.secondNumber = null;
                    break;
                case 'Backspace':
                    this.changeNumber(val);
                    break;
                case ',':
                    this.changeNumber(val);
                    break;
                case '.':
                    this.changeNumber(',');
                    break;
                case 'm':
                    this.changeNumber(val);
                    break;
                case '00':
                    this.changeNumber('0');
                    this.changeNumber('0');
                    break;    
                default:
                    this.error();
                    break;
            }
        }
        else {
           this.changeNumber(val); 
        }
        this.show();
    }
    calculate() {
        if(typeof(this.firstNumber) !== 'undefined') {
            this.secondNumber = this.inputigNumber.num;
            this.inputigNumber ={num: 0, string: '0', isPositive: true, isInt: true};
            switch (this.operation) {
                case '+':
                    this.result =this.parseResult(this.firstNumber + this.secondNumber);
                    break;
                case '-':
                    this.result =this.parseResult(this.firstNumber - this.secondNumber);
                    break;
                case '*':
                    this.result =this.parseResult(this.firstNumber * this.secondNumber);
                    break;
                case '/':
                    if(this.secondNumber !== 0) {
                        this.result =this.parseResult(this.firstNumber / this.secondNumber);
                    }
                    else {
                        this.divZeroError();
                    }
                    break;
                default:
                    break;
            }
            this.firstNumber = this.result;
            this.secondNumber = null;
            this.operation = '';
        }
        else {
            this.operation = '';
        }
        this.show();
    }
    
    changeNumber(val) {
        let minStr= 0;
        if(this.inputigNumber.isInt === false) {
            minStr  = minStr + 1;
        }
        if(this.inputigNumber.isPositive === false) {
            minStr  = minStr + 1;
        }
       if(isNaN(parseInt(val))) {
            if(val === 'm') {
                if(this.inputigNumber.string !== '0') {
                    if(this.inputigNumber.isPositive === true) {
                        this.inputigNumber.isPositive = false;
                        this.inputigNumber.string = '-' + this.inputigNumber.string;
                        this.inputigNumber.num = this.inputigNumber.num *(-1);
                        this.result = this.inputigNumber.string;
                    }
                    else {
                        this.inputigNumber.isPositive = true;
                        this.inputigNumber.string = this.inputigNumber.string.slice(1);
                        this.inputigNumber.num = this.inputigNumber.num *(-1);
                        this.result = this.inputigNumber.string;
                    }
                }
                else {
                    this.error();
                }
            }
            else if(val === ',' || val === '.') {
                if((this.inputigNumber.string.length - minStr < 9) && this.inputigNumber.isInt) {
                    this.inputigNumber.isInt = false;
                    this.inputigNumber.string = this.inputigNumber.string + '.';
                    this.result = this.inputigNumber.string;
                    }
                else {
                    this.error();
                    }
            }
            else {
                if(this.inputigNumber.string.length - minStr > 1 && this.inputigNumber.string[this.inputigNumber.string.length - 1] !== ',') {
                    this.inputigNumber.string =this.inputigNumber.string.slice(0, this.inputigNumber.string.length -1);
                    this.result = this.inputigNumber.string ;
                    this.inputigNumber.num = parseFloat(this.inputigNumber.string);
                }
                else if(this.inputigNumber.string[this.inputigNumber.string.length - 1] === ',') {
                    this.inputigNumber.isInt = true;
                    this.inputigNumber.string.length =this.inputigNumber.string.length - 1;
                    this.result = this.inputigNumber.string ;
                    this.inputigNumber.num = parseFloat(this.inputigNumber.string);
                }
                else if(this.inputigNumber.string === '0'){
                    this.error();
                }
                else {
                    this.result = '0';
                    this.inputigNumber ={num: 0, string: '0', isPositive: true, isInt: true};
                }
            }
       }
       else {
        if(this.inputigNumber.string === '0') {
            this.inputigNumber.string = val;
            this.result = this.inputigNumber.string ;
            this.inputigNumber.num = parseFloat(this.inputigNumber.string);
        }
        else if(this.inputigNumber.string.length - minStr < 9) {
            this.inputigNumber.string =this.inputigNumber.string + val;
            this.result = this.inputigNumber.string ;
            this.inputigNumber.num = parseFloat(this.inputigNumber.string);
        }
        else {
            this.error();
        }
       }
    }

    show() {
        text.innerHTML = this.result;
    }

    error() {
        let scrin = document.getElementsByClassName('text')[0];
        scrin.style.backgroundColor = '#ee6565';
        scrin.style.transition= 'background 0.2s ease';
        setTimeout(this.errorSt, 200); 
    }

    errorSt() {
        let scrin = document.getElementsByClassName('text')[0];
        scrin.style.backgroundColor = '#F8F8F8';
        scrin.style.transition = 'background 0.2s ease';
        scrin.style.borderRadius = '10px';
    }

    changeOperation(val) {
        if(this.operation !== '') {
            if(this.inputigNumber.num !== 0) {
                this.calculate();
            }
        }
        else if(this.inputigNumber.num !== 0) {
            this.firstNumber = this.inputigNumber.num;
            this.inputigNumber ={num: 0, string: '0', isPositive: true, isInt: true};
            this.result = '0';        
        }
        this.operation = val;
    }

    parseResult(num) {
        let int =num - (num % 1);
        int = '' + int;
        let acc = 9 - int.length;
        let result = +num.toFixed(acc);
        return result;
    }

    divZeroError() {
        alert('Divide by zero!');
        this.changeStatemant('c');
    }
}


function op(event) {
    calculator.getValue(event);
}
