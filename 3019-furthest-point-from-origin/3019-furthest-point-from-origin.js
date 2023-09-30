/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function(moves) {
    left = 0;
    right = 0;
    for (let i = 0; i < moves.length; i++){
        if (moves[i] === "L"){
            left --;
            right --;
        } else if (moves[i] === "R" ){
            left ++;
            right ++;
        } else{
            left --;
            right ++;
        }
    }
    return Math.max(Math.abs(left), Math.abs(right))
};