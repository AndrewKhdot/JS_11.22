console.log('start');
let obj1 = {a: 1, b: 'a', c: [1, 2, {a:1, b: 'q'}]};
let obj2 = {};
let obj3 = {};
let obj4 = {};

let cop = makeDeepCopy(obj1);

console.log('finish');

function makeDeepCopy (object) { 
    

    return copyFields(object);

    function copyFields(obj) {
    let objectsCopy = {};
    let objectKeys = Object.keys(obj);
        for (let key of objectKeys) {
            if ((typeof obj[key] === 'object') && obj[key] && !Array.isArray(obj)) {
                objectsCopy[key] = copyFields(obj[key]);
            }
            else if(Array.isArray(obj)) {
                let copyArray = [];
                for (let i = 0; i < obj.length; i++) {
                    copyArray[i] = obj[i]; 
                }
                return copyArray; 
            }
            else {
                objectsCopy[key] = obj[key];
            }
            
        }
        return objectsCopy;
    }
    console.log('finish');
}