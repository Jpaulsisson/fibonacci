// Fibonacci Finder
// Create a fibFinder() function that finds the nth number in the Fibonacci sequence. As a reminder, the Fibonacci sequence is a mathematical sequence that begins with 0 and 1, with each following term being the sum of the two previous terms.

// For example, the first two terms of the sequence are represented by fibFinder(0) and fibFinder(1), which return 0 and 1, respectively. fibFinder(6) should return 8.

// This challenge was reported to have been asked in interviews at many top companies, including Google. If you’ve covered the material in Pass the Technical Interview with JavaScript or an equivalent, you should be able to solve this challenge. If you have trouble, try refreshing your knowledge with its Dynamic Programming article.


/////// first attempt ////////
function fibFinder(n) {
  let sum = 1;
  let prevSum = 0;
  let answer;                                 /////// first time solving a dynamic programming problem without a hitch.
  let i = 0;                                  //// feels really good
  while (i < n) {
    answer = sum + prevSum;
    sum = prevSum;
    prevSum = answer;
    i++;
  }
  return answer;
}

console.log(fibFinder(9))