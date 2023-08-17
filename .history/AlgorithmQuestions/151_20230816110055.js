/* 
    151. 反转字符串中的单词
*/
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const n = s.length
    let arr = Array.from(s)

    // 获取左右边界
    let leftBorder = 0, rightBorder = n-1

    while(leftBorder < rightBorder && arr[leftBorder] == ' '){
        leftBorder++
    }
    if(leftBorder == rightBorder){
        return ''
    }
    while(rightBorder > leftBorder && arr[rightBorder] == ' '){
        rightBorder--
    }

    // 去除多余空格
    let lp = 0, rp = leftBorder
    while(rp <= rightBorder){
        if(arr[rp] != ' ' || (arr[rp] == ' ' && arr[rp-1] != ' ')){
            arr[lp] = arr[rp]
            lp++
        }
        rp++
    }
    // 整体翻转
    let l = 0, r = lp-1
    while(l < r){
        [arr[l] , arr[r]] = [arr[r], arr[l]]
        l++
        r--
    }

    let start = 0
    for(let i=0; i<lp; i++){
        if(i == lp - 1 || arr[i + 1] == ' '){
            let left = start,right = i
            while(left<right){
                [arr[left], arr[right]] = [arr[right], arr[left]]
                left++
                right--
            }
            start = i+2
        }
    }

    // console.log(arr, lp)
    return arr.slice(0,lp).join('')

};
console.log(reverseWords('  hello world  '))