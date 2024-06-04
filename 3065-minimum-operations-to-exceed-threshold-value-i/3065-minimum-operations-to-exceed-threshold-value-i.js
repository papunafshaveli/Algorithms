/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    const newNums = nums.sort((a, b) => a - b)
    let step = 0;
    for (let i = 0; k > newNums[i]; i++){
        step+=1
    }
return step;
    
};