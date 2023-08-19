/* 
    213. 打家劫舍 II
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const n = nums.length
    if(n==0){
        return 0
    }
    if(n == 1){
        return nums[0]
    }
    // 偷首不偷尾
    console.log(nums.slice(0, n-1))
    console.log(nums.slice(1, n))
    // let result1 = LinearRob()
    // console.log(result1)
    // 偷尾不偷首
    // let result2 = LinearRob(nums.slice(1, n))
    // console.log(result2)
    // return Math.max(result1, result2)
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
console.log(rob([2,3,2]))