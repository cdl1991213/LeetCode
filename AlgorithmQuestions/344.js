/* 
    344. 反转字符串
*/
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    const n = s.length
    let lp = 0, rp = n-1
    while(lp < rp){
        let tmp = s[lp]
        s[lp] = s[rp]
        s[rp] = tmp
        lp++
        rp--
    }
    return s
};
console.log(reverseString(["h","e","l","l","o"]))