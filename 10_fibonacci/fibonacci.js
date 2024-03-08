const fibArray = [1, 1];

for(let i = 1; fibArray.length < 25; i++) {
    let oldNum = fibArray[fibArray.length - 2];
    let newNum = fibArray[fibArray.length - 1];
    fibArray.push(oldNum + newNum);
}

const fibonacci = function(n) {

    if (n == 0){
        return 0;
    } else if (n < 0){
        return "OOPS"
    } else {
        return fibArray[n - 1];
    };
    
};

// Do not edit below this line
module.exports = fibonacci;
