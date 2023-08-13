/* 
    376. 摆动序列
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
    if(nums.length <= 1) return nums.length
    let result = 1
    let preDiff = 0
    let curDiff = 0
    for(let i = 0; i < nums.length - 1; i++) {
        curDiff = nums[i + 1] - nums[i]
        if((curDiff > 0 && preDiff <= 0) || (curDiff < 0 && preDiff >= 0)) {
            result++
            preDiff = curDiff
        }
    }
    return result
};

console.log(wiggleMaxLength([0,1,1,1,2,2,3,3,4,4]))