/* 
    977. 有序数组的平方
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    nums = nums.sort((a,b)=>Math.abs(a) - Math.abs(b))
    for(let i=0; i<nums.length; i++){
        nums[i] = Math.pow(nums[i],2)
    }
};