/* 
    根据以下要求，写一个数组去重函数
    1.传入的数组为[123,'meili','123',"mogu",123]，则输出[123,'meili','123',"mogu"]
    2.传入的数组为[123,[1,2,3],[1,"2",3],[1,2,3],'meili']，则输出[123,'meili',[1,2,3],[1,"2",3]]
    3.传入的数组为[123,{a:1},{a:{b:1}},{a:"1"},{a:{b:1}},'meili']，则输出[123,{a:1},{a:{b:1}},{a:"1"},'meili']
*/
function deepUnique(arr) {
    const result = [];
    const seen = new Map();

    function isObject(obj) {
        return typeof obj === "object" && obj !== null;
    }

    function compareArrays(arr1, arr2) {
        if (arr1.length !== arr2.length) {
            return false;
        }
        for (let i = 0; i < arr1.length; i++) {
            if (!isEqual(arr1[i], arr2[i])) {
                return false;
            }
        }
        return true;
    }

    function compareObjects(obj1, obj2) {
        const keys1 = Object.keys(obj1);
        const keys2 = Object.keys(obj2);
        if (keys1.length !== keys2.length) {
            return false;
        }
        for (const key of keys1) {
            if (!isEqual(obj1[key], obj2[key])) {
                return false;
            }
        }
        return true;
    }

    function isEqual(value1, value2) {
        if (isObject(value1) && isObject(value2)) {
            if (Array.isArray(value1) && Array.isArray(value2)) {
                return compareArrays(value1, value2);
            } else if (!Array.isArray(value1) && !Array.isArray(value2)) {
                return compareObjects(value1, value2);
            }
            return false;
        }
        return value1 === value2;
    }

    for (const item of arr) {
        let isDuplicate = false;
        for (const [index, seenItem] of seen) {
            if (isEqual(item, seenItem)) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            result.push(item);
            seen.set(result.length - 1, item);
        }
    }

    return result;
}

// 示例用法
const arr1 = [123, "meili", "123", "mogu", 123];
console.log(deepUnique(arr1)); // [123, 'meili', '123', 'mogu']

const arr2 = [123, [1, 2, 3], [1, "2", 3], [1, 2, 3], "meili"];
console.log(deepUnique(arr2)); // [123, 'meili', [1, 2, 3], [1, "2", 3]]

const arr3 = [
    123,
    { a: 1 },
    { a: { b: 1 } },
    { a: "1" },
    { a: { b: 1 } },
    "meili",
];
console.log(deepUnique(arr3)); // [123, {a: 1}, {a: {b: 1}}, {a: "1"}, 'meili']

/* 
  使用最简洁的代码实现indexOf方法（不使用indexOf方法） 
*/
function indexOf(arr, target, start = 0) {
    for (let i = start; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

// 示例用法
const myArray = [1, 2, 3, 4, 5];
console.log(indexOf(myArray, 3)); // 输出: 2
console.log(indexOf(myArray, 6)); // 输出: -1（表示未找到）
console.log(indexOf(myArray, 2, 2)); // 输出: -1（从索引 2 开始查找，但没有找到）
