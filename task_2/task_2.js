let deb = createDebounceFunction(ceckfun, 10000);

deb();

setTimeout(deb, 5000);


function createDebounceFunction (func, delay) {
    function callbackFunc () {
        initiator(++counter);
/*     if(arguments.length != 0) {
        validation(func, delay);
        this.counter = 0;
        this.funct = func;
        this.delay = delay;
        console.log(`создание функции ${new Date()}`);
        initiator(++this.counter);
    }
    else {
        initiator(++this.counter);
        console.log(`второй запуск ${counter} ${new Date()}`);
    } */

    function initiator (x) {
        console.log(`запуск инициатора ${counter} ${new Date()}`);
        this.count = x;
        function check (currentCounter, globalCounter) {
            if(currentCounter - globalCounter == 0){
                func();
                console.log(`Конец фунуции ${counter} ${new Date()}`);
            }
            else {
                console.log(`конец первого ${counter} ${new Date()}`);
            }
        }
        setTimeout(check, delay, count, counter);
    }
    function validation (fun, del) {

    }
}
    let obj = {
        func: func,
        counter : 0,
        delay :delay
    }
    return callbackFunc.call(obj);
}

function ceckfun () {
    console.log(100);
}