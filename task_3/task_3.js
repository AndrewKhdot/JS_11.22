
function createIterable (from, to) {
    if(typeof from != 'number' || typeof to != 'number' || arguments.length <= 1 || to - from <= 0 ) {
        throw new Error();
    }
    let iterableObject = {};
    iterableObject.from= from;
    iterableObject.to = to;
    
    iterableObject[Symbol.iterator] = function () {
        
        let returnObject = {};
        returnObject.current = this.from;
        returnObject.last = this.to;
        returnObject.next = function () {
            if (this.current <= this.last) {
                return {done: false, value : this.current++}
            }
            else {
                return {done: true}
            }

        }
        return returnObject;
    }
    return iterableObject;
}