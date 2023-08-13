/* 
    561. 数组拆分
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    const n = nums.length
    // 剪枝
    if(n == 2){
        return Math.min(nums[0] , nums[1])
    }

    nums = nums.sort((a,b) => a-b)

    let res = 0
    for(let i=0; i<n; i+=2){
        res += nums[i]
    }
    return res
};