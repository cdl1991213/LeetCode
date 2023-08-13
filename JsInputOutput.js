// JS在OJ中的输入与输出

/* 输入 */

// 读取单行
let line0 = read_line();        // 上限1024个字符，超过上限使用gets()

line0 = line0.split(" ");       // 分割为数组
line0 = line0.map(Number);      // 将数组元素由字符串转化为数字

let line1 = JSON.parse(line);   // 输入为单行数组/单行对象

let line2 = gets(n);            // 读取n个字符
line2 = gets(n).trim();         // 读取字符末尾含有回车，需要使用trim()去除回车

// 读取多行
let line;
while ((line = read_line()) != "") {
    let arr = line.split(" ").map(Number);
    let a = parseInt(arr[0]);
    let b = parseInt(arr[1]);
}

// 读取一个长整数
readInt();

// 读取一个浮点型
readDouble();

/* 输出 */
