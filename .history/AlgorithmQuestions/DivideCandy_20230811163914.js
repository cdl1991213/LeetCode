/* 
    分糖果问题
*/
var DivideCandy = function(n,a,b){
    if(a+b == n){
        return 1
    }

    let oneCopy = Math.floor( (a+b) / n )
    let count = 0
    while(a > oneCopy){
        a -= oneCopy
        count++
    }
    while(b > oneCopy){
        b -= oneCopy
        count++
    }
    
}

console.log(DivideCandy(4,7,10))
