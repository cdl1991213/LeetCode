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

    let res = []
    for(let i=0; i<n-1-k+1; i++){
        res.push(windowMax(nums, i, i+k-1))
    }
    return res

    function windowMax(arr, index1, index2){
        let maxNum = arr[index1]

        for(let i=index1+1; i<=index2; i++){
            maxNum = Math.max(maxNum, arr[i])
        }
        
        return maxNum
    }
};
console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3))