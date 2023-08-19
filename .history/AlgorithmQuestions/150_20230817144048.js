/* 
    150. 逆波兰表达式求值
*/
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const n = tokens.length

    let Stack = []

    for(let i=0; i<n; i++){
        console.log(typeof(tokens))
    }
};
console.log(evalRPN(["2","1","+","3","*"]))