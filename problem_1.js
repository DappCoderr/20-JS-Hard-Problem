/*
Problem Name - Longest Consecutive Sequence:

Problem Statement - Write a function that takes an array of integers and 
returns the length of the longest consecutive sequence of numbers.

Input: [100, 4, 200, 1, 3, 2]

Output: 4
*/

function longestConsecutiveSequence(arr) {
  if (arr.length === 0) {
    return 0;
  }
  //sort the array using comparator function
  let count = 1;
  let max_count = -1;
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] - arr[i] === 1) {
      count++;
    } else {
      count = 1;
    }
    max_count = Math.max(max_count, count);
  }
  return max_count;
}

var arr = [0, 1, 1, 1, 1, 2];

console.log(longestConsecutiveSequence(arr));
