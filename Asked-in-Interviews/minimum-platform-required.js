/* https://www.geeksforgeeks.org/minimum-number-platforms-required-railwaybus-station/
# Minimum Platforms Required for Given Arrival and Departure Times

Given two arrays, arr[] and dep[], that represent the arrival and departure times of trains respectively, 
the task is to find the minimum number of platforms required so that no train waits.
*/

// Brute Force Approach without sorting
function minimumPlatformRequired(arr, dep) {
    let ans = 0;

    for(let i=0; i<arr.length; i++) {
        let cnt = 1;
        for (let j = 0; j < arr.length; j++) {
            if (i !== j) {
                // Increment cnt if trains have overlapping
                // time.
                if (arr[i] >= arr[j] && dep[j] >= arr[i]) {
                    cnt++;
                }
            }
            ans = Math.max(ans, cnt);
        }
    }
    return ans;
}

// Approach 2 - Optimised solution
function minimumPlatformRequired2(arr, dep) {
    let ans = 0;
    let n = arr.length;

    arr.sort((a, b) => a - b);
    dep.sort((a, b) => a - b);
    let j=0, count=0;

    for(let i=0; i<n; i++) {
        while(j<n && dep[j] < arr[i]) {
            count--;
            j++;
        }
        count++;
        ans = Math.max(count, ans);
    }

    return ans;
}

let arr = [900, 940, 950, 1100, 1500, 1800], dep = [910, 1200, 1120, 1130, 1900, 2000];

// console.log(minimumPlatformRequired(arr, dep));
console.log(minimumPlatformRequired2(arr, dep));