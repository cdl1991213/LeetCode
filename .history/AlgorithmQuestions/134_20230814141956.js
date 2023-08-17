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

    // 攒油量/耗油量
    let variationOil = new Array(gl)
    for(let i=0; i<gl; i++){
        variationOil[i] = gas[i] - cost[i]
    }

    
};