/* 
    451. 根据字符出现频率排序
*/
/**
 * @param {string} s
 * @return {string}
 */
/* 哈希表 */
var frequencySort = function(s) {
    const n = s.length
    // 剪枝
    if(n == 1){
        return s
    }

    let map = new Map()
    for(let i=0; i<n; i++){
        if(!map.get(s[i])){
            map.set(s[i], 1)
        }else{
            map.set(s[i], map.get(s[i]) + 1)
        }
    }
    let mapArray = Array.from(map)

    mapArray = mapArray.sort((a, b) => b[1] - a[1])

    let res = []
    for(let i=0; i<mapArray.length; i++){
        for(let j=0; j<mapArray[i][1]; j++){
            res.push(mapArray[i][0])
        }
    }
    return res.join('')
};

/* 桶排序 */
var frequencySort = function(s) {
    const n = s.length
    // 剪枝
    if(n == 1){
        return s
    }
    
    // 最大频率
    let maximumFrequency = 0

    let map = new Map()
    for(let i=0; i<n; i++){
        let frequency = (map.get(s[i]) || 0) + 1
        map.set(s[i], frequency)
        // 更新最大频率
        maximumFrequency = Math.max(maximumFrequency, frequency)
    }

    // 桶
    const buckets = new Array(maximumFrequency + 1).fill(0).map(() => new Array());

    for (let [key, value] of map) {
        buckets[value].push(key)
    }

    let res = []
    // 频率
    for(let i=maximumFrequency; i>=0; i--){
        // 当前桶长度
        for(let j=0; j<buckets[i].length; j++){
            // 输出次数
            for(let k=0; k<i; k++){
                res.push(buckets[i][j])
            }
        }
    }
    return res.join('')
};

console.log(frequencySort("tree"))