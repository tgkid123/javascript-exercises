const sumAll = function(a,b) {
    let sum=0;
    if (!Number.isInteger(a) || !Number.isInteger(b) ) {
        return "ERROR";
    }
    if (a<0 || b<0) {
        return "ERROR";
    }
    if (a<b) {
        let min = a;
        let max = b;
        for (i=min;i<=max;i++) {
            sum = sum + i;
        }
        return sum;
    }
    if (a>b) {
        let min = b;
        let max = a;
        for (i=min;i<=max;i++) {
            sum = sum + i;
        }
        return sum;
    }
    if (a=b) {
        return 0;
    }
};

// Do not edit below this line
module.exports = sumAll;
