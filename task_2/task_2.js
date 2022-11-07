let t1 = [[0, 1, 2, 3, 4, 5], 2, 4];

let r = selectFromInterval(...t1);
console.log(r);
function selectFromInterval (arr, start, finish) {

    let from = Math.min(start, finish);
    let to = Math.max(start, finish);
    let result = [];
    let counter = 0;
    for (let j = from; j < (from + to - from + 1); j++) {
        result[counter] = arr[j];
        counter++;
        
    }
    return result;
    function arrayValidation (array) {
        for (let i = 0; i < array.length; i++) {
            if (isNaN(array[i])) {
                return  false;
            }
        }
        return true;
    }
}