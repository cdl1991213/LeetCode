/* 
    977. 有序数组的平方
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
/* 排序 */
var sortedSquares = function(nums) {
    nums = nums.sort((a,b)=>Math.abs(a) - Math.abs(b))
    for(let i=0; i<nums.length; i++){
        nums[i] = Math.pow(nums[i],2)
    }
    return nums
};

/* 双指针 */
var sortedSquares = function(nums) {
    const n = nums.length
    let lp = 0, rp = n-1
    let res = []
    while(lp <= rp){
        if(Math.abs(nums[lp]) < Math.abs(nums[rp])){
            res.unshift(Math.pow(nums[rp], 2))
        }else{
            res.unshift(Math.pow(nums[lp], 2))
        }
    }
    return res
};