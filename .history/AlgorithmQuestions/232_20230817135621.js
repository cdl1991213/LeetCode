/* 
    232. 用栈实现队列
*/
var MyQueue = function() {
    this.Queue = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.Queue.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    return this.Queue.shift()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.Queue[0]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.Queue.length == 0 ? true : false
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */