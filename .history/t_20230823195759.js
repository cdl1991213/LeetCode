// console.log("abcdefg".substring(2,3))
// console.log(Object.is({},{}))
// let obj = {
//     "k1":"value",
//     "k2":["value"],
//     "k3":[{
//         "k4":"value"
//     }]
// }
// console.log(obj.k3.k4)

// var age = 10
// function fn(){
//     let age = 20
//     console.log(this.age)
// }

// var obj = {
//     age:5,
//     getAge:function(fn){
//         console.log(this.age)
//         fn()
//     }
// }

// console.log(obj.getAge(fn))

// let tree = {
//     "val":"root",
//     "name":"rootname",
//     "children":[
//         {
//             val:'xxx'
//         }
//     ]
// }

// console.log(tree.children)





//-------------------------------------2.230823
function deepUnique(arr) {
    const result = [];
    const seen = new Map();
  
    function isObject(obj) {
      return typeof obj === 'object' && obj !== null;
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
  const arr1 = [123, 'meili', '123', 'mogu', 123];
  console.log(deepUnique(arr1)); // [123, 'meili', '123', 'mogu']
  
  const arr2 = [123, [1, 2, 3], [1, "2", 3], [1, 2, 3], 'meili'];
  console.log(deepUnique(arr2)); // [123, 'meili', [1, 2, 3], [1, "2", 3]]
  
  const arr3 = [123, {a: 1}, {a: {b: 1}}, {a: "1"}, {a: {b: 1}}, 'meili'];
  console.log(deepUnique(arr3)); // [123, {a: 1}, {a: {b: 1}}, {a: "1"}, 'meili']
  