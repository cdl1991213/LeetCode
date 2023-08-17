/* 
763. 划分字母区间
*/
/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    const n = s.length

    // 记录每个字母的end
    let map = new Map()

    for(let i=0; i<n; i++){
        map.set(s[i], i)
    }

    let lastFarthest = 0
    let currentFarthest = map.get(s[0])
    let res = []
    for(let i=0; i<n; i++){
        currentFarthest = Math.max(currentFarthest, map.get(s[i]))
        if(currentFarthest == i){
            res.push(currentFarthest - lastFarthest + 1)
            lastFarthest = currentFarthest
            continue
        }
    }
    return res


};
console.log(partitionLabels("aaaaaaaz"))