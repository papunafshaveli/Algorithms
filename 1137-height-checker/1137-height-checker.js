/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let expected = [];
    counter = 0;
    for (let i = 0; i < heights.length; i++){
        expected.push(heights[i]);
    }
    expected.sort((a, b) => {
        return a - b
    })

    for (let j = 0; j < heights.length; j++){
        if (heights[j] != expected[j]){
            counter++
        }
    }
    return counter
};