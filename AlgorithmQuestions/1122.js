/* 
    1122. 数组的相对排序
*/
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
/* api */
var relativeSortArray = function(arr1, arr2) {
    const n1 = arr1.length, n2 = arr2.length

    let record = new Array(n2).fill(0)
    let endingArray = []
    for(let i=0; i<n1; i++){
        if(arr2.indexOf(arr1[i]) >= 0){
            record[arr2.indexOf(arr1[i])]++
        }else{
            endingArray.push(arr1[i])
        }
    }

    endingArray = endingArray.sort((a,b) => a-b)

    let res = []
    for(let i=0; i<n2; i++){
        for(let j=0; j<record[i]; j++){
            res.push(arr2[i])
        }
    }
    res = res.concat(endingArray)
    return res
};

/*   */