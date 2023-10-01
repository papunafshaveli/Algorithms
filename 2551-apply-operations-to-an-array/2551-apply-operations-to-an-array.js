/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
    for (let i = 0; i < nums.length; i++){
        if (nums[i] == nums[i + 1]){
            nums[i] *= 2;
            nums[i + 1] = 0;
        }
    }

   for (let j = 0; j < nums.length; j++){
       if (nums[j] === 0){
           nums.push(nums.splice(nums.indexOf(0), 1)[0])
       }
   }
   return nums
};