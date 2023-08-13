/* 
    455. 分发饼干
*/
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
/* 单指针+枚举 */
var findContentChildren = function(g, s) {
    const gl = g.length
    const sl = s.length
    // 剪枝
    if(s == 0){
        return 0
    }

    g = g.sort((a,b) => a-b)
    s = s.sort((a,b) => a-b)

    let p = 0
    let res = 0
    for(let i=0; i<gl; i++){
        while(s[p] < g[i] && p < sl){
            p++
        }
        if(p >= sl){
            return res
        }
        res++
        p++
    }
    return res
};