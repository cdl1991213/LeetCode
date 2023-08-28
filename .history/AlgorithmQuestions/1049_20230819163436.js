/* 
    1049. 最后一块石头的重量 II
*/
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function(stones) {
    // n个石头, 每个石头只能取一次
    // 重量 = 价值 = stones[i]
    // 背包：承重sum / 2

    // dp数组：dp[i][j]表示，在 石头0 ~ 石头i 中选择，承重为j的背包所背的最大价值为dp[i][j]
    let sum = stones.reduce((item1, item2) => item1 + item2)
    let dp = Array.from({length: stones.length}, () => new Array(Math.floor(sum / 2)))

    // dp数组初始化
    // 承重为0
    for(let i=0; i<stones.length; i++){
        dp[i][0] = 0
    }
    // 仅物品0
    for(let j=0; j<=Math.floor(sum /2); j++){
        if(j >= stones[0]){
            dp[0][j] = stones[0]
        }else{
            dp[0][j] = 0
        }
    }

    // 遍历
    for(let i=1; i<stones.length; i++){
        for(let j=1; j<=Math.floor(sum /2); j++){
            // 递推公式
            // 取石头i
            let geti = (j>=stones[i]) ? dp[i-1][j-stones[i]] + stones[i] : 0
            // 不取石头i
            let noGeti = dp[i-1][j]
            dp[i][j] = Math.max(geti, noGeti)
        }
    }

    return sum - dp[stones.length - 1][Math.floor(sum /2)] * 2

};
console.log(lastStoneWeightII([2,7,4,1,8,1]))