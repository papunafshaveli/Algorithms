/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    
        let evens = [];
        let odds = [];
        let finalArr = [];
    for (let i = 0; i < nums.length; i++){
        if (nums[i] % 2 === 0){
            evens.push(nums[i])
        } else{
            odds.push(nums[i])
        }
        
    }
        
        if (odds.length > evens.length){
            for (let j = 0; j < odds.length; j++){
                finalArr.push(evens[j])
                finalArr.push(odds[j])
            }
        } else {
            for (let k = 0; k < evens.length; k++){
                finalArr.push(evens[k])
                finalArr.push(odds[k])
            }
        }
        return finalArr
};