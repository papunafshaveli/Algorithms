/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
 sArr = s.split(" ");
 truncatedArr = []
 for (let i = 0; i < k; i++){
    truncatedArr.push(sArr[i]);
    if (sArr[i] === undefined) break;
 }
 return truncatedArr.join(" ")
};