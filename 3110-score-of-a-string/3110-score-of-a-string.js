/**
 * @param {string} s
 * @return {number}
 */
function scoreOfString(s) {
    let result = 0;
    
    for (let i = 0; i < s.length - 1; i++) {
        
        let currentChar = s.charCodeAt(i);
        let nextChar = s.charCodeAt(i + 1);
        let diff = Math.abs(currentChar - nextChar);
        result += diff;
    }
    
    return result;
}