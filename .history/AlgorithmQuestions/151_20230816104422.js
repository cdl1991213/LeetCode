/* 
    151. 反转字符串中的单词
*/
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const n = s.length

    // 获取左右边界
    let leftBorder = 0, rightBorder = n-1

    while(leftBorder < rightBorder && s[leftBorder] == ' '){
        leftBorder++
    }
    if(leftBorder == rightBorder){
        return ''
    }
    while(rightBorder > leftBorder && s[rightBorder] == ' '){
        rightBorder--
    }

    // 去除多余空格
    let lp = 0, rp = leftBorder
    while(rp <= rightBorder){
        if(s[rp] != ' ' || (s[rp] == ' ' && s[rp-1] != ' ')){
            console.log(typeof(s[lp]), typeof(s[rp]))
            s[lp] = s[rp]
            lp++
        }
        rp++
    }
    // 整体翻转
    // let l = lp, r = rp
    // while(l < r){
    //     [s[l] , s[r]] = [s[r], s[l]]
    // }


};
console.log(reverseWords('  hello world  '))