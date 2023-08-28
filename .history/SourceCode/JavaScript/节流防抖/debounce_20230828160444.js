/* 防抖 */
/* 
    高频操作优化为只在最后一次执行
*/
function Debounce(fun, delay){
    let timeout

    return function(...args){
        // 新的触发，清空定时器
        clearTimeout(timeout)
        
        // 重新计时
        timeout = setTimeout(() => {
            fun.apply(this, args)
        }, delay)
    }
}