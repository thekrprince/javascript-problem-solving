/* Count pairs with absolute difference equal to k
Given an array arr[] and a positive integer k, 
the task is to count all pairs (i, j) such that i < j and absolute value of (arr[i] – arr[j]) is equal to k. 

Input: arr[] = [1, 4, 1, 4, 5], k = 3
Output: 4
Explanation: There are 4 pairs with absolute difference 3, the pairs are [1, 4], [1, 4], [1, 4] and [4, 1]


Input: arr[] = [8, 16, 12, 16, 4, 0], k = 4
Output: 5
Explanation: There are 5 pairs with absolute difference 4, the pairs are [8, 12], [8, 4], [16, 12], [12, 16], [4, 0].

Link: https://www.geeksforgeeks.org/count-pairs-difference-equal-k/
*/

// Brute Force Solution - would work for smaller input
function countPairs(arr, k) {
    let pairs = [];
    for(let i=0; i<arr.length - 1; i++) {
        let j = i + 1;
        while (j < arr.length) {
            const diff = Math.abs(arr[i] - arr[j]);
            if(diff=== k) {
                pairs.push([arr[i], arr[j]])
            }
            j++;
        }
    }
    return pairs.length;
}

let arr1 = [1, 4, 1, 4, 5];
let arr2 = [8, 16, 12, 16, 4, 0];
const res = countPairs(arr1, 3);
// console.log(res);
const res1 = countPairs(arr2, 4);
// console.log(res1);

// Optimised Solution
function countPairsOptimised(arr, k) {
    let freq = {};
    let count = 0;

    for(let i=0; i<arr.length; i++) {
        console.log("-----------------------------");
        console.log("i", i);
        console.log("arr[i]", arr[i]);
        console.log("(arr[i] + k) in freq",(arr[i] + k) in freq);
        console.log("(arr[i] - k) in freq",(arr[i] - k) in freq);
        if((arr[i] + k) in freq) {
            count += freq[arr[i] + k];
            console.log("freq[arr[i] + k]", freq[arr[i] + k]);
        }

        if((arr[i] - k) in freq) {
            count += freq[arr[i] - k]
            console.log("freq[arr[i] - k]", freq[arr[i] - k]);
        }

        console.log("count", count);

        freq[arr[i]] = (freq[arr[i]] || 0) + 1;
        console.log(freq);
    }
    return count;
}

const res2 = countPairsOptimised(arr1, 3);
console.log(res2);
const res3 = countPairsOptimised(arr2, 4);
console.log(res3);