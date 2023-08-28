function Promiseall(interator){
    return new Promise((reject, resolve) => {
        let arr = Array.from = interator
        let res = []
        let count = 0
        for(let i=0; i<arr.length; i++){
            Promise.resolve(arr[i])
                .then((item) => {
                    res[i] = item
                    count++
                    if(count == arr.length){
                        resolve(res)
                    }
                })
                .catch(e => reject(e))
        }
    })
}

class AsyncQueue{
    constructor(){
        this.queue = []
        this.running = false
    }

    push(fun){
        return new Promise((reject, resolve) => {
            // 封装fun
            this.queue.push(
                async() => {
                    this.running = true
                    try{
                        let res = await fun()
                        resolve(res)
                    }
                    catch(e){
                        reject(e)
                    }
                    this.running = false
                    this.queue.shift()?.()
                }
            )
            if(!this.running){
                this.queue.shift()?.()
            }
        })
    }
}

function Debounce(func){
    let timeoutid
    return function(...args){
        clearTimeout(timeoutid)

        setTimeout(()=>{
            func.apply(this, args)
        },delay)
    }
}

function Throttle(func){
    let lastTime

    return function(...args){
        let curTime = Date.now()
        if(curTime - lastTime >= delay){
            func.apply(this, args)
            lastTime = curTime
        }
    }
}


class AsyncQueue{
    constructor(){
        this.queue = []
        this.running = false
    }

    push(func){
        return new Promise((reject, resolve) => {
            this.queue.push(
                async() => {
                    this.running = true
                    try{
                        let res = await func()
                        resolve(res)
                    }catch(e){
                        reject(e)
                    }
                    this.running = false
                    this.queue.shift()?.()
                }
                )
            if(!this.running){
                this.queue.shift()?.()
            }
        })
    }
}