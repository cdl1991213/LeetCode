/* 
    406. 根据身高重建队列
*/
/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    const n = people.length

    // 对h维度进行贪心
    people = people.sort((a,b) => b[0] - a[0] )
    console.log(people)
    // 

    // for(let i=0; i<n; i++){

    // }
};
console.log(reconstructQueue([[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]))