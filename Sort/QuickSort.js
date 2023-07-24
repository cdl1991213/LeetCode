// 快速排序
export function QuickSort(arr){
    const n = arr.length

    // 剪枝
    if(n < 2){
        return arr
    }

    // 等概率随机选择位置作为基准位置, 使快排的平均时间复杂度保持在O(N·logN)水平
    Swap(arr, L, L + Math.floor( Math.random() * (R-L+1) ))

    LocalRecursiveFunction(arr)

    // 局部递归函数体
    function LocalRecursiveFunction(arr, L=0, R=n-1){
        // 当子数组长度为0、1为递归最小单位，默认有序
        // 长度为0时，L>R; 长度为1时，L==R
        if(L >= R){
            return
        }

        // 本次小于区、大于区划分, 获取小于区、大于区边界
        let [lp, rp] = Partition(arr, L, R)
        
        // 对小于区、大于区分别递归进行快速排序
        if(lp > 0){
            LocalRecursiveFunction(arr, L, lp-1)
        }
        if(rp < n-1){
            LocalRecursiveFunction(arr, rp+1, R)
        }
    }

    // 划分小于区、大于区
    function Partition(arr, L, R){
        // 小于区、大于区指针
        let lp = L, rp = R
        // 确认基准值(分区的第一位)
        let baseValue = arr[L]

        for(let i=L+1; i<=rp; i++){
            if(arr[i] < baseValue){
                Swap(arr, i, lp)
                lp++
            }else if(arr[i] > baseValue){
                Swap(arr, i, rp)
                rp--
                i--
            }else{
                // pass
            }
        }
        return [lp, rp]
    }

    function Swap(arr, index1, index2){
        let temp = arr[index1]
        arr[index1] = arr[index2]
        arr[index2] = temp
    }

    return arr
}





/* 
    荷兰国旗问题1
*/
// 非常规方法（使用辅助数组）
function FlagTheNetherlands1WithAssistArray(arr, targetNum){
    const n = arr.length
    // 辅助数组
    let assistArr = new Array(n)
    // 辅助数组指针
    let lp = 0, rp = n-1

    for(let i=0; i<n; i++){
        if(arr[i] <= targetNum){
            assistArr[lp] = arr[i]
            lp+=1
        }else{
            assistArr[rp] = arr[i]
            rp-=1
        }
    }

    // 辅助数组覆盖原数组
    for(let i=0; i<n; i++){
        arr[i] = assistArr[i]
    }
}

// 非常规方法(小于等于区、大于区)(与快排原理相似)
function FlagTheNetherlands1WithChangeInplace(arr, targetNum){
    const n = arr.length
    // 小于等于区的指针
    let p = 0

    for(let i=0; i<n; i++){
        if(arr[i] <= targetNum){
             // 将<=的数放入小于等于区，小于等于区右移
            let temp = arr[p]
            arr[p] = arr[i]
            arr[i] = temp
            p+=1
        }else{
            // 大于区
        }
    }
}

/* 
    荷兰国旗问题2
*/
// 非常规方法(使用辅助数组)
function FlagTheNetherlands2WithAssistArray(arr, targetNum){
    const n = arr.length
    // 辅助数组
    let assistArr = new Array(n)
    // 辅助数组指针
    let lp = 0, rp = n-1

    for(let i=0; i<n; i++){
        if(arr[i] < targetNum){
            assistArr[lp] = arr[i]
            lp+=1
        }else if(arr[i] > targetNum){
            assistArr[rp] = arr[i]
            rp-=1
        }
    }

    for(let i=lp; i<=rp; i++){
        assistArr[i] = targetNum
    }

    for(let i=0; i<n; i++){
        arr[i] = assistArr[i]
    }
}

// 非常规方法(小于区、等于区、大于区)(与快排原理相似)
function FlagTheNetherlands2WithChangeInplace(arr, targetNum){
    const n = arr.length
    // 小于区，大于区指针, 遍历指针
    let lp = 0, rp = n-1, p = 0

    while(p <= rp){
        if(arr[p] < targetNum){
            // 将<的数放入小于区，小于区右移
            let temp = arr[p]
            arr[p] = arr[lp]
            arr[lp] = temp
            lp++
            p++
        }else if(arr[p] > targetNum){
            // 将>的数放入大于区，大于区左移
            let temp = arr[p]
            arr[p] = arr[rp]
            arr[rp] = temp
            rp--
        }else{
            // 等于区
            p++
        }
    }
}

// 示例用法
// const unsortedArray = [5, 2, 9, 1, 5, 6];
// const sortedArray = QuickSort(unsortedArray);
// console.log(sortedArray); // 输出 [1, 2, 5, 5, 6, 9]