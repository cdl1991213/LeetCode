/* 
    53. 最大子数组和
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
/* 动态规划 */
var maxSubArray = function(nums) {
    const n = nums.length
    // 剪枝
    if(n == 1){
        return nums[0]
    }

    let res = nums[0]
    let preSum = nums[0]
    for(let i=1; i<n; i++){
        if(preSum > 0){
            preSum += nums[i]
        }else{
            preSum = nums[i]
        }
        res = Math.max(preSum,res)
    }
    return res
};

/* 前缀和 */
var maxSubArray = function(nums) {
    const n = nums.length
    // 剪枝
    if(n == 1){
        return nums[0]
    }

    // 前缀和数组
    let preSumArray = new Array(n+1).fill(0)
    for(let i=0; i<n; i++){
        preSumArray[i+1] = preSumArray[i] + nums[i]
    }
    console.log(preSumArray)
};
console.log(maxSubArray([5,4,-1,7,8]))