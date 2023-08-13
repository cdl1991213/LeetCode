var func = function(arr,x,y){
    const n = arr.length

    // 剪枝
    if(n < 2){
        return false
    }
    
    for(let i=1; i<n-1; i++){
        if((arr[0] == x && arr[1] == y) || (arr[n-1] == x && arr[n-2] == y)){
            return true
        }
        if(arr[i] == x && (arr[i-1] == y || arr[i+1] == y)){
            return true
        }
    }
    return false
}