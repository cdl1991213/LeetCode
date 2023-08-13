/* 
    55. 跳跃游戏
*/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
/* 辅助数组记录可跳跃位置 */
var canJump = function(nums) {
    const n = nums.length

    // 跳跃位置数组
    let jumpArray = new Array(n).fill(0)
    jumpArray[0] = 1

    for(let i=0; i<n; i++){
        if(jumpArray[i] == 1){
            for(let j=1; j<=nums[i]; j++){
                jumpArray[i+j] = 1
            }
        }
        if(jumpArray[n-1] == 1){
            return true
        }
    }
    return false

};

/* 最远跳跃位置 */
var canJump = function(nums) {
    const n = nums.length

    // 最远跳跃位置
    let farthestJumpPosition = 0
    for(let i=0; i<n; i++){
        // 当前位置是否可跳到
        if(i <= farthestJumpPosition){
            farthestJumpPosition = Math.max(farthestJumpPosition, i+nums[i])
            if(farthestJumpPosition >= n-1){
                return true
            }
        }else{
            return false
        }
    }

};
console.log()
