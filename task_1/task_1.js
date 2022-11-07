
function makeDeepCopy (object) { 
    if((typeof object === 'object') && !object) {
        throw new Error();
    }
    else if (typeof object != 'object'){
        throw new Error();
    }
    else if (Array.isArray(object)){
        throw new Error();
    }
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
                    if((typeof obj[key] === 'object') && !obj[key]) {
                        copyArray[i] = copyFields(obj[i]); }
                    else {
                        copyArray[i] = obj[i];
                    }
                }
                return copyArray; 
            }
            else if(Object.getPrototypeOf(obj) === Map.prototype) {
                let copyMap = new Map();
                for (let key of obj.keys()) {
                    if((typeof obj[key] === 'object') && !obj[key]) {
                        let val = copyFields(obj[key]);
                        copyMap.set(key, val);
                         }
                        else {
                        copyMap.set(key, obj[key]);
                        }
                  }
                  
                return copyMap; 
            }
            else if(Object.getPrototypeOf(obj) === Set.prototype) {
                let copySet = new Set(obj);
                  
                return copySet; 
            }

            else {
                objectsCopy[key] = obj[key];
            }
            
        }
        return objectsCopy;
    }
}