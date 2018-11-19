
var isValid = function(x) {
    let validDict = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    };
    let charList = [];
    
    // validate input
    if(x == null || x == undefined)
        return false;
    else

        for(var i = 0; i<x.length; i++){
            let currentChar = x.charAt(i);
            let topElement;
            if(validDict[currentChar] !== undefined){
                topElement = (charList.length===0) ? '#' : charList.pop();
                if(topElement !== validDict[currentChar])
                    return false;
            }else{
                charList.push(currentChar);
            }
        }
        return charList.length === 0;

    };

// Test with:
//   console.log(isValid("[()()({}{]})]"));
//   console.log(isValid("[()]"));

