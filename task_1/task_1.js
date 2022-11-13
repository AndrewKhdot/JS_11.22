console.log(concatStrings('first')('second')('third')());


function concatStrings(str) {
    let result = '';
    result = result + str;
  

    function cocatStr(string) {
        if(arguments.length === 0) {
            return  result;
        }
        else {
            result = result + string;
            return cocatStr;
        }
    }

}