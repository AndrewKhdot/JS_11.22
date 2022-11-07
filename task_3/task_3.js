let iterebal = createIterable(1, 5);

for (const iterator of object) {
    console.log(iterator.value)
}

function createIterable (from, to) {
    let iterableObject = {};
    iterableObject.from= from;
    iterableObject.to = to;
    iterableObject[Symbol.iterator] = function () {
        
        let returnObject = {};
        returnObject.current = this.from;
        returnObject.last = this.to;
        returnObject.next = function () {
            if (this.current <= this.last) {
                return {done: false, value : current++}
            }
            else {
                return {done: true}
            }
        }
        return returnObject;
    }
    return iterableObject;
}