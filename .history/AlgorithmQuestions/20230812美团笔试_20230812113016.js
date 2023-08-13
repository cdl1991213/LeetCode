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
var func = function(weightArr, connectArr){
    let newArr = Array.from({length:weightArr.length}, ()=>[])
    for(let i=0; i<connectArr.length; i++){
        let index1 = connectArr[i][0]
        let index2 = connectArr[i][1]
        if(weightArr[index1] * weightArr[index2] == '完全平方数'){
            newArr[index1].push(index2)
            newArr[index2].push(index1)
        }
    }
    newArr.sort((a,b)=>a.length-b.length)
    let res = 0
    for(let i=0; i<newArr.length; i++){
        if(newArr[i].length == 0){
            continue
        }
        let index = 0
        while(newArr[ newArr[i][index] ].length == 0){
            index++
        }
        newArr[ newArr[i][index] ] = []
        newArr[i] = []
        res += 2
    }
}
console.log(func([3,3,12],[[1,2],[2,3]]))