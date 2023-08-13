// var func = function(arr,x,y){
//     const n = arr.length

//     // 剪枝
//     if(n < 2){
//         return false
//     }

//     // 判断x在0位置和n-1位置
//     if((arr[0] == x && arr[1] == y) || (arr[n-1] == x && arr[n-2] == y)){
//         return true
//     }

//     // 判断x在其余位置
//     for(let i=1; i<n-1; i++){
//         if(arr[i] == x && (arr[i-1] == y || arr[i+1] == y)){
//             return true
//         }
//     }
//     return false
// }
// console.log(func([1,4,2,3],2,4))

// weightArr 权值数组、connectArr 连接数组
var func = function (weightArr, connectArr) {
    // 记录1~n位置(0~n-1索引) 能与其满足 染红条件的节点
    // 如，0位置能与1，2位置满足染红条件；1位置能与2位置满足染红条件，数组为[[1,2],[0,2],[0,1]]
    let newArr = Array.from({ length: weightArr.length }, () => []);
    for (let i = 0; i < connectArr.length; i++) {
        let index1 = connectArr[i][0] - 1;
        let index2 = connectArr[i][1] - 1;
        if (isPerfectSquare(weightArr[index1] * weightArr[index2])) {
            newArr[index1].push(index2);
            newArr[index2].push(index1);
        }
    }
    // 根据相邻节点的数量 从小到大排序（尽量先让相邻节点少的节点先染红）
    console.log(newArr)
    // newArr.sort((a, b) => a.length - b.length);
    let res = 0;
    for (let i = 0; i < newArr.length; i++) {
        console.log(i)
        console.log(newArr)
        // 节点永远无法染红
        if (newArr[i].length == 0) {
            continue;
        }
        // 与当前节点满足染红条件的节点，是否已经被染红
        let index = 0;
        while (newArr[newArr[i][index]].length == 0 && index < newArr[i].length) {
            index++;
            console.log('done')
        }
        if(index < newArr[i].length){
            // 染红，并清除染红的两个节点
            newArr[newArr[i][index]] = [];
            newArr[i] = [];
            res += 2;
        }
    }
    return res;
};

function isPerfectSquare(num) {
    // 计算num的平方根
    var sqrt = Math.sqrt(num);
    // 判断sqrt是否为整数
    return sqrt === Math.floor(sqrt);
}

console.log(
    func(
        [3, 3, 12],
        [
            [1, 2],
            [2, 3],
        ]
    )
);
