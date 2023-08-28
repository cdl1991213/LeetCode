// function f(x){
//     return x > 0 ? x * f(x-1) : 2
// }
// let res = f(f(f(1)))
// console.log(res)



// function func1() {
//     // 获取t
//     let line = read_line();
//     let arr = line.split(" ").map(Number);
//     let t = arr[0];

//     for(let i=0; i<t; i++){
//         console.log(oneAsk())
//     }

//     function oneAsk() {
//         // 读取一行,获得n, k
//         let line0 = read_line();
//         let arr0 = line0.split(" ").map(Number);
//         let n = arr0[0];
//         let k = arr0[1];

//         // 读取一行，获取数组
//         let line1 = read_line();
//         let arr1 = line1.split(" ").map(Number);

//         while (k-- > 0) {
//             let line2 = read_line();
//             let arr2 = line2.split(" ").map(Number);
//             let u = arr2[0];
//             let v = arr2[1];

//             arr1[u] += 1;
//             arr1[v] -= 1;
//         }
//         return isReverseSort(arr1);
//     }

//     function isReverseSort(arr){
//         for(let i=1; i<arr.length; i++){
//             if(arr[i] <= arr[i-1]){
//                 return "No"
//             }
//         }
//         return "Yes"
//     }
// }
// console.log(func1())




// function countConstructWays(a) {
//     const totalSum = a.reduce((sum, num) => sum + num, 0);
//     let count = 0;

//     function constructB(index, currentSum) {
//         if (currentSum > totalSum) {
//             return;
//         }

//         if (index === a.length) {
//             if (currentSum === totalSum) {
//                 count++;
//             }
//             return;
//         }

//         for (let i = 1; i <= totalSum; i++) {
//             if (i !== a[index]) {
//                 constructB(index + 1, currentSum + i);
//             }
//         }
//     }

//     constructB(0, 0);
//     return count;
// }

// const a = [1, 2, 3];
// const ways = countConstructWays(a);
// console.log("Number of construct ways:", ways);
