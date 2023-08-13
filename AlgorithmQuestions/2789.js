/* 
    2798. 满足目标工作时长的员工数目
*/
/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    const n = hours.length

    let res = 0
    for(let i=0; i<n; i++){
        if(hours[i] >= target){
            res++
        }
    }
    return res
};