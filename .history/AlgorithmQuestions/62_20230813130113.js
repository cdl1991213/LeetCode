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
    dp[0][1] = 1
    dp[1][0] = 1
};
console.log(uniquePaths(3,7))