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
        // +用于把number类型转换为string类型
        return +item
    })

    let flag = Infinity
    for(let i=n-1; i>=1; i--){
        if(n[i-1] > n[i]){
            console.log('s')
            flag = i
            // n[i] = 9
            n[i-1] -= 1
        }
    }
    for(let i = flag; i < n.length; i++) {
        n[i] = 9
    }

    n = n.join('')
    return +n

};
console.log(monotoneIncreasingDigits(10))