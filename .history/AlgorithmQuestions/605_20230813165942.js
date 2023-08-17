/* 
    605. 种花问题
*/
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    // 贪心策略：在每一段连续的0中，种植尽量多的花

    const fl = flowerbed.length
    let res = 0
    // 剪枝
    if(fl == 1){
        res = flowerbed[0] == 0 ? 1 : 0
        return res >= n
    }

    // 首尾
    if(flowerbed[0] == 0 && flowerbed[1] == 0){
        flowerbed[0] = 1
        res++
    }
    if(flowerbed[fl-1] == 0 && flowerbed[fl - 2] == 0){
        flowerbed[fl-1] == 1
        res++
    }

    // 记录连续的0
    let count = 0
    
    for(let i=1; i<fl; i++){
        // 中间
        if(flowerbed[i] == 1 && count >= 3){
            res += count % 2 == 0 ? Math.floor((count - 1) / 2) : Math.floor(count / 2)
            count = 0
        }else if(flowerbed[i] == 1){
            count = 0
        }else if(flowerbed[i] == 0){
            count++ 
        }
    }
    return res >= n
};
console.log(canPlaceFlowers([0,0,1,0,0],2))