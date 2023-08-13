/* 
    343. 整数拆分
*/
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    // dp数组:dp[i]表示, 拆分i后获得的最大乘积
    let dp = Array(n+1).fill(0)
    
    // dp数组初始化
    dp[0] = 0
    dp[1] = 1
    dp[2] = 1

    // 遍历
    for(let i=3; i<=n; i++){
        // 拆分成两个数
        for(let j=1; j<i; j++){
            // 递推公式
            // 特殊情况：i拆分后的最大乘积 < i时，应该取i
            dp[i] = Math.max(dp[i], j * Math.max(dp[i-j],i-j))
        }
    }
    return dp[n]
};
console.log(integerBreak(10))