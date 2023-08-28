/* 节流 */
/* 
    每隔一段时间执行一次操作
*/
// 时间戳版本
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

// 定时器版本
function throttle(fun, delay){
    let timeout = null

    return function(...args){
        if(!timeout){
            timeout = setTimeout(() => {
                fun.apply(this, args)
                timeout = null
            }, delay)
        }
    }
}