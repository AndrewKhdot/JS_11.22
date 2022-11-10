createDebounceFunction(ceckfun, 10000);



setTimeout(createDebounceFunction, 5000);


function createDebounceFunction (func, delay) {
    if(arguments.length != 0) {
        validation(func, delay);
        this.counter = 0;
        this.funct = func;
        this.delay = delay;
        console.log(`создание функции ${new Date()}`);
        initiator(++this.counter);
    }
    else {
        console.log(`второй запуск ${counter} ${new Date()}`);
    }

    function initiator (x) {
        console.log(`запуск инициатора ${counter} ${new Date()}`);
        this.count = x;
        function check (currentCounter, globalCounter) {
            if(currentCounter - globalCounter == 0){
                funct();
                console.log(`Конец фунуции ${counter} ${new Date()}`);
            }
            else {
                console.log(`конец первого ${new Date()}`);
            }
        }
        setTimeout(check, delay, count, counter);
    }
    function validation (fun, del) {

    }
}
function ceckfun () {
    console.log(100);
}