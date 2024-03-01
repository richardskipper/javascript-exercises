const repeatString = function(word, times) {
    if (times < 0) {
        return "ERROR";
    }

    let repeat = "";

    for (let i=0; i < times; i++) {
        repeat += word;
    }

    return repeat;
};

// Do not edit below this line
module.exports = repeatString;
