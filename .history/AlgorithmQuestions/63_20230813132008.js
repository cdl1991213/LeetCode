/* 
    63. 不同路径 II
*/
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length
    const n = obstacleGrid[0].length

    // dp数组：dp[i][j]表示，走到[i][j]位置有多少条不同路径
    let dp = new Array(m).fill(new Array(n))

    // dp数组初始化
    dp[0][0] = 0
    for(let i=1; i<m; i++){
        dp[i][0] = 1
    }
    for(let i=1; i<n; i++){
        dp[0][i] = 1
    }

    // 遍历
    for(let i=1; i<m; i++){
        for(let i=1; i<n; i++){
            // 当前位置有障碍物
            if(obstacleGrid[i][j] == 1){
                dp[i][j] = 0
            }else{
                dp[i][j] = dp[i-1][j] + dp[i][j-1]
            }
        }
    }
    return dp[m-1][n-1]
};