
// HashMap 数据增删改查的操作时间都是常数时间

function ListNode(val) {
    this.val = val
    this.next = null
    this.rand = null
}

function copyListWithRand1(head) {
    let map = new Map()
    let cur = head
    while(cur) {
        map.set(cur, new ListNode(cur.val))
        cur = cur.next
    }
    cur = head
    while(cur) {
        map.get(cur).next = map.get(cur.next)
        map.get(cur).rand = map.get(cur.rand)
        cur = cur.next
    }
    return map.get(head)
}

let head = new ListNode(1)
let next1 = new ListNode(2)
let next2 = new ListNode(3)

head.next = next1
next1.next = next2
head.rand = next2
next1.rand = head

function printList(list) {
    while(list) {
        console.log(list.val)
        list = list.next
    }
}

function copyListWithRand2(head) {
    if (!head) return null
    let cur = head
    while(cur) {
        let next = cur.next
        cur.next = new ListNode(cur.val)
        cur.next.next = next
        cur = next
    }
    cur = head
    let curNext = head.next
    while(cur && curNext) {
        if (cur.rand) {
            curNext.rand = cur.rand.next
        }
        cur = cur?.next?.next
        curNext = cur?.next
    }
    let ret = head.next
    cur = head
    curNext = head.next
    
    while(cur && curNext) {
        let next = curNext.next
        cur.next = next
        cur = next
        curNext.next = next && next.next
        curNext = curNext.next
    }
    return ret
}

copyListWithRand2(head)