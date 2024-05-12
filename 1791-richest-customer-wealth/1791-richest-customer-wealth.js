/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    const arr = []
    for (let i = 0; i < accounts.length; i++){
     let num = accounts[i].reduce((acc, curr) => acc + curr)
     arr.push(num)
    }
    arr.sort((a, b) => {
        return b - a
    })
return arr[0]
};