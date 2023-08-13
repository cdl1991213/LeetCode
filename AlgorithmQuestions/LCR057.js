/* 
    LCR 057. 存在重复元素 III
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
/* 枚举 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    const n = nums.length
    // 剪枝
    if(n < 2){
        return false
    }

    for(let i=0; i<n-1; i++){
        for(let j=i+1; j<i+1+k; j++){
            if( ( Math.abs(nums[i] - nums[j]) <= t ) &&
                ( Math.abs(i-j) <= k )
            ){
                return true
            }
        }
    }
    return false
};

/* 桶排序 */
// var containsNearbyAlmostDuplicate = function(nums, k ,t){
//     const n = nums.length
//     // 剪枝
//     if(n < 2){
//         return false
//     }

//     let map = new Map()
//     for(let i=0; i<n; i++){
//         // 当前数对于t+1的倍数（防止t=0的情况）
//         let multiple = GetMultiples(nums[i] , t + 1)

//         // 倍数可能为0
//         if(map.get(multiple) || map.get(multiple) == 0){
//             return true
//         }else if((map.get(multiple - 1) || map.get(multiple - 1) == 0) && Math.abs(nums[i] - map.get(multiple - 1)) <= t){
//             return true
//         }else if((map.get(multiple + 1) || map.get(multiple + 1) == 0) && Math.abs(nums[i] - map.get(multiple + 1)) <= t){
//             return true
//         }

//         map.set(multiple, nums[i])

//         // 维护一个长度为k的哈希表
//         if(i >= k){
//             map.delete(GetMultiples(nums[i - k], t + 1))
//         }
//     }

//     return false

//     function GetMultiples(num, baseNum){
//         return Math.floor( num / baseNum )
//     }
// }


console.log(containsNearbyAlmostDuplicate([1,5,9,1,5,9], 2, 3))
