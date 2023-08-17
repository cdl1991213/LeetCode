/* 递归法 */
/* 
    题目：在数组arr[L…R]范围上求最大值
*/
function Recursive(arr, L, R){
    // 基本情况：当L等于R时，数组只有一个元素，直接返回该元素即可
    if(L == R){
        return arr[L]
    }

    // 获取中间值索引, 注意上限值溢出
    let midValueIndex = L + Math.floor( (R - L) / 2 )

    // 分别在左半部分和右半部分递归求最大值
    let leftMax = Recursive(arr, L, midValueIndex)
    let rightMax = Recursive(arr, midValueIndex + 1, R)

    // 合并子问题的结果，得到整个范围内的最大值
    return Math.max(leftMax, rightMax)
}

// 示例用法
// const arr = [3, 9, 1, 7, 2, 8, 5];
// const maxInRange = Recursive(arr, 0, arr.length - 1);
// console.log("最大值为:", maxInRange); // 输出: 最大值为: 9