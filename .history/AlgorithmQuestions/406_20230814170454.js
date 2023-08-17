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
    people = people.sort((a,b) => {
        if(b[0] == a[0]){
            return a[1] - b[1]
        }else{
            return b[0] - a[0]
        }
    })

    for(let i=0; i<n; i++){
        queueInsert(people, i, people[i][1])
    }
    return people

    function queueInsert(queue, index1, index2){
        let tmp = queue[index1]

        for(let i=index1; i>=index2+1; i++){
            queue[i] = queue[i-1]
        }

        queue[index2] = tmp
    }
};
console.log(reconstructQueue([[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]))