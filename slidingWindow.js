function shortestSubstringContainingPattern(str, pattern) {
  const patternSet = new Set(pattern);
  const charFrequency = new Map();

  let windowStart = 0;
  let minLength = Infinity;
  let substrStart = 0;

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];

    if (patternSet.has(rightChar)) {
      charFrequency.set(rightChar, (charFrequency.get(rightChar) || 0) + 1);
    }

    // Contract the window
    while (charFrequency.size === patternSet.size) {
      if (windowEnd - windowStart + 1 < minLength) {
        minLength = windowEnd - windowStart + 1;
        substrStart = windowStart;
      }

      const leftChar = str[windowStart];
      if (patternSet.has(leftChar)) {
        charFrequency.set(leftChar, charFrequency.get(leftChar) - 1);
        if (charFrequency.get(leftChar) === 0) {
          charFrequency.delete(leftChar);
        }
      }

      windowStart++;
    }
  }

  return minLength === Infinity
    ? ""
    : str.substring(substrStart, substrStart + minLength);
}

const inputString = "ADOBECODEBANC";
const pattern = "ABC";

const result = shortestSubstringContainingPattern(inputString, pattern);
console.log(
  `Shortest substring containing all characters of the pattern: ${result}`
);

// The Sliding Window pattern can also be applied to find a substring within a string efficiently. Here's how you can solve the problem of finding the shortest contiguous substring that contains all characters of a given set (pattern) in JavaScript:

// In this example, we:

// Use two pointers, windowStart and windowEnd, to define the current window of characters.
// Maintain a charFrequency Map to track the frequency of characters in the current window.
// Move the windowEnd forward to expand the window while maintaining the frequency count.
// Move the windowStart forward to contract the window when the current window contains all characters of the pattern.
// Keep track of the minimum length substring that contains all characters of the pattern.
// This algorithm has a time complexity of O(n), where n is the length of the input string.

// For instance, if the input string is 'ADOBECODEBANC' and the pattern is 'ABC', the code will find the shortest substring containing all characters of the pattern, which is 'BANC'.
