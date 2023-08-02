// 基数排序（默认十进制）
function RadixSort(arr){
    const n = arr.length
    // 剪枝
    if(arr == null || n < 2) return

    // 进制
    const binary = 10
    // 获取最大位数
    const maxDigit = GetMaxDigit(arr)

    // 0 ~ maxDigit-1
    for(let digit=0; digit<maxDigit; digit++){
        // 基数数组（桶）
        let RadixArray = Array.from({length: binary}, () => []) //十进制(0~9)，准备10个桶

        // 将元素按照当前位数放入对应的桶中(入桶)
        // 0 ~ N-1
        for(let i=0; i<n; i++){
            // 获取数字的指定位数上的数字（从右边开始从0计数）
            let digitValue = GetDigit(arr[i], digit)
            RadixArray[digitValue].push(arr[i])
        }

        // 出桶指针
        let p = 0
        // 从桶中取出元素，按照当前位数排序(出桶)
        for(let i=0; i<binary; i++){
            while(RadixArray[i].length > 0){
                arr[p] = RadixArray[i].shift()
                p++
            }
        }
    }
}

// 获取数组的最大位数
function GetMaxDigit(arr){
    // 数组最大值
    let maxValue = Number.MIN_SAFE_INTEGER
    // 0 ~ N-1
    for(let i=0; i<arr.length; i++){
        maxValue = maxValue > arr[i] ? maxValue : arr[i]
    }

    // 最大位数
    let maxDigits = 0
    // 计算最大位数
    while(maxValue > 0){
        maxValue = Math.floor( maxValue / 10 )
        maxDigits++
    }
    return maxDigits
}

// 获取数字的指定位数上的数字（从右边开始从0计数）
function GetDigit(num, digit){
    return Math.floor(Math.abs(num) / Math.pow(10, digit)) % 10;
}

// 示例用法
const unsortedArray = [13, 25, 17, 100, 72, 5, 1998, 101];
RadixSort(unsortedArray);
console.log(unsortedArray); // 输出 [5, 13, 17, 25, 72, 100, 101, 1998]