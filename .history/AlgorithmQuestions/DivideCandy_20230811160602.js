/* 
    分糖果问题
*/
var DivideCandy = function(n,a,b){
    let multiple = Math.floor( (a + b) / n )

    if(Math.min(a,b) <= multiple){
        return Math.min(a,b)
    }

    let count = 0
    while(Math.min(a,b) > multiple){
        Math.min(a,b) -= n
        count++
    }


}
