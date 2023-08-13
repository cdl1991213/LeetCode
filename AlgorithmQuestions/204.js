/* 
    204. 计数质数
*/
/**
 * @param {number} n
 * @return {number}
 */
/* 枚举 */
// var countPrimes = function(n) {
//     let res = 0
//     for(let i=2; i<n; i++){
//         if(IsPrimeNumber(i)){
//             res++
//         }    
//     }
//     return res

//     // 判断num是否为质数
//     function IsPrimeNumber(num){
//         for(let i=2; i<=Math.sqrt(num); i++){
//             if(num % i == 0){
//                 return false
//             }
//         }
//         return true
//     }
// };
/* 埃式筛 */
var countPrimes = function(n) {
    let res = 0
    // 质数表
    let IsPrimeNumber = new Array(n).fill(1)
    for(let i=2; i<n; i++){
        if(IsPrimeNumber[i]){
            res++
            // 更新质数表
            for(let j=Math.pow(i,2); j<n; j += i){  
                IsPrimeNumber[j] = 0
            }
        }
    }
    return res
};
console.log(countPrimes(10))