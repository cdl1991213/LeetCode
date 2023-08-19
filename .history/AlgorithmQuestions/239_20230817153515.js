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
    for(let i=0; i<k; i++){
        if(Queue.length > 0 && Queue[0] < nums[i]){
            Queue = []
        }
        Queue.push(nums[i])
    }
    res.push(Queue[0])
    console.log(Queue)
    
    for(let i=k; i<n; i++){
        // 始终维护队列头为最大值
        if(Queue.length > 0 && Queue[0] < nums[i]){
            Queue = []
        }
        Queue.push(nums[i])
        res.push(Queue[0])

        if(Queue.length == k){
            Queue.shift()
        }
        
        
    }
    return res

};
console.log(maxSlidingWindow([1,-1], 1))