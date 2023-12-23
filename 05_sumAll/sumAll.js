const sumAll = function(first, last) {
    let sum = 0;

    // returns ERROR with non-number parameters
    if (typeof(first) != 'number' || typeof(last) != 'number') {
        return 'ERROR';
    }
    // returns ERROR with negative numbers
    if (first < 0 || last < 0) {
        return 'ERROR';
    }
    // works with larger number first
    if (last < first) {
        let tmp = first;
        first = last;
        last = tmp;
    }

    for (i=first; i<=last; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
