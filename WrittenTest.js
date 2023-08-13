/* 1 */
// let line
// let Input = []
// while ((line = read_line()) != "") {
//     let arr = line.split(":")
//     Input.push(arr)
// }
// const n = Input.length
// let res = 0
// for(let i=0; i<n; i+=2){
//     let hou_cr = Input[i+1][0] - Input[i][0] < 0 ? (Input[i+1][0] - Input[i][0] + 24) : Input[i+1][0] - Input[i][0]
    
//     // 小时差需要-1
//     let min_cr = Input[i+1][1] - Input[i][1]
//     if(min_cr < 0){
//         hou_cr = hou_cr - 1
//         min_cr += 60
//     }

//     res += hou_cr * 60 + min_cr
// }
// console.log(res)

/* 2 */
let n = read_line().split("").map(Number)
let arr_TH = read_line().split(" ").map(Number)
let [T, H] = arr_TH
let line
let Input = []
while ((line = read_line()) != "") {
    line = line.split(" ").map(Number)
    Input.push(line)
}

Input = Input.sort((a,b) => b[2] - a[2])

let A = 0
let temp = 0
let temp_T = T, temp_H = H


for(let j=0; j<Input.length; j++){

    for(let i=j; i<Input.length; i++){
        if((Input[i][0] <= temp_T) && (Input[i][1] <= temp_H)){
            temp_T -= Input[i][0]
            temp_H -= Input[i][1]
            temp += Input[i][2]
        }
        A = temp > A ? temp : A
        if(temp_T <= 0 || temp_H <= 0){
            temp = 0
            temp_H = H
            temp_T = T
        }
    }
}


console.log(A)