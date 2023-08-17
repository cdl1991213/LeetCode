/* 
    435. 无重叠区间
*/
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    const n = intervals.length

    intervals = intervals.sort((a,b) => a[0]-b[0])
    console.log(intervals)

    // 当前区间end
    let curEnd = intervals[0][1]
    let res = 0

    for(let i=1; i<n; i++){
        if(intervals[i][0] < curEnd){
            res++        
        }
        curEnd = Math.min(curEnd, intervals[i][1])
        
    }
    return res
};
console.log(eraseOverlapIntervals([[0,2],[1,3],[2,4],[3,5],[4,6]]))