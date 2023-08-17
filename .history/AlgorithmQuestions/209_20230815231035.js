/* 
    209. 长度最小的子数组
*/
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    const n = nums.length

    let lp = 0, rp = 0
    let res = n + 1
    let sum = 0
    while(rp < n){
        sum += nums[rp]
        while(sum >= target){
            res = Math.min(res, rp - lp + 1)
            sum -= nums[lp]
            lp++
        }
        rp++
    }
    return res == n + 1 ? 0 : res
};