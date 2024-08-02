/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function(startTime, endTime, queryTime) {
    let counter = 0;
    for (let i = 0; i < endTime.length; i++){
if (endTime[i] >= queryTime && startTime[i] <= queryTime) {
    counter += 1;
    
}

    }

    return counter;
};