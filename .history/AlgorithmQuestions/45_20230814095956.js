/* 
    45. 跳跃游戏 II
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    // 让每一步尽量跳的远
    const n = nums.length

    // 剪枝
    if(n == 1){
        return 0
    }else if(n == 2){
        return 1
    }

    // 上次跳跃覆盖到的最远的位置
    let preFarthestPosition = nums[0]
    // 本次跳跃覆盖到的最远的位置
    let curFarthestPosition = 0
    // 跳跃次数
    let res = 1

    for(let i=1; i<n; i++){
        if(i <= preFarthestPosition){
            curFarthestPosition = Math.max(curFarthestPosition, i + nums[i])
        }else{
            preFarthestPosition = curFarthestPosition
            curFarthestPosition = Math.max(curFarthestPosition, i + nums[i])
            res++
        }

        if(curFarthestPosition >= n-1){
            return res+1
        }
    }
};
console.log(jump([3,2,1]))