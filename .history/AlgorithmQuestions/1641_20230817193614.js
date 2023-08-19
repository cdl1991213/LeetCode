/* 
    1641. 统计字典序元音字符串的数目
*/
/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function(n) {
    // dp数组：dp[i]表示长度为i，仅由元音组成，且字典序排列的字符串中[a开头的数量,e开头的数量,i开头的数量,o开头的数量,u开头的数量]
    let dp = Array({length:n+1}, ()=>[])

    // dp数组初始化
    dp[0] = [1,1,1,1,1]
    dp[1] = [1,2,3,4,5]
    dp[2] = [1,3,6,10,15]

    // 遍历
    for(let i=3; i<=n; i++){
        // 递归公式
        for(let j=0; j<4; j++){
            let Sum = 0
            for(let q=0; q<=j; q++){
                Sum += dp[i-1][q]
            }
            dp[i][j]
        }
    }
    console.log(dp)
};
console.log(countVowelStrings(3))