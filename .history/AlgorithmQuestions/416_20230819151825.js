/* 
    416.分割等和子集
*/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
/* 二维dp数组 */
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
    for(let i=0; i<nums.length; i++){
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
    // console.log(dp)

    // 遍历
    for(let i=1; i<nums.length; i++){
        for(let j=1; j<sum / 2 + 1; j++){
            // 递归公式
            // 取物品i
            let geti = (j >= nums[i]) ? dp[i-1][j-nums[i]] + nums[i] : 0
            // 不取物品i
            let noGeti = dp[i-1][j]
            dp[i][j] = Math.max(geti , noGeti)
        }
    }
    // console.log(dp)
    return dp[nums.length - 1][sum / 2] == sum / 2
};

/* 一维dp数组 滚动数组 */
var canPartition = function(nums) {
    // 物品：n个数字, 每个数字只能使用一次
    // 价值 = 重量
    // 背包：承重为 sum / 2, 能否将背包装满

    // dp数组：dp[j]表示，承重为j的背包所背最大价值为dp[j]
    let sum = nums.reduce((item1,item2) => item1 + item2)
    if(sum % 2 != 0){ return }
    // dp数组初始化
    let dp = new Array(sum / 2 + 1).fill(0)


    // 遍历
    for(let i=0; i<nums.length; i++){
        // 对于物品i, 遍历容量大于weight[i]的背包
        for(let j=sum / 2; j >= nums[i]; j--){
            dp[j] = Math.max(dp[j-nums[i]] + nums[i] , dp[j])
        }
    }

    return dp[sum / 2] == sum / 2
    
};

console.log(canPartition([1,5,11,5]))