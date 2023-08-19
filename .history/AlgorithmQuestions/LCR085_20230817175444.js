/* 
   LCR 085. 括号生成 
*/
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    // dp数组：dp[i]表示，由i对括号生成的有效组合为dp[i]个
    let dp = new Array(n+1).fill(0)

    // dp数组初始化
    dp[0] = 1
    dp[1] = 1
    dp[2] = 2

    // 遍历
    for(let i=3; i<=n; i++){
        // 括号里的括号对数
        for(let j=0; j<=i-1; j++){
            // 递归公式
            // 括号里生成有效组合为dp[j]个，括号外生成有效组合为dp[i-j-1]个
            dp[i] += dp[j] * dp[i-j-1]
        }
    }
};