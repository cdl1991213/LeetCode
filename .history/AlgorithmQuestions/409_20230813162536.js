/* 
    409. 最长回文串
*/
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    // 贪心策略：使每种字符使用次数最多

    const n = s.length

    // 记录字符出现次数
    let map = new Map()

    for(let i=0; i<n; i++){
        if(!map.get(s[i])){
            map.set(s[i],1)
        }else{
            map.set(s[i], map.get(s[i]) + 1)
        }
    }

    for (const [key, value] of map) {
        
    }
};