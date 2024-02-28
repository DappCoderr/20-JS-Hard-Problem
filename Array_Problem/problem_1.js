/*
1. Rotate Array:
Statement:
Write a function to rotate an array to the right by a given number of steps.

Input:

An array of integers arr.
An integer k representing the number of steps to rotate.
Output:

Return the rotated array.
Example:

javascript
Copy code
rotateArray([1, 2, 3, 4, 5], 2);
Output: [4, 5, 1, 2, 3]

*/

function rotateArray(arr, n) {
  var length = arr.length;
  while (n > 0) {
    arr.unshift(arr[length - 1]);
    arr.pop();
    n--;
  }
  return arr;
}

console.log(rotateArray([5, 2, 3, 4, 1], 2));
