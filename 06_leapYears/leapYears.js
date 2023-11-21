const leapYears = function(rok) {
if (rok % 400 == 0) {
    return true;
}
else if (rok % 4 == 0 && rok % 100 !== 0)
{
    return true;
}
else {
    return false;
}
};

console.log (leapYears(2100))

// Do not edit below this line
module.exports = leapYears;
