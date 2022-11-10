Array.prototype.customFilter = function (func, obj) {
    if(typeof func != 'function') {
        throw new Error;
    }
    if(arguments.length >= 2) {
        if((typeof obj != 'object') || (typeof obj === 'object'  && !obj)) {
          
            throw new Error;
        }
    }
    let copyArray = [];

    for (let i = 0; i < this.length; i++) {
        if(func.call(obj, this[i], i, this)) {
        copyArray.push(this[i]);
    }
}
    return copyArray;
}

