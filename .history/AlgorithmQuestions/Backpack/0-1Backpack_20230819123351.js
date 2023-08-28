 /* 
    0-1背包
    有n种物品，每种物品只有1个。每个物品有 重量 、 价值。
    现在有一个承重为m的背包，问这个背包最多能装价值为多少的物品
 */
/* 动态规划 */
 function Backpack(n, weight, value, m){
    // dp数组：dp[i][j]表示，在 物品0~物品i 中选择，背包承重为j，这个背包最多能装的价值为dp[i][j]
    let dp = Array.from({length:n}, () => new Array(m+1))

    // dp数组初始化
    // 承重为0的背包，能装物品的最大价值为0
    for(let i=0; i<n; i++){
        dp[i][0] = 0
    }
    // 能装下物品0的背包价值为value[0],装不下的背包价值为0
    for(let j=0; j<m+1; j++){
        if(j < weight[0]){
            dp[0][j] = 0
        }else{
            dp[0][j] = value[0]
        }
    }

    // 遍历
    for(let i=1; i<n; i++){
        for(let j=1; j<m+1; j++){
            // 递归公式
            // 对于物品i, 存在两种情况：取物品i、不取物品i
            // 当取物品i时，dp[i] = value[i] + dp[i-1][j- weight[i]]
            // 当不取物品i时，dp[i] = dp[i-1][j]
            console.log(Math.max(value[i] + dp[i-1][ Math.max(j- weight[i], 0) ], dp[i-1][j]))
            dp[i][j] = Math.max(value[i] + dp[i-1][ Math.max(j- weight[i], 0) ], dp[i-1][j])
            console.log(dp)
        }
    }

    return dp[n-1][m]
    
 }
 console.log(Backpack(3, [2,3,4], [15,20,30], 5))