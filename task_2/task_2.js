function createDebounceFunction (func, delay) {
    let counter = 0;
    validation(func, delay);
    function callbackFunc () {
        counter++;
        let obj = {count: counter};
        initiator.call(obj);
        function initiator () {
            let count = this.count;
            function check () {
                if(count - counter == 0){
                    func();
                }
            }   
            setTimeout(check, delay);
        }
    }
    callbackFunc.func = func;
    callbackFunc.delay = delay;
    return callbackFunc;
    function validation (fun, del) {
        if(typeof fun != 'function') {
            throw new Error;
        }
        if(isNaN(del) || !isFinite(del)) {
            throw new Error;
        }

    }
}