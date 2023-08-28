function f(x){
    return ((x>0)?x*f(x-1):2)
}
console.log(f(f(f(1))))