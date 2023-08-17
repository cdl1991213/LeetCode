/* 
    704. 二分查找
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    const n = nums.length
    let left = 0, right = n-1
    while(left <= right){
        let midValueIndex = left + Math.floor((right - left) / 2)
        if(nums[midValueIndex] == target){
            return midValueIndex
        }else if(nums[midValueIndex] < target){
            left = midValueIndex + 1
        }else{
            right = midValueIndex - 1
        }
    }
    return -1
};