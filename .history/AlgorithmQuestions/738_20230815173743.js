/* 
    738. 单调递增的数字
*/
/**
 * @param {number} n
 * @return {number}
 */
var monotoneIncreasingDigits = function(n) {
    n = n.toString()
    n = n.split('').map(item => {
        return +item
    })
    console.log(n)
};
console.log(monotoneIncreasingDigits(1234))