/* 
    213. 打家劫舍 II
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    
};

var LinearRob = function(nums){
    // dp数组：dp[i]表示，0~i范围内能偷的最大钱币数量
    let dp = new Array(nums.length)

    // dp数组初始化
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0], nums[1])


    // 遍历
    for(let i=0; i<nums.length; i++){
        // 递归公式
        dp[i] = Math.max(dp[i-1], nums[i] + dp[i-2])
    }

    return dp[nums.length - 1]
}