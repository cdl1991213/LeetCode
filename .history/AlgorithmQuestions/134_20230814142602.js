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
    const gl = gas.length

    // 耗油量
    let variationOil = new Array(gl)
    // 总耗油量
    let allVariationOil = 0
    for(let i=0; i<gl; i++){
        variationOil[i] = gas[i] - cost[i]
        allVariationOil += variationOil[i]
    }

    if(allVariationOil < 0){
        return -1
    }

    // 当前耗油量
    let curVariationOil = 0
    // 起点
    let start = 0
    for(let i=0; i<gl; i++){
        curVariationOil += variationOil[i]
        if(curVariationOil <= 0){
            start = i+1
            curVariationOil = 0
        }
    }
    return start

    
};