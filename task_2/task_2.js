let deb = createDebounceFunction(ceckfun, 10000);

deb();

setTimeout(deb, 1000);
setTimeout(deb, 2000);
setTimeout(deb, 3000);


function createDebounceFunction (func, delay) {
    let counter = 0;
    function callbackFunc () {
        counter++;
        let obj = {count: counter};
        initiator.call(obj);
        function initiator () {
            console.log(`запуск инициатора ${this.count} ${new Date()}`);
            let count = this.count;
            function check () {
                if(count - counter == 0){
                    func();
                    console.log(`Конец фунуции ${count} ${new Date()}`);
                }
                else {
                    console.log(`конец инициатора${count} ${new Date()}`);
                }
            }   
            setTimeout(check, delay);
        }
    function validation (fun, del) {

    }
}
    callbackFunc.func = func;
    callbackFunc.delay = delay;
    return callbackFunc;
}

function ceckfun () {
    console.log(100);
}