// 双向链表
// 节点
class Node {
    constructor(data) {
        this.data = data; // 存储节点的数据
        this.prev = null; // 存储指向前一个节点的指针
        this.next = null; // 存储指向下一个节点的指针
    }
}

// 双向链表
class DoublyLinkedList {
    constructor() {
        this.head = null; // 链表头节点
        this.tail = null; // 链表尾节点
    }

    // 添加节点到链表尾部
    append(data) {
        const newNode = new Node(data);

        if (!this.head) {
            // 添加前没有节点，添加为头节点
            this.head = newNode;
            this.tail = newNode;
        } else {
            // 添加至链表末尾
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    // 删除节点
    delete(data) {
        // 删除前没有节点
        if (!this.head) {
            return;
        }

        let current = this.head;
        while (current) {
            if (current.data === data) {
                if (current === this.head && current === this.tail) {
                    // 要删除节点为头节点，且同时为尾节点
                    this.head = null;
                    this.tail = null;
                } else if (current === this.head) {
                    // 要删除节点为头节点
                    this.head = current.next;
                    this.head.prev = null;
                } else if (current === this.tail) {
                    // 要删除的节点为尾节点
                    this.tail = current.prev;
                    this.tail.next = null;
                } else {
                    // 找到要删除的节点
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                }
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
        console.log(result.join(" <-> "));
    }
}

// 测试双向链表
const list = new DoublyLinkedList();
list.append(1);
list.append(2);
list.append(3);
list.print(); // 输出: 1 <-> 2 <-> 3

list.delete(2);
list.print(); // 输出: 1 <-> 3

console.log(list.contains(3)); // 输出: true
console.log(list.contains(2)); // 输出: false
