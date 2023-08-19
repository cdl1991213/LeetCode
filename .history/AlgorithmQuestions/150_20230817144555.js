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
    let left, right
    for(let i=0; i<n; i++){
        switch(tokens[i]){
            case '+':
                right = Stack.pop()
                left = Stack.pop()
                Stack.push(left + right)
                break
            case '-':
                right = Stack.pop()
                left = Stack.pop()
                Stack.push(left - right)
                break
            case '*':
                right = Stack.pop()
                left = Stack.pop()
                Stack.push(left * right)
                break
            case '/':
                right = Stack.pop()
                left = Stack.pop()
                Stack.push(left / right)
                break
            default:
                Stack.push(tokens[i])
                break
        }
    }
    return Stack.pop()
};
console.log(evalRPN(["2","1","+","3","*"]))