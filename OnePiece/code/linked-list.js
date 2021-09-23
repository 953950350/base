
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

// 合并两个有序链表
var mergeTwoLists = function(l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;
    let result = null

    if (l1.val < l2.val) {
        result = l1
        l1 = l1.next;
    } else {
        result = l2
        l2 = l2.next
    }

    let current = result
    while(l1 && l2) {
        if (l1.val < l2.val) {
            current.next = l1
            l1 = l1.next;
        } else {
            current.next = l2
            l2 = l2.next
        }
        current = current.next
    }
    if (l1) {
        current.next = l1
    }
    if (l2) {
        current.next = l2
    }
    return result
};

// 19.移除链表倒数第n个节点
var removeNthFromEnd = function(head, n) {
    if (!head) return null
    let fast = head
    let i = n + 1
    while (i && fast) {
        i--
        fast = fast.next
    }
    if (i) {
        if (i === 1) {
            head = head.next
        }
        return head
    }
    let slow = head
    while (fast) {
        fast = fast.next
        slow = slow.next
    }
    if (slow.next) {
        slow.next = slow.next.next
    }
    return head
};

// 876. 查找链表中点
var middleNode = function(head) {
    let slow = head
    let fast = head
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }
    return slow
};

// 23. 合并k个排序数组
var mergeKLists = function(lists) {
    lists = lists.filter(item => !!item)
    if (!lists.length) return null
    let result = findMini(lists)
    let current = result
    while(lists.length > 1) {
        current.next = findMini(lists)
        current = current.next
    }
    if (lists.length) {
        current.next = lists[0]
    }
    return result
};

function findMini(lists) {
    let result = null
    let index = 0
    for(let i = 0; i < lists.length; i++) {
        if (i === 0) result = lists[i]
        if (lists[i].val < result.val) {
            result = lists[i]
            index = i
        }
    }
    lists[index] = lists[index].next
    if (!lists[index]) {
        lists.splice(index, 1)
    }
    return result
}

// 206，141，21，19，876