// 单向链表
// 节点
class Node {
    constructor(data) {
        this.data = data; // 存储节点的数据
        this.next = null; // 存储指向下一个节点的指针
    }
}

// 单向链表
class LinkedList {
    constructor() {
        this.head = null; // 链表头节点
    }

    // 添加节点到链表尾部
    append(data) {
        const newNode = new Node(data);

        // 添加前没有节点，添加为头节点
        if (!this.head) {
            this.head = newNode;
            return;
        }

        // 添加至链表末尾
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    // 删除节点
    delete(data) {
        // 删除前没有节点
        if (!this.head) {
            return;
        }

        // 要删除的节点为头节点，头节点后移
        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }

        // 找到要删除的节点
        let current = this.head;
        while (current.next) {
            if (current.next.data === data) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }

    // 查找节点是否存在
    contains(data) {
        let current = this.head;
        while (current) {
            if (current.data === data) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    // 打印链表中的所有节点数据
    print() {
        let current = this.head;
        const result = [];
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        console.log(result.join(" -> "));
    }
}

// 测试单链表
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.print(); // 输出: 1 -> 2 -> 3

list.delete(2);
list.print(); // 输出: 1 -> 3

console.log(list.contains(3)); // 输出: true
console.log(list.contains(2)); // 输出: false
