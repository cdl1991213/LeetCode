/* 
    225. 用队列实现栈
*/
var MyStack = function() {
    this.Stack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.Stack.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.Stack.pop()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.Stack[this.Stack.length - 1]
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.Stack.length == 0 ? true : false
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */