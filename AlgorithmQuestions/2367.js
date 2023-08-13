/* 
    2367. 算术三元组的数目
*/
/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
/* 哈希表 */ 
// var arithmeticTriplets = function(nums, diff) {
//     const n = nums.length

//     let res = 0
//     let map = new Map()
//     for(let i=0; i<n; i++){
//         if(
//             map.get(nums[i] - diff) >= 0 &&
//             map.get(nums[i] - diff*2) >= 0 &&
//             i > map.get(nums[i] - diff) &&
//             map.get(nums[i] - diff) > map.get(nums[i] - 2 * diff)
//         ){  
//             console.log("r",i)
//             res++
//         }
//         map.set(nums[i], i)
//     }
//     return res
// };

/* 三指针 */
var arithmeticTriplets = function(nums, diff) {
    const n = nums.length

    let res = 0

    // 三指针
    for(let i = 0, j = 1, k = 2; k < n && j < n-1 && i < n-2 ; i++){
        // 对于i,找到符合条件的j
        while(nums[j] - nums[i] < diff && j < n-1){
            j++
        }

        // 当前i找不到合适的j
        if(nums[j] - nums[i] > diff || j >= n-1){
            continue
        }

        while(nums[k] - nums[j] < diff && k < n){
            k++
        }

        // 当前j找不到合适的k
        if(nums[k] - nums[j] > diff || k >= n){
            continue
        }

        res++        
    }
    
    return res
};
console.log(arithmeticTriplets([4,5,6,7,8,9], 2))