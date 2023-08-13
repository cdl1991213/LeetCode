/* 
    53. 最大子数组和
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
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
