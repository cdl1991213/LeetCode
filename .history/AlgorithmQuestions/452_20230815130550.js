/* 
    452. 用最少数量的箭引爆气球
*/
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    // 每根箭射爆尽量多的气球
    const n = points.length

    let res = 1

    points = points.sort((a,b)=> a[0]-b[0] )
    console.log(points)

    // 当前箭的最大x
    let maxX = points[0][1]

    for(let i=1; i<n; i++){
        if(points[i][0] > maxX){
            res++
            maxX = points[i][1]
        }
        maxX = Math.min(maxX, points[i][1])
    }
    return res
};
console.log(findMinArrowShots([[3,9],[7,12],[3,8],[6,8],[9,10],[2,9],[0,9],[3,9],[0,6],[2,8]]))