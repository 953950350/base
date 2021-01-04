
class BinaryNode {
    value: number
    left: BinaryNode
    right: BinaryNode

    constructor(data: number) {
        this.value = data
    }

    preOrderRecur(head: BinaryNode) {
        if (!head) return

        console.log(head.value)
        this.preOrderRecur(head.left)
        this.preOrderRecur(head.right)

    }

    inOrderRecur(head: BinaryNode) {
        if (!head) return

        this.inOrderRecur(head.left)
        console.log(head.value)
        this.inOrderRecur(head.right)
    }
    
    posOrderRecur(head: BinaryNode) {
        if (!head) return

        this.posOrderRecur(head.left)
        this.posOrderRecur(head.right)
        console.log(head.value)
    }

    preOrder(head: BinaryNode) {
        if (!head) return null
        let stack = new Stack<BinaryNode>()
        stack.push(head)
        while(head) {
            head = stack.pop()
            console.log(head.value)
            if (head.right) {
                stack.push(head.right)
            }
            if (head.left) {
                stack.push(head.left)
            }
        }
    }

    inOrder(head: BinaryNode) {
        if (!head) return null
        let stack = new Stack<BinaryNode>()

        while(!stack.isEmpty() && head) {
            if (head) {
                stack.push(head)
                head = head.left
            } else {
                head = stack.pop()
                console.log(head)
                head = head.right
            }
        }
    }

    posOrder(head: BinaryNode) {
        if (!head) return null
        let stack1 = new Stack<BinaryNode>()
        let stack2 = new Stack<BinaryNode>()

        stack1.push(head)
        while(head) {
            head = stack1.pop()
            stack2.push(head)
            if (head.left) {
                stack1.push(head.left)
            }

            if (head.right) {
                stack1.push(head.right)
            }
        }

        head = stack2.pop()
        while(head) {
            console.log(head.value)
            head = stack2.pop()
        }
    }
}

class Stack<T> {
    items: T[]
    tail: number

    constructor(size: number = 100) {
        this.items = Array(size)
        this.tail= 0
    }

    push(data: T): boolean {
        if (this.tail === this.items.length) return false
        this.items[this.tail++] = data
    }

    pop():T {
        if (this.tail === 0) return null
        return this.items[--this.tail]
    }

    isEmpty():boolean {
        return this.tail === 0
    }
}

