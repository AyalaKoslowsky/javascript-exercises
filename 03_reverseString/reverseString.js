const reverseString = function(word) {
    len = word.length;
    revWord = "";
    for (i=len; i>0; i--) {
        revWord += word.charAt(i-1);
    }
    return revWord;
};

// Do not edit below this line
module.exports = reverseString;
