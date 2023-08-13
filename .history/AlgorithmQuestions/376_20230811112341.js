/* 
    376. 摆动序列
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
    const n = nums.length
    // 剪枝 
    if(n == 1){
        return 1
    }else if(n == 2){
        return nums[0] == nums[1] ? 1 : 2
    }

    let res = 0
    for(let i=0; i<n; i++){
        // 数组首尾元素
        if(i == 0){
            res++
            continue
        }else if(i == n-1 && nums[n-1] != nums[n-2]){
            res++
            continue
        }

        let preTrend = nums[i] - nums[i-1] 
        let curTrend = nums[i+1] - nums[i] 
        if((preTrend > 0 && curTrend <= 0) || (preTrend < 0 && curTrend >= 0)){
            res++
        }
    }
    return res
};
console.log(wiggleMaxLength([0,0,5,10,0,1]))