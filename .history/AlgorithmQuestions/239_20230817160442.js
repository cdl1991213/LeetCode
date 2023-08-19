/* 
    239. 滑动窗口最大值
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const n = nums.length

    // 剪枝
    if(n == 1){
        return nums
    }

    let Queue = []
    let res = []
    let i = 0, j = 0
    while(j < k){
        while(Queue.length > 0 && Queue[Queue.length - 1] < nums[j]){
            Queue.pop()
        }
        Queue.push(nums[j])
        j++
    }
    res.push(Queue[0])
    while(j < n){

    }

    return res
};
console.log(maxSlidingWindow([1,3,1,2,0,5], 3))