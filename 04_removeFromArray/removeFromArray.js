const removeFromArray = function() {
    newArray = arguments[0];
    for (i=1; i<arguments.length; i++) {
        newArray = newArray.filter(x => x !== arguments[i]);
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
