/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    const arr = nums.slice(0, n);
    const arr2 = nums.slice(n);
    const finalArr = [];

    for (let i = 0; i < arr.length; i++){
        finalArr.push(arr[i]);
        finalArr.push(arr2[i]);
    }
    return finalArr;
};