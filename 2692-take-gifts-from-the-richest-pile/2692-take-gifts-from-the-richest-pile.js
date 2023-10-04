/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function(gifts, k) {
    

    for (let i = 0; i < k; i++){
        gifts.sort((a, b) => {
        return a - b
    })
         let el =  Math.floor(Math.sqrt(gifts.pop()))
         gifts.push(el)
         }
         let count = 0;

         for (let i = 0; i < gifts.length; i++){
             count += gifts[i]
         }
    
    return count
};