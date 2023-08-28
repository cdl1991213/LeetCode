/* 防抖 */
function Debounce(fun, delay){
    let timeout

    return function(...args){
        clearTimeout(timeout)

        timeout = setTimeout(() => {
            fun.apply(this, args)
        }, delay)
    }
}