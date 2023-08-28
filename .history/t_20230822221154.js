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

let tree = {
    "val":"root",
    "name":"rootname",
    "children":[
        {
            val:'xxx'
        }
    ]
}

console.log(tree.children == undefined)