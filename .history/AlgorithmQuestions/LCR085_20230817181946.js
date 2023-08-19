/* 
   LCR 085. 括号生成 
*/
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    // dp数组：dp[i]表示，由i对括号生成的有效组合
    let dp = Array.from({length:n+1}, ()=>{})

    // dp数组初始化
    dp[0] = ['']
    dp[1] = ['()']
    dp[2] = ['(())', '()()']

    let res = []

    // 遍历
    for(let i=3; i<=n; i++){
        // 括号里的括号对数
        for(let j=0; j<=i-1; j++){
            // 递归公式
            // 括号里生成有效组合为dp[j]，括号右侧生成有效组合为dp[i-j-1]
            for (const inBrackets of dp[j]) {
                for (const outBrackets of dp[i-j-1]) {
                    console.log("inBrackets",inBrackets,'outBrackets',outBrackets)
                    dp[i].push(
                        '(' + inBrackets + ')' + outBrackets
                    )
                }
            }
        }
    }
    return dp[n]
};
console.log(generateParenthesis(3))