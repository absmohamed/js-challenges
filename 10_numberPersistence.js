/*
Write a function, "persistence", that takes in a positive parameter "num"
and returns its multiplicative persistence, which is the number of times
you must multiply the digits in num until you reach a single digit.

Examples:
persistence(39) === 3 
Because 3*9 = 27, 2*7 = 14, 1*4=4 and 4 has only one digit

persistence(999) === 4 
Because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and 1*2 = 2
*/

function persistence(num) {
    let counter = 0;
    let arr = num.toString().split('');

    function add() {
        let sum = 1;

        for (i = 0; i < arr.length; i++) {
            sum = sum * arr[i]
        }
        counter += 1
        arr = sum.toString().split('');

        if (sum > 9) {
            return add();
        }
        else {
            return counter;
        }
    }
    return add();
}
console.log(persistence(25));
module.exports = {
    persistence
}