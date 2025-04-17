// Merge Two Sorted Arrays

function mergeTwoSortedArrays(nums1, m, nums2, n) {
  let last = m + n - 1;

  while (m - 1 >= 0 && n - 1 >= 0) {
    console.log("compare", nums1[m - 1], nums2[n - 1]);
    if (nums1[m - 1] > nums2[n - 1]) {
      nums1[last] = nums1[m - 1];
      m -= 1;
    } else {
      nums1[last] = nums2[n - 1];
      n -= 1;
    }
    last -= 1;
  }

  while (n - 1 >= 0) {
    nums1[last] = nums2[n - 1];
    n -= 1;
    last--;
  }

  console.log(nums1);
}

let arr1 = [1, 2, 3, 0, 0, 0];
let arr2 = [2, 5, 6];
mergeTwoSortedArrays(arr1, 3, arr2, 3);

let arr3 = [4, 5, 6, 0, 0, 0];
let arr4 = [1, 2, 3];
mergeTwoSortedArrays(arr3, 3, arr4, 3);
