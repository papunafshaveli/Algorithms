/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let counter = 0;

    while (true) {
        let x = Infinity;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > 0 && nums[i] < x) {
                x = nums[i];
            }
        }

        if (x === Infinity) {
            break;
        }

        
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > 0) {
                nums[i] -= x;
            }
        }

       
        counter++;
    }

    return counter;

};