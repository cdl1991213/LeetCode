// 字符串
// 1.查找
let str = "Hello"
let res = str.charAt(1) //e
res = str.search("lo")  //3

// 2.重复复制
res = str.repeat(2) //HelloHello

// 3.替换
res = str.replace("l", "t") //Hetlo
res = str.replaceAll("l", "t")  //Hetto

// 4.提取
// (start, end)大于0，从前面计数，小于0，从后面计数
res = str.slice(1, 2)   //e
// (start, end)小的数会作为起始位置参数，大的数会作为结束位置参数
res = str.substring(start, end)

// 5.分割
res = str.split("e")    //[H, llo]

// 6.转换大小写
res = str.toLowerCase() //hello
res = str.toUpperCase() //HELLO

// 7.删除两端空白符
str = "   Hello   "
res = str.trim()    //Hello