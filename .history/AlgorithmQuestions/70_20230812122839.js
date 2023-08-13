/* 
    70. 爬楼梯
*/
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // 递推数组
    let dp = new Array(n+1)

    // 递推初始化
    dp[1] = 1
    dp[2] = 2

    // 遍历顺序
    for(let i=3; i<=n; i++){
        // 递推公式
        dp[i] = dp[i-1] + dp[i-2]
    }
    return dp[n]
};