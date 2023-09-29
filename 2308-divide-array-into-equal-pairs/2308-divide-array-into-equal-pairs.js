/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    sortedNums = nums.sort((a, b) => {
        return a - b
    })
    for (let i = 0; i < sortedNums.length; i += 2){
if (sortedNums[i] !== sortedNums[i + 1]){
    return false
}
    }
    return true
};