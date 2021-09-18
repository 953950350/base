
class LinkedNode {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
class LinkedList {
    constructor() {
        this.head = new LinkedNode(null)
    }

    insert(value) {
        let current = this.head
        while (current.next) {
            current = current.next
        }
        current.next = new LinkedNode(value)
    }
    searchNode(value) {
        let current = this.head
        while (current.next) {
            current = current.next
            if (current.value === value) return current
        }
        return null
    }
    insertAfterValue(value, byValue) {
        let node = this.searchNode(byValue)
        if (!node) return null
        let newNode = new LinkedNode(value)
        newNode.next = node.next
        node.next = newNode
    }

}

// 判断数组是否有环，如果有返回如环节点
// 1. 使用快慢指针判断是否有环
// 2. 如果有环，将慢指针指向head，然后快慢指针每次前进一步，最终相遇的点就是入环点
var detectCycle = function(head) {
    if (!head || !head.next) return -1
    let slow = head
    let fast = head
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
        if (fast === slow) break
    }

    if (!fast || !fast.next) return -1

    slow = head
    while (slow !== fast) {
        slow = slow.next
        fast = fast.next
    }

    return slow
};

// 反转链表
// 注意指针保存不要丢失了
var reverseList = function(head) {
    let pre = null
    while (head) {
        let next = head.next
        head.next = pre
        pre = head
        head = next
    }
    return pre
};



// 206，141，21，19，876