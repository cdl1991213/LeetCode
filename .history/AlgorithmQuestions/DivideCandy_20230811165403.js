/* 
    分糖果问题
*/
var DivideCandy = function(n,a,b){
    if(a+b == n){
        return 1
    }

    let oneCopy = Math.floor( (a+b) / n )
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
    if(a_count + b_count < n){
        // console.log(Math.floor(a / a_count) + a % a_count, Math.floor(b / b_count) + b % a_count )
        return Math.max( Math.floor(a / a_count) + a % a_count ,  Math.floor(b / b_count) + b % a_count )
    }else if(a_count + b_count == n){
        a = oneCopy + Math.floor(a / a_count) + a % a_count 
        b = oneCopy + Math.floor(b / b_count) + b % b_count 

        return Math.min(a,b)
    }else{

    }
    
}


console.log(DivideCandy(5,9,10))
