/*
Problem Name - Longest Consecutive Sequence:

Problem Statement - Write a function that takes an array of integers and 
returns the length of the longest consecutive sequence of numbers.

Input: [100, 4, 200, 1, 3, 2]

Output: 4
*/

function longestConsecutiveSequence(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        count++;
      }
    }
  }
  return count;
}

var arr = [204, 201, 100, 200, 1, 3, 202, 2, 203];

console.log(longestConsecutiveSequence(arr));
