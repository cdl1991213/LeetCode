function f(x){
    return x > 0 ? x * f(x-1) : 2
}
let res = f(f(f(1)))
console.log(res)