/* 
    28. 找出字符串中第一个匹配项的下标
*/
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
/* KMP */
var strStr = function(haystack, needle) {
    const hn = haystack.length, nn = needle.length
    // 剪枝
    if(nn == 0){
        return 0
    }

    // next数组
    let next = new Array(nn)
    // 当匹配串的第一个字符，匹配不上。那么下一次匹配的字符应该仍为第一个字符
    next[0] = 0
    // i为后缀索引，j为前缀索引
    for(let i=1, j=0; i<nn; i++){
        while(j > 0 && needle[i] != needle[j]){
            j = next[j-1]
        }
        if(needle[i] == needle[j]){
            j++
        }
        // 当i+1位的字符匹配错误的时候，跳转至j位进行匹配
        next[i] = j
    }

    for(let i=0, j=0; i<hn; i++){
        while(j > 0 && haystack[i] != needle[j]){
            j = next[j-1]
        }
        if (haystack[i] == needle[j]) {
            j++;
        }
        if (j == nn) {
            return i - nn + 1;
        }
    }
    return -1
};