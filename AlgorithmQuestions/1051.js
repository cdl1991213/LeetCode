/* 
    1051. 高度检查器
*/
/**
 * @param {number[]} heights
 * @return {number}
 */
/* api */
// var heightChecker = function(heights) {
//     let [...initHeights] = [...heights]
//     let expected = heights.sort((a,b) => a-b)
//     let res = 0
//     for(let i=0; i<heights.length; i++){
//         if(initHeights[i] != expected[i]){
//             res++
//         }
//     }
//     return res
// };
/* 计数排序 */
var heightChecker = function(heights) {
    let [...initHeights] = [...heights]
    CountSort(heights)
    let res = 0
    for(let i=0; i<heights.length; i++){
        if(initHeights[i] != heights[i]){
            res++
        }
    }
    return res

    function CountSort(arr){
        // 获取最小值、最大值
        let minValue = 1, maxValue = 100
        for(let i=0; i<arr.length; i++){
            maxValue = Math.max(maxValue, arr[i])
            minValue = Math.min(minValue, arr[i])
        }

        // 计数数组（桶）
        let CountArray = Array.from({length:maxValue-minValue+1}, ()=>[])
        // 数组索引偏移量
        let offset = minValue

        // 入桶
        for(let i=0; i<arr.length; i++){
            CountArray[arr[i] - offset]++
        }
        // 出桶指针
        let p =0
        // 出桶
        for(let i=0; i<maxValue-minValue+1; i++){
            if(CountArray[i] > 0){
                for(let j=0; j<CountArray[i]; j++){
                    arr[p] = i + offset
                    p++
                }
            }
        }
    }
};
console.log(heightChecker([1,1,4,2,1,3]))