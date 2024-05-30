/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */

var differenceOfSums = function(n, m) {
    let arrN = [];
    let arrM = [];
    for(let i = 1; i <= n; i++){
        if(i % m === 0) {
            arrM.push(i);
        } else {
            arrN.push(i);
        }
    }
    const nSum = arrN.reduce((acc, curr) => acc + curr, 0);
    const mSum = arrM.reduce((acc, curr) => acc + curr, 0);
    return nSum - mSum;
};

