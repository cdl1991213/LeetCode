var func = function(arr,x,y){
    const n = arr.length

    // 剪枝
    if(n < 2){
        return false
    }
    
    // 判断x在0位置和n-1位置
    if((arr[0] == x && arr[1] == y) || (arr[n-1] == x && arr[n-2] == y)){
        return true
    }

    // 判断x在其余位置
    for(let i=1; i<n-1; i++){
        if(arr[i] == x && (arr[i-1] == y || arr[i+1] == y)){
            return true
        }
    }
    return false
}
console.log(func([1,4,2,3],2,4))