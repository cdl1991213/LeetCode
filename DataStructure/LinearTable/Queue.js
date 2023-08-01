// 队列
class Queue {
    constructor() {
        this.items = [];
    }

    // 入队
    enqueue(item) {
        this.items.push(item);
    }

    // 出队
    dequeue() {
        if (this.isEmpty()) {
            throw new Error('Queue is empty');
        }
        return this.items.shift();
    }

    // 查看队首元素
    front() {
        if (this.isEmpty()) {
            throw new Error('Queue is empty');
        }
        return this.items[0];
    }

    // 判断队列是否为空
    isEmpty() {
        return this.items.length === 0;
    }

    // 获取队列中元素个数
    size() {
        return this.items.length;
    }

    // 清空队列
    clear() {
        this.items = [];
    }
}

// 使用示例
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.front()); // 输出: 1

console.log(queue.dequeue()); // 输出: 1
console.log(queue.dequeue()); // 输出: 2

console.log(queue.isEmpty()); // 输出: false
console.log(queue.size()); // 输出: 1

queue.clear();
console.log(queue.isEmpty()); // 输出: true
