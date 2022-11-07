
function selectFromInterval (arr, start, finish) {

    if (!arrayValidation(arr)) {
        throw new Error();
    }

    let from = Math.min(start, finish);
    let to = Math.max(start, finish);
    let result = [];
    let counter = 0;
    for (let j = from; j < (from + to - from + 1); j++) {
        result[counter] = arr[j];
        counter++;
        
    }

    while ((typeof result[result.length - 1] === 'undefined') ) {
        if(result.length === 0) {
            break;
        }
        else {
            result.length = result.length -1;
        }
    }

    result.reverse();

    while ((typeof result[result.length - 1] === 'undefined') ) {
        if(result.length === 0) {
            break;
        }
        else {
            result.length = result.length -1;
        }
    }
    result.reverse();


    return result;
    function arrayValidation (array) {
        if(!Array.isArray(array)){
            return false;
        }
        
        for (let i = 0; i < array.length; i++) {
            if (typeof array[i] === 'number') {
                return  false;
            }
        }
        return true;
    }
}