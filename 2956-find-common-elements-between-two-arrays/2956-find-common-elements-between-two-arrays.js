/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function(nums1, nums2) {
    let counter1 = 0;
    let counter2 = 0;
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    const longestArrLength = nums1.length > nums2.length ? nums1.length : nums2.length;

    for (let i = 0; i < longestArrLength; i++){
        if (i < nums1.length && set2.has(nums1[i])){
            counter1++
        }
        if (i < nums2.length && set1.has(nums2[i])){
            counter2++
        }
    }

    return [counter1, counter2]
    
};