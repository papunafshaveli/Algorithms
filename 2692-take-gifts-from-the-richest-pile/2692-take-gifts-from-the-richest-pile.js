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
         let count = gifts.reduce((total, el) => {
           return  total + el
         });

         
    
    return count
};