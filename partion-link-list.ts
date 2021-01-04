function ListNode(val) {
    this.val = val
    this.next = null
}

function append(list, val) {
    while(list.next) {
        list = list.next
    }
    list.next = new ListNode(val)
}



let arr = [2,3,8,6,4,9,1,5]

let node = new ListNode('head')

for(let i = 0; i < arr.length; i++) {
    append(node, arr[i])
}

function partion(list, val) {
    let lessHead = null
    let equalHead = null
    let moreHead = null
    let current = list.next
    let currentLess = null
    let currentEqual = null
    let currentMore = null
    while(current) {
        let next = current.next
        current.next = null
        if (current.val < val) {
            if (!currentLess) {
                lessHead = current
                currentLess = current
            } else {
                currentLess.next = current
                currentLess = currentLess.next
            }
        } else if (current.val === val) {
            if (!currentEqual) {
                equalHead = current
                currentEqual = current
                console.log(current)
            } else {
                currentEqual.next = current
                currentEqual = currentEqual.next
            }
        } else {
            if (!currentMore) {
                moreHead = current
                currentMore = current
                console.log(current)
            } else {
                currentMore.next = current
                currentMore = currentMore.next
            }
        }
        current = next
    }
    let head = null
    
    if (lessHead) {
        head = lessHead
        current = currentLess
    }

    if (equalHead) {
        if (head) {
            current.next = equalHead
        } else {
            head = equalHead
        }
        current = currentEqual
    }

    if (moreHead) {
        if (head) {
            current.next = moreHead
        } else {
            head = moreHead
        }
    }
    list.next = head
}
function printList(list) {
    while(list) {
        console.log(list.val)
        list = list.next
    }
}
partion(node,6)

printList(node)