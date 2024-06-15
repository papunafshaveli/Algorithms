/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    const sentence1 = word1.toString().replaceAll(/,/g,"");
    const sentence2 = word2.toString().replaceAll(/,/g,"");
    return sentence1 === sentence2;
};