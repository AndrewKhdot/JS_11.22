class LinkedList {
    #last;   
    #getFirstElem(obj) {
        let result;
        if(obj.prev === null) {
            result = obj;
        }
        else {
            result = this.#getFirstElem(obj.prev);
        }
        return result;
    } 
    #checkItem(obj, el, isE) {
        let isEq = isE;
        let result;
        if(obj.val === el || isEq) {
            result = true;
        }
        else {
            result = false;
        }
        if(obj.prev !== null) {
            result = this.#checkItem(obj.prev, el, isEq || result);
        }
        return result || isEq;
    }
    #addElinArr(elem, arr) {
        let array = arr;
        if(elem.prev === null) {
            array.push(elem.val);
        }
        else {
            array.push(elem.val)
            this.#addElinArr(elem.prev, array);
        }
        return array;
    }

    constructor() {
        this.#last = null;
    }
    
    append(elem) {
        if(this.#last === null) {
            let newObj = {};
            newObj.val = elem;
            newObj.prev = null;
            this.#last = newObj;
        }
        else {
            let newObj = {};
            newObj.val = elem;
            newObj.prev = this.#last;
            this.#last = newObj;
        }
    }

    find(elem) {
        let result;
        let isEquals;
        if(this.#last === null) {
            return null;
        } 
        isEquals = this.#last.val === elem;
        result = this.#checkItem(this.#last, elem, isEquals);
        result = result || isEquals;
        if(result){
            return elem;
        }
        else {
            return null;
        }
    }

    prepend(elem){
        if(this.#last === null) {
            this.append(elem);
        }
        else {
            let newObj = {};
            newObj.val = elem;
            newObj.prev = null;
            let fe = this.#getFirstElem(this.#last);
            fe.prev = newObj;
        }
    }
  
    toArray() {
        let arr = [];
        if(this.#last === null) {
            return arr;
        }
        else {
            arr = this.#addElinArr(this.#last, arr);
        }
        return arr;
    }
    
    static fromIterable(iterable) {
        let listResult = new LinkedList;
        if(typeof iterable[Symbol.iterator] ==='undefined') {
            throw new Error('Not iterable');
        }
        else {
            for (const key in iterable) {
                listResult.append(iterable[key]);            
            }
        }
        return listResult;
    }
}


class Stack {
    #last;
    #currentLength;
    #maxLength;
    #chechLength(len) {
        if(len < 0) {
            this.#currentLength = 0;
            throw new Error('Empty stack');
        }
        if(this.#maxLength - len < 0) {
            this.#currentLength--;
            throw new Error('Limit exceeded');
        }
    }
    #addElinArr(elem, array) {
        if(elem.prev === null) {
            array.push(elem.val);
        }
        else {
            array.push(elem.val)
            this.#addElinArr(elem.prev, array);
        }
        return array;
    }
  
    constructor(maxlength) {
        this.#last = null;
        if(typeof maxlength !== 'number' || isNaN(maxlength) || !isFinite(maxlength)) {
            throw new Error('Invalid limit value');
        }
        else if(maxlength < 0) {
            throw new Error('Invalid limit value');
        }
        else if(typeof maxlength === 'undefined') {
            this.#maxLength = 10;
        }
        else {
            this.#maxLength = maxlength;
        }
        this.#currentLength = 0;
    }

    push(elem) {
        this.#chechLength(++this.#currentLength);
        if(this.#last === null) {            
            let newObj = {};
            newObj.val = elem;
            newObj.prev = null;
            this.#last = newObj;
        }
        else {
            let newObj = {};
            newObj.val = elem;
            newObj.prev = this.#last;
            this.#last = newObj;
        }
    }

    pop() {
        this.#chechLength(--this.#currentLength);
        if(this.#last.prev === null) {
            this.#last = null;
        }
        else {
            this.#last = this.#last.prev;
        }
    }

    peek() {
        return this.#last.val;
    }

    isEmpty() {
        if(this.#currentLength === 0){
            return true;
        }
        else {
            return false;
        }
    }

    toArray() {
        let arr = [];
        if(this.#last === null) {
            return arr;
        }
        else {
           arr = this.#addElinArr(this.#last, arr);
        }
        return arr;
    }

    static fromIterable(iterable) {
        let stackResult = new Stack;
        if(typeof iterable[Symbol.iterator] ==='undefined') {
            throw new Error('Not iterable');
        }
        else {
            for (const key in iterable) {
                stackResult.push(iterable[key]);            
            }
        }
        return stackResult;
    }
}





class Car {
    #brand;
    #model;
    #yearOfManufacturing;
    #maxSpeed;
    #maxFuelVolume;
    #fuelConsumption;
    #damage;
    #currentFuelVolume;
    #isStarted;
    #health;
    #mileage;
    #numValidation(num) {
        let isValidNum;
        if(typeof num === 'number') {
            if(!isNaN(num) && isFinite(num)){
                if(num >= 0) {
                    isValidNum = true;
                }
                else {
                    isValidNum = false;
                }
            }
            else {
                isValidNum = false;
            }
        }
        else {
            isValidNum = false;
        }
        return isValidNum;
    }
    #stringValidation(str) {
        let isValidStr;
        if(typeof str === 'string') {
            isValidStr = true;
        }
        else {
            isValidStr = false;
        }
        return isValidStr;
    }

    constructor() {
        this.#isStarted = false;
        this.#currentFuelVolume = 0;
        this.#yearOfManufacturing = 1950;
        this.#brand = '';
        this.#model = '';
        this.#maxSpeed = 100;
        this.#maxFuelVolume = 20;
        this.#fuelConsumption = 1;
        this.#damage = 1;
        this.#mileage = 0;
        this.health = 100;
    }

    get brand() {
        return this.#brand;
    }
    set brand(val) {
        if(this.#stringValidation(val)) {
            if((val.length >= 1) && (val.length <= 50)) {
                this.#brand = val;
            }
            else {
                throw new Error('Invalid brand name');  
            }       
        }
        else {
            throw new Error('Invalid brand name');
        }
    }
    get model() {
        return this.#model;
    }
    set model(val) {
        if(this.#stringValidation(val)) {
            if((val.length >= 1) && (val.length <= 50)) {
                this.#model = val;
            }
            else {
                throw new Error('Invalid model name');  
            }       
        }
        else {
            throw new Error('Invalid model name');
        }
    }
    get yearOfManufacturing() {
        return this.#yearOfManufacturing;
    }
    set yearOfManufacturing(val) {
        if(this.#numValidation(val)) {
            if((val >= 1950) && (val <= 2022)) {
                this.#yearOfManufacturing = val;
            }
            else {
                throw new Error('Invalid year of manufacturing');  
            }       
        }
        else {
            throw new Error('Invalid year of manufacturing');
        }
    }
    get maxSpeed() {
        return this.#maxSpeed;
    }
    set maxSpeed(val) {
        if(this.#numValidation(val)) {
            if((val >= 100) && (val <= 330)) {
                this.#maxSpeed = val;
            }
            else {
                throw new Error('Invalid max speed');  
            }       
        }
        else {
            throw new Error('Invalid max speed');
        }
    }
    get maxFuelVolume() {
        return this.#maxFuelVolume;
    }
    set maxFuelVolume(val) {
        if(this.#numValidation(val)) {
            if((val >= 20) && (val <= 100)) {
                this.#maxFuelVolume = val;
            }
            else {
                throw new Error('Invalid max fuel volume');  
            }       
        }
        else {
            throw new Error('Invalid max fuel volume');
        }
    }
    get fuelConsumption() {
        return this.#fuelConsumption;
    }
    set fuelConsumption(val) {
        if(this.#numValidation(val)) {
            if(val > 0) {
                this.#fuelConsumption = val;
            }
            else {
                throw new Error('Invalid fuel consumption');  
            }       
        }
        else {
            throw new Error('Invalid fuel consumption');
        }
    }
    get damage() {
        return this.#damage;
    }
    set damage(val) {
        if(this.#numValidation(val)) {
            if((val >= 1) && (val <= 5)) {
                this.#damage = val;
            }
            else {
                throw new Error('Invalid damage');  
            }       
        }
        else {
            throw new Error('Invalid damage');
        }
    }
    get currentFuelVolume() {
        return this.#currentFuelVolume;
    }
    get isStarted() {
        return this.#isStarted;
    }
    get health() {
        return this.#health;
    }
    get mileage() {
        return this.#mileage;
    }

    start() {
        if(this.#isStarted) {
            throw new Error('Car has already started');
        }
        else {
            this.#isStarted = true;
        }
    }

    shutDownEngine() {
        if(this.#isStarted) {
            this.#isStarted = false;
        }
        else {
            throw new Error('Car hasn\'t started yet');
        }
    }

    fillUpGasTank(val) {
        if(!this.#numValidation(val) || val === 0) {
            throw new Error('Invalid fuel amount');
        }
        else if(this.#maxFuelVolume - this.#currentFuelVolume - val < 0) {
            throw new Error('Too much fuel');
        }
        else if(this.#isStarted) {
            throw new Error('You have to shut down your car first');
        }
        else {
            this.#currentFuelVolum =  this.#currentFuelVolume + val;
        }
        return this.#currentFuelVolume;
    }

    drive(speed, time) {
        if(!this.#numValidation(speed) || val === 0) {
            throw new Error('Invalid speed');
        }
        if(!this.#numValidation(time) || val === 0) {
            throw new Error('Invalid duration');
        }

    }

    repair() {

    }

    getFullAmount() {

    }
}

