const repeatString = function(string,num) {
    if(num>=0) {
        let repeatedString = "";
    for (let i = 0; i < num; i++) {
        repeatedString = repeatedString + string;
    }
return repeatedString;
    }
    else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = repeatString;
