// Median of Two Sorted Arrays
// Leet code problem - https://leetcode.com/problems/median-of-two-sorted-arrays/description/

/* 
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

 

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
*/

var findMedianSortedArrays = function (nums1, nums2) {
  var newArray = [];
  let i = 0;
  let j = 0;
  while (i < nums1.length) {
    newArray.push(nums1[i]);
    i++;
  }
  while (j < nums2.length) {
    newArray.push(nums2[j]);
    j++;
  }
  newArray.sort((x, y) => x - y);
  if (newArray.length % 2 != 0) {
    let median = Math.floor(newArray.length / 2);
    return Math.floor(newArray[median]);
  } else {
    let index = newArray.length / 2;
    let index1 = index - 1;
    let newValue = newArray[index] + newArray[index1];
    return newValue / 2;
  }
};

console.log(findMedianSortedArrays([1, 3], [2]));
