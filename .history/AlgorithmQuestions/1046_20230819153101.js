/* 
    1046. 最后一块石头的重量
*/
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    while(stones.length > 1){
        let nums1 = stones.shift()
        let nums2 = stones.shift()
        if(Math.abs(nums1 - nums2) != 0){
            stones.unshift(Math.abs(nums1 - nums2))
        }
    }
    return stones.length == 0 ? [0] : stones
};