// 二分查找

/* 
    题目：在一个有序数组中，找某个数是否存在 
*/
// function BinarySearch(arr, targetNum){
//     const n = arr.length
//     // 记录当前区间的范围
//     let left = 0, right = n-1

//     // 剪枝
//     if(arr == null || n == 0){
//         return false
//     }else if(n == 1){
//         return arr[0] == targetNum ? true : false
//     }

//     // 缩小区间
//     while(right >= left){
//         // 获取中间值的索引
//         let midValueIndex = Math.floor((right + left)/2)

//         if(targetNum == arr[midValueIndex]){
//             return true
//         }else if(targetNum > arr[midValueIndex]){
//             //targetNum只会出现在当前区间的右半部分
//             left = midValueIndex + 1
//         }else{
//             //targetNum只会出现在当前区间的左半部分
//             right = midValueIndex - 1
//         }
//     }
//     return false
// }

// // 示例用法
// const sortedArray = [11, 12, 22, 25, 34, 64, 90];
// const targetNumber = 25;
// const isFound = BinarySearch(sortedArray, targetNumber);
// console.log(isFound); // 输出 true

/* 
    题目：在一个有序数组中，找>=某个数最左侧的位置
*/
// function BinarySearch(arr, targetNum){
//     const n = arr.length
//     // 记录当前区间的范围
//     let left = 0, right = n-1
//     // 记录当前最左侧位置
//     let leftMostIndex = n-1

//     // 剪枝
//     if(arr == null || n == 0){
//         return -1
//     }else if(n == 1){
//         arr[0] >= targetNum ? 0 : -1
//     }else if(arr[n-1] < targetNum){
//         return -1
//     }

//     // 缩减区间
//     while(right >= left){
//         // 获取中间值索引
//         let midValueIndex = Math.floor((right + left) / 2)

//         if(arr[midValueIndex] >= targetNum){
//             // 找到新的最左侧位置，并且左半部分区间还可能存在arr[i] >= targetNum
//             leftMostIndex = midValueIndex
//             right = midValueIndex - 1
//         }else{
//             // 右半部分区间可能存在arr[i] >= targetNum
//             left = midValueIndex + 1
//         }
//     }
//     return leftMostIndex
// }

// // 示例用法
// const sortedArray = [2, 3, 5, 7, 10, 13, 20];
// const targetNumber = 8;
// const leftmostPosition = BinarySearch(sortedArray, targetNumber);
// console.log(leftmostPosition); // 输出 4 (对应元素为 10)

/* 
    局部最小值问题（无序数组，且相邻值不相等）
    局部最小值的定义：
        1. arr[0]<arr[1]，即arr[0]为局部最小
        2. arr[n-1]<arr[n-2]，即arr[n-1]为局部最小
        3. arr[i-1]>arr[i] && arr[i]<arr[i+1]，即arr[i]为局部最小
*/
function BinarySearch(arr){
    const n = arr.length
    // 记录当前区间的范围
    let left = 0, right = n-1
    
    // 剪枝
    if(arr == null || n < 2){
        return null
    }

    // 判断arr[0]和arr[n-1]是否为局部最小值
    if(arr[0] < arr[1]){
        return 0
    }else if(arr[n-1] < arr[n-2]){
        return n-1
    }

    // 缩减区间
    while(right >= left){
        // 获取中间值索引
        let midValueIndex = Math.floor((right + left) / 2)

        if(arr[midValueIndex-1] > arr[midValueIndex] && arr[midValueIndex] < arr[midValueIndex+1]){
            return midValueIndex
        }else if(arr[midValueIndex-1] < arr[midValueIndex]){
            // 左半部分区间一定存在局部最小值
            right = midValueIndex - 1
        }else{
            // 右半部分区间一定存在局部最小值
            left = midValueIndex + 1
        }
    }  
    return null
}

// 示例用法
// const unsortedArray = [9, 6, 3, 4, 5, 7, 8];
// const localMinimumIndex = BinarySearch(unsortedArray);
// console.log(localMinimumIndex); // 输出 2 (对应元素为 3)