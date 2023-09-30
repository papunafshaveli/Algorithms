/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function(moves) {
    x = 0;
    y = 0;
    for (let i = 0; i < moves.length; i++){
        if (moves[i] === "L"){
            x ++;
            y ++;
        } else if (moves[i] === "R" ){
            x --;
            y --;
        } else{
            x ++;
            y --;
        }
    }
    return Math.max(Math.abs(x), Math.abs(y))
};