/* 
    324. 摆动排序 II
*/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    const n = nums.length
    // 剪枝
    if(n == 1){
        return nums
    }
    
    let res = new Array(n)
    nums.sort((a,b) => a-b)
    // 逆序
    for(let i=0; i<n; i++){
        res[n-1-i] = nums[i]
    }
    
    // [5,4,3,3,1,1,1]
    //  5 4 3
    // 3 1 1 1
    let lp = 0, rp = Math.floor(n / 2)
    for(let i=0; i<n; i+=2){
        nums[i] = res[rp++]
        if(i + 1 < n){
            nums[i+1] = res[lp++]
        }
    }
};
let nums = [1,1,2,1,2,2,1]
wiggleSort(nums)
console.log(nums)