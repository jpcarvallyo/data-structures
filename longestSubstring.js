// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
const longestSubHelper = (string, trackingObj) => {
  //   console.log(trackingObj);
  for (let index = 0; index < string.length; index++) {
    const char = string[index];
    if (!trackingObj.characters.has(char)) {
      trackingObj.characters.add(char);
      trackingObj.currentStr += char;
    } else {
      if (trackingObj.currentStr > trackingObj.longestStr) {
        trackingObj.longestStr = trackingObj.currentStr;
        trackingObj.currentStr = "";
        trackingObj.characters.clear();
        longestSubHelper(string.substring(1), trackingObj);
      }
    }
  }
};
const longestSubstring = (string) => {
  const trackingObj = {
    longestStr: "",
    currentStr: "",
    characters: new Set(),
  };
  longestSubHelper(string, trackingObj);
  return trackingObj.longestStr;
};

console.log(longestSubstring("pwwkew"));
console.log(longestSubstring("pwwkew"));
console.log(longestSubstring("abcabcbb"));
console.log(longestSubstring("abccdefg"));
console.log(longestSubstring("abcdefgabcdefgh˜"));
