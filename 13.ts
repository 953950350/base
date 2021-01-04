function hasLoop(head) {
    let cur = head
    let set = new Set()
    while(cur) {
        if (set.has(cur)) return cur
        set.add(cur)
        cur = cur.next
    }

    return null
}

function hasLoop2(head) {
    if (!head || !head.next || !head.next.next) return null
    let slow = head.next
    let fast = head.next.next

    while(slow !== fast) {
        if (!slow.next || !fast.next.next) return null
        slow = slow.next
        fast = fast.next.next
    }
    fast = head
    while(fast !== slow) {
        fast = fast.next
        slow = slow.next
    }
    return fast
}

function ListNode(val) {
    this.val = val
    this.next = null
}

function append(list, val) {
    while(list.next) {
        list = list.next
    }
    if (val instanceof ListNode) {
        list.next = val
    } else {
        list.next = new ListNode(val)
    }
}

let head = new ListNode(1)
let next1 = new ListNode(2)
append(head, next1)
append(head, new ListNode(3))
append(head, new ListNode(4))
append(head, new ListNode(5))
append(head, next1)

console.log(hasLoop2(head))


// 1、查找两个链表是否有环
// 2、 如果有环记录入环的节点
// 3、两个都没有环：两个有环链表的相交问题
// 4、两个都有环：两个有环链表的相交问题
// 5、都没有环不可能相交
// 6、两个无环链表相交的条件是：尾节点一定是同一个节点。
// 7. 两个有环链表相交情况：入环节点是同一个节点时相交，问题可转化为无环链表求相交问题
// 入环节点不是同一个节点时，从第一个入环节点开始向下走，看是否能找到第二个入环节点，能找到就是相交，不能就是不想交


function getIntersectNode(head1, head2) {
    if (!head1 || !head2) return null
    let n1 = hasLoop2(head1)
    let n2 = hasLoop2(head2)

    if (!n1 && !n2) {
        return noLoop(head1, head2)
    } else if (n1 && n2) {
        return bothLoop(n1, n2, head1, head2)
    }
    return null
}

function noLoop(head1, head2) {
    let cur1 = head1
    let n = 0
    while(cur1.next) {
        cur1 = cur1.next
        n++
    }
    let cur2 = head2
    while(cur2.next) {
        cur2 = cur2.next
        n--
    }
    if (cur1 !== cur2) return null
    let long = n > 0 ? head1 : head2
    let short = long === head1 ? head2 : head1
    n = Math.abs(n)

    while(n !== 0) {
        long = long.next
        n--
    }

    while(long !== short) {
        long = long.next
        short = short.next
    }
    return long
}

function bothLoop(n1, n2, head1, head2) {
    if (n1 === n2) {
        let cur1 = head1
        let cur2 = head2
        let n = 0
        while(cur1.next !== n1) {
            cur1 = cur1.next
            n++
        }

        while(cur2.next !== n1) {
            cur2 = cur2.next
            n--
        }

        cur1 = n > 0 ? head1 : head2
        cur2 = cur1 === head1 ? head2 : head1
        n = Math.abs(n)

        while(n !== 0) {
            cur1 = cur1.next
            n--
        }

        while(cur1 !== cur2) {
            cur1 = cur1.next
            cur2 = cur2.next
        }
        return cur1
    } else {
        let cur = n1.next
        while(cur !== n1) {
            if (cur === n2) return n1
            cur = cur.next
        }
        return null
    }
}