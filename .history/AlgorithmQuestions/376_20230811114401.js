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

    let res = 1
    let lastPreTrend
    for(let i=0; i<n; i++){
        // 数组首尾元素
        if(i == n-1 && nums[n-1] != nums[n-2]){
            res++
            continue
        }

        let preTrend = nums[i] - nums[i-1] 
        let curTrend = nums[i+1] - nums[i] 
        if((preTrend > 0 && curTrend <= 0) || (preTrend < 0 && curTrend >= 0)){
            if(curTrend == 0){
                res += ((preTrend > 0 && lastPreTrend < 0) || (preTrend < 0 && lastPreTrend > 0)) ? 1 : 0
                lastPreTrend = preTrend
            }else{
                res++
            }
        }
    }
    return res
};
console.log(wiggleMaxLength([1,7,4,9,2,5]))