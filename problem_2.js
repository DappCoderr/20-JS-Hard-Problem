/*
Problem Name - Word Frequency Counter
Problem Statement - 
Create a program that takes a sentence as input and outputs a 
frequency count of each word in the sentence.

Input: "This is a sample sentence. This sentence is a sample."

Output: { This: 2, is: 2, a: 2, sample: 2, sentence: 2 }
*/
var counter = 0;
function wordFrequencyCounter(str) {
  // trim remove the blank space
  var trimSen = str.trim();
  //   if string is empty it will return 0;
  if (!trimSen) {
    return 0;
  }
  //split the trim sentence into an array.
  // split return the array.
  var sen = trimSen.split(/\s+/);
  //empty object
  var frequency = {};
  //iterate over array
  for (let i = 0; i < sen.length; i++) {
    //convert to lowerCase
    var word = sen[i].toLowerCase();
    //add element to object. If the sentence is added then increase the counter
    // otherwise add one to counter.
    if (frequency[word]) {
      frequency[word]++;
    } else {
      frequency[word] = 1;
    }
  }
  return frequency;
}

console.log(
  wordFrequencyCounter("This is a sample sentence. This sentence is a sample. ")
);
