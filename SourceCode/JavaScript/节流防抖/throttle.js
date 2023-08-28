/* 节流 */
function throttle(fun, delay){
    let lastTime = 0

    return function(...args){
        let curTime = Date.now()
        if(curTime - lastTime >= delay){
            fun.apply(this, args)
            lastTime = curTime
        }
    }
}