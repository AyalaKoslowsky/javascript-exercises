const repeatString = function(word, times) {
    repeatedString = "";

    if (times < 0) {
        return 'ERROR';
    }
    for (i=0; i<times; i++) {
        repeatedString += word;
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
