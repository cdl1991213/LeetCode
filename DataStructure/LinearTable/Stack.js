// 栈
class Stack {
    constructor() {
        this.items = [];
    }

    // 入栈
    push(item) {
        this.items.push(item);
    }

    // 出栈
    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.items.pop();
    }

    // 查看栈顶元素
    peek() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.items[this.items.length - 1];
    }

    // 判断栈是否为空
    isEmpty() {
        return this.items.length === 0;
    }

    // 获取栈中元素个数
    size() {
        return this.items.length;
    }

    // 清空栈
    clear() {
        this.items = [];
    }
}

// 使用示例
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.peek()); // 输出: 3

console.log(stack.pop()); // 输出: 3
console.log(stack.pop()); // 输出: 2

console.log(stack.isEmpty()); // 输出: false
console.log(stack.size()); // 输出: 1

stack.clear();
console.log(stack.isEmpty()); // 输出: true
