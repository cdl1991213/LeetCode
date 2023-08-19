/* 
    1047. 删除字符串中的所有相邻重复项
*/
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let Stack = []

    for(let i=0; i<s.length; i++){
        while(Stack.length > 0 && s[i] == Stack[Stack.length - 1]){
            Stack.pop()
            i++
        }

        Stack.push(s[i])
    }
    return Stack.join('')
};
console.log(removeDuplicates("abbaca"))