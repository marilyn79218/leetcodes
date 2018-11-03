// 283. Move Zeroes
// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

/*
  Input: [0,1,0,3,12]
  Output: [1,3,12,0,0]
*/

var moveZeroes = function(nums) {
  let replaceIndex = 0;
  for (let i=0; i<nums.length; i++) {
    if (nums[i] !== 0) {
      nums[replaceIndex] = nums[i];
      ++replaceIndex;
    }
  }
  
  while (replaceIndex < nums.length) {
    nums[replaceIndex] = 0;
    ++replaceIndex;
  }
}
