/* 
    62. 不同路径
*/
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    // dp数组：走到[i,j]位置共有dp[i][j]条不同路径
    let dp = Array.from({length:m}, () => new Array(n))

    // dp数组初始化
    dp[0][0] = 0
    for(let i=1; i<m; i++){
        dp[i][0] = 1
    }
    for(let i=0; i<n; i++){
        dp[0][i] = 1
    }

    // 遍历顺序
    for(let i=1; i<m; i++){
        for(let j=1; j<n; j++){
            dp[i][j] = dp[i-1][j] + dp[i][j-1]
        }
    }

};
console.log(uniquePaths(3,7))