/* 
763. 划分字母区间
*/
/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    const n = s.length

    // 记录每个字母的start,end
    let letterCount = new Array(25)
    // ascii码偏移量
    let asciiOffset = 97

    for(let i=0; i<n; i++){
        // 当前字母对应索引
        let curAscii = String.fromCharCode(s[i]) - asciiOffset
        if(letterCount[ curAscii ] == undefined){
            letterCount[ curAscii ] = [i, i]
        }else{
            letterCount[ curAscii ][1] += 1  
        }
    }

};
console.log(partitionLabels("ababcbacadefegdehijhklij"))