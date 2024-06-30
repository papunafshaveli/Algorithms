/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    let mappedArr = arr.map((item) => ({value: item, order: fn(item)}));
    mappedArr.sort((a, b) => a.order - b.order);
    const sortedArr = mappedArr.map((el) => el.value);
    return sortedArr;
};