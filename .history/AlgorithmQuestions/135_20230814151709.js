/* 
    135. 分发糖果
*/
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    const n = ratings.length

    let candy = new Array(n).fill(1)

    // 先使糖果分配满足 当右评分比左评分大，右糖果比左糖果多
    for(let i=0; i<n-1; i++){
        if(ratings[i+1] > ratings[i]){
            candy[i+1] = candy[i] + 1
        }
    }
    // 使糖果分配满足，当右评分比左评分小，右糖果比左糖果少
    for(let i=n-2; i>=0; i--){
        if(ratings[i+1] < ratings[i]){
            candy[i] = Math.max(candy[i], candy[i+1] + 1)
        }
    }

    return candy.reduce((item1,item2)=>item1+item2)

};