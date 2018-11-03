// 442. Find All Duplicates in an Array
/*
  Input:
  [4,3,2,7,8,2,3,1]

  Output:
  [2,3]
*/

var findDuplicates = function(nums) {
  let dupNums = [];
  
  let difNumsObj = {};
  for(let i=0; i<nums.length; i++) {
    if(difNumsObj[nums[i]] === undefined) {
      difNumsObj[nums[i]] = true;
    } else {
      dupNums.push(nums[i]);
    }
  }
  
  return dupNums;
};
