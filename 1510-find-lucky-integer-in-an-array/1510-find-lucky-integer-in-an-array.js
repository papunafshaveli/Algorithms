/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let counterObj = {};
    for (let el of arr){
        if (counterObj[el] === undefined){
            counterObj[el] = 1
        } else{
            counterObj[el] +=1
        }
        
    }
let arr2 = [];
      for (let key in counterObj){
          if (key == counterObj[key]){
              arr2.push(Number(key))
          }
      }
  arr2 = arr2.sort((a, b) => {
      return b - a
  })
if (arr2.length === 0){
    return -1
}
  return arr2[0]
};