Array.prototype.customFilter = function (func, obj) {
    
    let copyArray = [];

    for (let i = 0; i < this.length; i++) {
        if(func.call(obj, this[i], i, this)) {
        copyArray.push(this[i]);
    }
}
    return copyArray;
}

let nAr = [1, 2, 3, 4, 5, 6];

function checkFunc (element) {
    if(element > 2) {
        return true
    }
    else {
        return false
    }
}

function checkFunc2 (element, index) {
    if((element > 2) || index % 2 ===0) {
        return true
    }
    else {
        return false
    }
}

function checkFunc3 (element, index, array) {
    if((element > 4) || index % 2 ===0 || array.length % element === 0) {
        console.log(this.a);
        return true
    }
    else {
        return false
    }
}
let obj = {a: 1, b:2};


let checkAr = nAr.customFilter(checkFunc3, obj);
console.log(checkAr);