/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
  let frequencyCounter = {};
  for (let i = 0; i < nums.length; i++) {
    let number = nums[i];
    if (frequencyCounter[number]) {
      frequencyCounter[number] += 1;
    } else {
      frequencyCounter[number] = 1;
    }
  }

  nums.sort((a, b) => {
    if (frequencyCounter[a] !== frequencyCounter[b]) {
      return frequencyCounter[a] - frequencyCounter[b]; 
    } else {
      return b - a; 
    }
  });
  return nums;
};