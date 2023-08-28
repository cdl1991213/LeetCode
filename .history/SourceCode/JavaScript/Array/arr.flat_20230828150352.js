/* arr.flat([depth]) */
/* 
    按照一个指定深度递归遍历数组，将遍历到的所有元素合并为一个新数组返回
    实现方式
        1. reduce + concat                          扁平化，展开为一层
        2. reduce + concat + isArray + recursivity  展开为指定深度
        3. forEach + isArray + push + recyrsivity   展开为指定深度, forEach遍历数组会跳过元素
        4. forof + isArray + push + recyrsivity     展开为指定深度, forof遍历数组不会跳过元素，需要手动清除
        5. 栈stack                                  扁平化，展开为一层
*/
// 1. reduce + concat 扁平化，展开为一层
Array.prototype.arrFlat1 = function(){
    return this.reduce((acc,val) => acc.concat(val), [])
}

// 2. reduce + concat + isArray + recursivity  展开为指定深度
Array.prototype.arrFlat2 = function(depth = 1){
    const flatDeep = (arr, depth = 1) => {
        if(depth > 0){
            // 在指定深度内，执行展开
            return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, depth - 1) : val), [])
        }else{
            // 浅拷贝
            return arr.slice()
        }
    }
    
    return flatDeep(this, depth)
}

// 3. forEach + isArray + push + recyrsivity   展开为指定深度, forEach遍历数组会跳过元素
Array.prototype.arrFlat3 = function(depth = 1){
    let res = []
    (function flatDeep(arr, depth){
        arr.forEach(item => {
            if(depth > 0 && Array.isArray(item)){
                flatDeep(item,depth-1)
            }else{
                res.push(item)
            }
        });
    })(this, depth)
    
    return res
}

// 4. forof + isArray + push + recyrsivity     展开为指定深度, forof循环不能去除数组空位
Array.prototype.arrFlat4 = function(depth = 1){
    let res = []
    (function flatDeep(arr, depth){
        for (const item of arr) {
            if(depth > 0 && Array.isArray(item)){
                flatDeep(item,depth-1)
            }else{
                // 为防止undefined被重写，因此使用void 0
                if(item != void 0){
                    res.push(item)
                }
            }
        }
    })(this, depth)
    
    return res
}

// 5. 栈stack   扁平化，展开为一层
Array.prototype.arrFlat5 = function(){
    let stack = [...this]
    let res = []

    while(stack.length > 0){
        let next = stack.pop()
        if(Array.isArray(next)){
            // 栈顶为数组，将数组展开再压入栈
            stack.push(...next)
        }else{
            // 栈顶为元素，存入结果
            res.push(next)
        }
    }
    return res
    
}