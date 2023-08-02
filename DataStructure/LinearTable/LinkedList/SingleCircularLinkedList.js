// 单向循环链表
// 节点
class Node {
    constructor(data) {
        this.data = data; // 存储节点的数据
        this.next = null; // 存储指向下一个节点的指针
    }
}

// 单向循环链表
class CircularLinkedList {
    constructor() {
        this.head = null; // 链表头节点
    }

    // 添加节点到链表尾部
    append(data) {
        const newNode = new Node(data);
        
        if (!this.head) {
            // 添加前没有节点，添加为头节点
            this.head = newNode;
            newNode.next = this.head; // 将最后一个节点的 next 指向头节点，形成循环
        } else {
            // 添加至链表末尾
            let current = this.head;
            while (current.next !== this.head) {
                current = current.next;
            }
            current.next = newNode;
            newNode.next = this.head; // 将最后一个节点的 next 指向头节点，形成循环
        }
    }

    // 删除节点
    delete(data) {
        // 删除前没有节点
        if (!this.head) {
            return;
        }

        // 要删除的节点为头节点
        if (this.head.data === data) {
            if (this.head.next === this.head) {
                // 只有一个节点的情况
                this.head = null;
            } else {
                let current = this.head;
                while (current.next !== this.head) {
                    current = current.next;
                }
                current.next = this.head.next; // 跳过头节点，删除头节点
                this.head = this.head.next; // 更新头节点
            }
            return;
        }

        // 找到要删除的节点
        let current = this.head;
        while (current.next !== this.head) {
            if (current.next.data === data) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }

    // 查找节点是否存在
    contains(data) {
        if (!this.head) {
            return false;
        }

        let current = this.head;
        do {
            if (current.data === data) {
                return true;
            }
            current = current.next;
        } while (current !== this.head);

        return false;
    }

    // 打印链表中的所有节点数据
    print() {
        if (!this.head) {
            console.log("Empty list");
            return;
        }

        let current = this.head;
        const result = [current.data];
        while (current.next !== this.head) {
            current = current.next;
            result.push(current.data);
        }
        console.log(result.join(" -> "));
    }
}

// 测试单向循环链表
const list = new CircularLinkedList();
list.append(1);
list.append(2);
list.append(3);
list.print(); // 输出: 1 -> 2 -> 3 -> 1

list.delete(2);
list.print(); // 输出: 1 -> 3 -> 1

console.log(list.contains(3)); // 输出: true
console.log(list.contains(2)); // 输出: false
