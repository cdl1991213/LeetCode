/* 
    692. 前K个高频单词
*/
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
/* 桶排序 */
// var topKFrequent = function(words, k) {
//     const n = words.length

//     // 计算频率
//     let maxFrequency = 0
//     let map = new Map()
//     for(let i=0; i<n; i++){
//         let frequency = (map.get(words[i]) || 0) + 1
//         map.set(words[i], frequency)
//         maxFrequency = Math.max(maxFrequency, frequency)
//     }

//     // 桶
//     let buckets = new Array(maxFrequency + 1).fill(0).map(()=>[])

//     for (const [key, value] of map) {
//         buckets[value].push(key)
//     }

//     for(let i=0; i<maxFrequency+1 ; i++){
//         buckets[i] = buckets[i].sort()
//     }

//     let res = []
//     for(let i=maxFrequency; i>=0; i--){
//         for(let j=0; j<buckets[i].length; j++){
//             if(k > 0){
//                 res.push(buckets[i][j])
//                 k--
//             }else{
//                 return res
//             }
//         }
//     }
//     return res
// };



console.log(topKFrequent(["i","love","leetcode","i","love","coding"], 3))