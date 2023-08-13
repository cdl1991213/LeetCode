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
    let dp = Array.from({length:m}, () => new Array(n))

    // dp数组初始化
    dp[0][0] = obstacleGrid[0][0] == 1 ? 0 : 1
    for(let i=1; i<m; i++){
        if(obstacleGrid[i][0] == 0 && dp[i-1][0] != 0){
            dp[i][0] = 1
        }else{
            dp[i][0] = 0
        }
    }
    for(let i=1; i<n; i++){
        if(obstacleGrid[0][i] == 0 && dp[0][i-1] != 0){
            dp[0][i] = 1
        }else{
            dp[0][i] = 0
        }
    }

    // 遍历
    for(let i=1; i<m; i++){
        for(let j=1; j<n; j++){
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
console.log(uniquePathsWithObstacles([[0,0],[1,0]]))