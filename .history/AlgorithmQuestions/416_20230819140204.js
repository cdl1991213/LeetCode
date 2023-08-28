/* 
    416.分割等和子集
*/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    // 物品：n个数字, 每个数字只能使用一次
    // 价值 = 重量
    // 背包：承重为 sum / 2, 能否将背包装满

    // dp数组：dp[i][j]表示，在物品0 ~ 物品i中选择，承重为j的背包所背的最大价值为dp[i]
    let sum = nums.reduce((item1, item2) => item1 + item2)
    if(sum % 2 != 0){ return false }
    let dp = Array.from({length:nums.length} , () => new Array(sum / 2 + 1))

    // dp数组初始化
    // 重量 = 0
    for(let i=0; i<n; i++){
        dp[i][0] = 0
    }
    // 物品0
    for(let j=0; j<sum / 2 + 1; j++){
        if(j >= nums[0]){
            dp[0][j] = nums[0]
        }else{
            dp[0][j] = 0
        }
    }

    // 遍历
    for(let i=1; i<n; i++){
        for(let j=1; j<sum / 2 + 1; j++){
            // 递归公式
            // 取物品i
            let geti = dp[i-1][j-nums[i]] + nums[i]
            // 不取物品i
            let noGeti = dp[i-1][j]
            dp[i][j] = Math.max(geti , noGeti)
        }
    }
};