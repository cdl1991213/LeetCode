// console.log("abcdefg".substring(2,3))
// console.log(Object.is({},{}))
let obj = {
    "k1":"value",
    "k2":["value"],
    "k3":[{
        "k4":"value"
    }]
}
console.log(obj.k1.value)