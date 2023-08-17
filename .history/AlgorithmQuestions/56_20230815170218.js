/* 
    56. 合并区间
*/
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    const n = intervals.length

    intervals = intervals.sort((a,b)=>a[0]-b[0])

    // 当前区间最远
    let currentStart = intervals[0][0]
    let currentEnd = intervals[0][1]
    let res = []
    for(let i=1; i<n; i++){
        if(intervals[i][0] <= currentEnd){
            currentEnd = Math.max(currentEnd, intervals[i][1])
        }else{
            res.push([currentStart,currentEnd])
            currentStart = intervals[i][0]
            currentEnd = intervals[i][1]
        }
    }
    return res
};
console.log(merge([[1,3],[2,6],[8,10],[15,18]]))