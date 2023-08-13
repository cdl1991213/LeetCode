/* 
    2343. 裁剪数字后查询第 K 小的数字
    记录每一位基数排序的结果索引，并根据该索引顺序指导下一位基数排序
*/
/**
 * @param {string[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var smallestTrimmedNumbers = function(nums, queries) {
    const n = nums.length
    // 题目限制的最大位数
    const maxDigit = nums[0].length

    // 记录每位基数排序后，各个元素的索引（可以用作下一位基数排序的遍历顺序）
    let order = Array.from({ length: maxDigit+1 }, () => [])
    // 第一位基数排序遍历顺序为0 ~ n
    for(let i=0; i<n; i++){
        order[0].push(i)
    }

    RadixSort(nums)

    let res = []
    // 根据查询信息取结果
    for(let [k, trim] of queries){
        res.push(order[trim][k-1])
    }
    return res

    function RadixSort(nums){
        // 对数字的每一位进行排序
        for(let digit=1; digit<=maxDigit; digit++){
            // 基数数组（桶）
            let RadixArray = Array.from({ length: 10 }, () => [])
            // 当前位
            let currentDigit = maxDigit - digit

            // 入桶（遍历顺序为上一位基数排序的结果索引）
            for(let i of order[digit-1]){
                RadixArray[ nums[i][currentDigit] ].push(i)
            }

            // 出桶（索引）
            for(let i=0; i<10; i++){
                if(RadixArray[i].length>0){
                    // 记录当前位的基数排序结果索引
                    order[digit].push(...RadixArray[i])
                }
            }
        }
    }
};

console.log(smallestTrimmedNumbers(
    ["102","473","251","814"], 
    [[1,1],[2,3],[4,2],[1,2]]
))