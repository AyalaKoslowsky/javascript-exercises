const leapYears = function(year) {
    // leap years are years divisible by four.
    if (year % 4 != 0) {
        return false;
    }

    // years divisible by 100 are not leap years unless they are divisible by 400.
    else if (year % 100 == 0) { //divided by 4, 100
        if (year % 400 == 0) {
            return true;
        }
        else {
            return false;
        }
    }
    else { // divided by 4 and not by 100
        return true;
    }
};

// Do not edit below this line
module.exports = leapYears;
