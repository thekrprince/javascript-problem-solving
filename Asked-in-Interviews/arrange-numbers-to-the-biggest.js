/* Arrange given numbers to form the biggest number
Given an array of non-negative integers arr[], the task is to arrange them in a manner such that after concatenating them in order,
it results in the largest possible number. Since the result may be very large, return it as a string.

Input: arr[] =  [3, 30, 34, 5, 9]
Output: “9534330”
Explanation: The arrangement [9, 5, 34, 3, 30], gives the largest value “9534330”.


Input: arr[] =  [54, 546, 548, 60]
Output: “6054854654”
Explanation: The arrangement [60, 548, 546, 54], gives the largest value “6054854654”.

Link: https://www.geeksforgeeks.org/given-an-array-of-numbers-arrange-the-numbers-to-form-the-biggest-number/
*/
function compareStr(s1, s2) {
    return (s1 + s2) > (s2 + s1)
}

function arrangeNumbers(arr) {

    let res = [];
    let numbers = arr.map(String);
    // let numbers = arr.map(el => el.toString());
    
    numbers.sort((s1, s2) => compareStr(s1, s2) ? -1 : 1);

    if(numbers[0] === "0") {
        return 0;
    }

    return numbers.join('');

}

const res1 = arrangeNumbers([3, 30, 34, 5, 9])
console.log(res1);
const res2 = arrangeNumbers([54, 546, 548, 60]);
console.log(res2);