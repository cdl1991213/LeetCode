/* 
    分糖果问题
*/
var DivideCandy = function(n,a,b){
    let oneCopy = Math.floor( (a + b) / n )
    console.log(oneCopy)

    if(a+b == n){
        return 1
    }

    if(Math.min(a,b) <= oneCopy){
        return Math.min(a,b)
    }

    let a_count = 0
    let b_count = 0
    while(a > oneCopy){
        a -= oneCopy
        a_count++
    }
    while(b > oneCopy){
        b -= oneCopy
        b_count++
    }

    return oneCopy + Math.min(a,b)
}

console.log(DivideCandy(4,7,10))
