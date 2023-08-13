/* 
    746. 使用最小花费爬楼梯
*/
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const n = cost.length

    // dp数组：dp[i]表示爬到i阶的最低花费
    let dp = new Array(n)

    // dp数组初始化
    dp[0] = 0
    dp[1] = 0

    // 最低花费
    let minCost = Number.MAX_SAFE_INTEGER
    // 遍历顺序
    for(let i=2; i<n; i++){
        // 递归公式
        dp[i] = Math.min(dp[i-1] + cost[i-1], dp[i-2] + cost[i-2])
    }
};