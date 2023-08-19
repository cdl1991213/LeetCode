/* 
    198. 打家劫舍
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    // dp数组：dp[i]表示为，数组的0~i范围所能偷的最大钱币
    let dp = new Array(nums.length)

    // dp数组初始化
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0], nums[1])

    // 遍历
    for(let i=2; i<nums.length; i++){
        // 递归公式
        // 偷与不偷两种情况的最大值
        dp[i] = Math.max(dp[i-1], dp[i] + dp[i-2])
    }

    return dp
};
console.log(rob([1,2,3,1]))