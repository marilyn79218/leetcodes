// 3. Longest Substring Without Repeating Characters
// Given a string, find the length of the longest substring without repeating characters.
/*
  Input: "abcabcbb"
  Output: 3 
  Explanation: The answer is "abc", with the length of 3.
*/

var lengthOfLongestSubstring = function(string) {
  let longestStr = '';

  let i = 0;
  let chars = string.split('');
  let nonrepeatChars = [chars[i]];
  if (nonrepeatChars.length > longestStr.length) {
    longestStr = nonrepeatChars.join('');
  }

  let nextIndex = i + 1;
  let nextChar = chars[nextIndex];
  while(nextChar) {
    if (!nonrepeatChars.includes(nextChar)) {
      nonrepeatChars = [...nonrepeatChars, nextChar];

      if (nonrepeatChars.length > longestStr.length) {
        longestStr = nonrepeatChars.join('');
      }
    } else {
      let repeatCharIndex = nonrepeatChars.findIndex(_char => _char === nextChar);
      nonrepeatChars = nonrepeatChars.slice(repeatCharIndex + 1);
      nonrepeatChars.push(nextChar);
    }
    
    ++nextIndex;
    nextChar = chars[nextIndex];
  }
  
  return longestStr.length;
};

// Solution 2, Sliding Window
var lengthOfLongestSubstring = function(string) {  
  let maxLength = 0, tmpLength = 0;
  let set = new Set();
  let leftIndex = -1, rightIndex = -1;
  
  if(!string) {
    return maxLength;
  }
  
  while(rightIndex < string.length) {
    if(rightIndex === -1) {
      rightIndex++;
    }
    
    let char = string[rightIndex];
    
    if(!set.has(char)) {
      set.add(char);
      tmpLength++;
        
      if(tmpLength > maxLength) {
        maxLength = tmpLength;
      }
    } else {
      if(leftIndex === -1) {
        leftIndex++;
      }
      while(string[leftIndex] !== char) {
        set.delete(string[leftIndex]);
        tmpLength--;
        leftIndex++;
      }
        
      leftIndex++;
    }
    
    rightIndex++;
  }
  
  return maxLength;
};
