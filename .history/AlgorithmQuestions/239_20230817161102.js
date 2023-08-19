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
    // j遍历数组，i用于记录当前窗口滑动后应该要删除的数
    let i = 0, j = 0
    while(j < k){
        // 始终维护队列头为窗口最大值
        while(Queue.length > 0 && Queue[Queue.length - 1] < nums[j]){
            Queue.pop()
        }
        Queue.push(nums[j])
        j++
    }
    res.push(Queue[0])
    while(j < n){
        while(Queue.length > 0 && Queue[Queue.length - 1] < nums[j]){
            Queue.pop()
        }
        // 最大值脱离滑动窗口
        if(Queue[0] == nums[i]){
            Queue.shift()
        }
        Queue.push(nums[j])
        res.push(Queue[0])
        // 窗口滑动后，要新增的数的索引
        j++
        // 窗口滑动后，要删除的数的索引
        i++
    }

    return res
};
console.log(maxSlidingWindow([1,3,1,2,0,5], 3))