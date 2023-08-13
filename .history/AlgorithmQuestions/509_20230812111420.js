/* 
    509.斐波那契数
*/
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    // 1. dp数组
    let dp = new Array(n+1)
    // 2. dp数组初始化
    dp[0] = 0
    dp[1] = 1
    // 3. 遍历顺序
    for(let i=2; i<=n; i++){
        // 4. 递推公式
        dp[i] = dp[i-1] + dp[i-2]
    }
    return dp[n]

};