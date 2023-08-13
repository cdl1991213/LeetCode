/* 
    845. 数组中的最长山脉   
*/
/**
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function(arr) {
    const n = arr.length

    // 最长山脉
    let res = 0 
    for(let i=1; i<n-1; i++){
        // 左山脉，右山脉
        let left = 0, right = 0
        // 左指针，右指针
        let lp = i,rp = i
        while(lp > 0 && arr[lp] > arr[lp-1] ){
            left++
            lp--
        }
        while(rp < n-1 && arr[rp] > arr[rp+1]){
            right++
            rp++
        }

        if(left > 0 && right > 0){
            res = Math.max(res, left + right + 1)
        }else{
            continue
        } 
    }
    return res
};
console.log(longestMountain([2,1,4,7,3,2,5]))