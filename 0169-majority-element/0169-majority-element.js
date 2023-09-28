/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let elements = {};
    for (let el of nums) {
        if (elements[el] === undefined ){
            elements[el] = 1 
        } else{
            elements[el] += 1
        }
    }

    for (let key in elements){
        const value = elements[key];
        if (value > nums.length /2){
            return key
        }
    }
};

