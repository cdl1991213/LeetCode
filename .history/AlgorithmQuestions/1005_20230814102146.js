/* 
    1005. K 次取反后最大化的数组和
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function(nums, k) {
    // 尽量让负数变正数 或 让较小的整数变负数
    const n = nums.length

    nums.sort((a,b)=>a-b)
    
    for(let i=0; i<n; i++){
        if(nums[i] < 0 && k > 0){
            nums[i] = -nums[i]
            k--
        }
    }

    nums.sort((a,b)=>a-b)

    if(k > 0 && k % 2 != 0){
        nums[0] = -nums[0]
    }

    return nums.reduce((item1,item2)=>item1+item2)
};
console.log(largestSumAfterKNegations([4,2,3], 1))