/* 
    面试题 08.09. 括号
*/
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    // dp数组：dp[i]表示，i对括号的所有合法组合
    let dp = Array.from({length:n+1}, ()=>[])

    // dp数组初始化
    dp[0] = ['']
    dp[1] = ['()']
    dp[2] = ['(())','()()']

    // 遍历
    for(let i=0; i<=n; i++){
        // 递归公式
        // 括号里的括号对数量
        for(let j=0; j<=i-j-1; j++){
            for (const inBrackets of dp[j]) {
                for (const outBrackets of dp[i-j-1]) {
                    dp[i].push(
                        '(' + inBrackets + ')' + outBrackets
                    )
                }
            }
        }
    }
    return dp[n]

};