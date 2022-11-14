function concatStrings(str, sep) {
    let result = '';
    let separator = '';
    let isValid = true;
    if(validation(str)){
        result = result + str;
    }
    else {
        isValid = false;
    }
    if(validation(sep)) {
        separator = sep;
    }

    return cocatStr;

    function cocatStr(string) {
        if(arguments.length === 0) {
            return  result;
        }
        else {
            if(validation(string) && isValid){
                result = result + separator + string;
            }
            else{
                isValid = false;
            }
            return cocatStr;
        }
    }

    function validation(str) {
        if(typeof str === 'string'){
            return true;
        }
        else {
            return false;
        }
    }

}