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

    let maxSum = 0
    let minPreSum = 0
    let Sum = 0
    for(let i=0; i<n; i++){
        Sum += nums[i]
        maxSum = Math.max(Sum, maxSum)
        minPreSum = Math.min(minPreSum, Sum)
    }
    return maxSum - minPreSum
};