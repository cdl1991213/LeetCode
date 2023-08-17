/* 
    长度为n一个数组 查看x和y是否相邻，   
    例子： 
    数组：1 4 2 3   
    2 4 
    输出yes
*/

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


/* 
    一个长度为n的字符串，将其从左到由平铺成一个矩阵（先平铺第一行，然后第二行，矩阵有x行y列，必须x*y = n）
    该矩阵的权值定义为这个矩阵的连通块数量，希望最终矩阵的权值尽可能小，求出最小权值
    定义，上下左右四个方向相邻的相同字符是联通的
    输入
        9
        aababbabb
        shuchu:
        2
    说明：
        平铺为3*3的举证：
        aab
        abb
        abb
        共两个连通块，4个a和5个b
*/


/* 
    一棵树，每个节点有一个权值。初始每个节点都是白色。
    小梅有若干次操作，每次操作可以选择两个相邻的节点，
    如果他们都是白色且权值的乘积为完全平方数，就可以吧这两个节点同时染红，最多可以染红几个节点
    输入：
        3 
        3 3 12
        1 2
        2 3
    第一行：节点的数量，
    第二行：每个节点的权值
    接下来的n-1行，每行输出两个正整数u，v代表节点u和v有一条变连接
*/
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
    // newArr.sort((a, b) => a.length - b.length);
    let res = 0;
    for (let i = 0; i < newArr.length; i++) {
        // 节点永远无法染红
        if (newArr[i].length == 0) {
            continue;
        }
        // 与当前节点满足染红条件的节点，是否已经被染红
        let index = 0;
        while (
            index < newArr[i].length &&
            newArr[newArr[i][index]].length == 0
        ) {
            index++;
        }
        if (index < newArr[i].length) {
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
