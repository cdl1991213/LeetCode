/* 
    134.加油站
*/
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    // 从某一个点出发后，先攒尽量多的油，再消耗油
    const n = gas.length

    // 总耗油量
    let allVariationOil = 0
    // 当前耗油量
    let curVariationOil = 0
    // 起点
    let start = 0
    for(let i=0; i<n; i++){
        allVariationOil += gas[i] - cost[i]
        curVariationOil += gas[i] - cost[i]
        if(curVariationOil < 0){
            start = i+1
            curVariationOil = 0
        }
    }
    return allVariationOil < 0 ? -1 : start
};
console.log(canCompleteCircuit([3,1,1],[1,2,2]))