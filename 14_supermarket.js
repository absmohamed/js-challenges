/*
There is a queue for the self-checkout tills at the supermarket. 
Your task is write a function to calculate the total time required for 
all the customers to check out!

The function has two input variables:
    customers: an array of positive integers 
            representing the queue. Each integer represents a customer, 
            and its value is the amount of time they require to check out.
    n: a positive integer, the number of checkout tills.

The function should consider each person in order, and add them to the 
'smallest' line at that time (the line with the least total time).

The function should return an integer, the time it takes for all lines to empty.

For example, if the input queue is [1,2,3,4,5,6] and there are 2 tills,
the queue would be separated as follows:
till1       till2
1           2
3           4
5           6
---         ---
9           12

So this would take 12 total time, since all customers will be served when
the last customer at till2 is served.

Check your solutions with npm test
*/


// Returns the queue time for all customers given number of tills
function queueTime(customers, n) {
    //if queue empty
    if (customers.length === 0) {return 0;}
    let currentQueue = customers;
    let tillArr = [];
    let totalTime = 0;
    //populate array with n zeros where zero represents empty till
    for (let i = 0; i< n; i++){
        tillArr.push(0);
    }
    do {
        //if free space in till, put next person from queue in that till
        for (let i = 0; i<tillArr.length; i++){
        if (tillArr[i] === 0){
            tillArr[i]=currentQueue[0];
            //remove the customer from queue
            currentQueue.shift();
        }
        //reduce time remaining of all customers currently in tills
        if (tillArr[i] > 0){
            tillArr[i] -= 1;
        }
        }
    totalTime++;
    } while (currentQueue.length > 0);
    let longestRemaining = 0;
    //add longest remaining time still in till to result
    for (let i = 0; i<tillArr.length; i++){
        if (tillArr[i] > longestRemaining){longestRemaining = tillArr[i];}
    }
    return totalTime + longestRemaining;
}       
console.log(queueTime([1,2,3,4,5,6]));

module.exports = {
    queueTime
}