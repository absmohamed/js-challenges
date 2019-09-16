/*
Given an array of numbers, determine whether the sum
of all of the numbers is odd or even.

Give your answer in string format as 'odd' or 'even'.

If the input array is empty consider it as: [0] (array with a zero).

*/

function oddOrEven(array) {
    //enter code here
    let count = 0
    if (array.length === 0) {
        return "even"
    }

    for(let a = 0; a < array.length; a++) {
        count += array[a]
    }

    if(count % 2 === 0) {
        return "even"
    } else {
        return "odd"
    }
}

console.log(oddOrEven([5, 10, 15 ,34]));
console.log(oddOrEven([4, 5, 6]));
console.log(oddOrEven([]));

module.exports = {oddOrEven};
