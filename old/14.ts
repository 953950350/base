
// 二叉树的序列表和反序列化
// 怎么序列化就怎么反序列化

// 平衡二叉树：在这颗树中任何一个节点他左子树和右子树的高度差不超过1
// 递归函数能回到一个节点3次。
// 1. 左树是否平衡
// 2. 右树是否平衡
// 3. 左树的高度
// 4. 右树的高度
// 核心点：树形dp。需要再进一步研究

// 搜索二叉树：
// 对于这颗树上任何一个节点为头的树，左子树都比他小，右子树都比他大
// 二叉树中序遍历的情况下是依次升序的，就是搜索二叉树

// 完全二叉树：每一层从左往右依次填满
// 1. 如果出现一个节点有右孩子没有左孩子，直接返回fals。
// 2. 如果出现一个节点有左孩子没有右孩子，那么后续的节点都必须为叶节点

class Stack<T> {
    items: T[]
    tail: number

    constructor(size: number = 100) {
        this.items = Array(size)
        this.tail = 0
    }

    push(item: T): boolean {
        if (this.tail === this.items.length) return false
        this.items[this.tail++] = item
    }

    pop():T {
        if (this.tail === 0) return null
        return this.items[--this.tail]
    }

    isEmpty():boolean {
        return this.tail === 0
    }
}

class BinaryNode<T> {
    val: T
    left: BinaryNode<T>
    right: BinaryNode<T>
    parent: BinaryNode<T>

    constructor(val: T) {
        this.val = val
    }

    preOrderRecur<T>(head: BinaryNode<T>) {
        if (!head) return

        console.log(head.val)
        this.preOrderRecur(head.left)
        this.preOrderRecur(head.right)
    }

    inOrderRecur<T>(head: BinaryNode<T>) {
        if (!head) return
        this.inOrderRecur(head.left)
        console.log(head.val)
        this.inOrderRecur(head.right)
    }

    posOrderRecur<T>(head: BinaryNode<T>) {
        if (!head) return
        this.posOrderRecur(head.left)
        this.posOrderRecur(head.right)
        console.log(head.val)
    }

    preOrder<T>(head: BinaryNode<T>) {
        if (!head) return
        let stack = new Stack<BinaryNode<T>>()
        stack.push(head)
        while(!stack.isEmpty()) {
            head = stack.pop()
            console.log(head.val)
            if (head.right) {
                stack.push(head.right)
            }
            if (head.left) {
                stack.push(head.left)
            }
        }
    }

    // 如果当前节点有左节点，就将它压入栈中
    inOrder<T>(head: BinaryNode<T>) {
        if (!head) return
        let stack = new Stack<BinaryNode<T>>()
        while (!stack.isEmpty() || head) {
            if (head) {
                stack.push(head)
                head = head.left
            } else {
                head = stack.pop()
                console.log(head.val)
                head = head.right
            }
        }
    }

    posOrder<T>(head: BinaryNode<T>) {
        if (!head) return
        let stack1 = new Stack<BinaryNode<T>>()
        let stack2 = new Stack<BinaryNode<T>>()
        stack1.push(head)
        while(!stack1.isEmpty()) {
            head = stack1.pop()
            stack2.push(head)
            if (head.left) {
                stack1.push(head.left)
            }
            if (head.right) {
                stack1.push(head.right)
            }
        }

        while(!stack2.isEmpty()) {
            console.log(stack2.pop().val)
        }
    }

    // 1、如果一个节点有右节点，那么他的后继节点一定是右节点最深的左节点。
    // 2、如果一个节点没有右节点，那么他的后继节点就往上找，找到第一个在父节点下是右节点的节点，就是他的后继节点
    findBackNode<T>(head: BinaryNode<T>):T {
        if (!head) return null
        if (head.right) {
            head = head.right
            while(head.left) {
                head = head.left
            }
            return head.val
        } else {
            while(head && head.parent) {
                let parent = head.parent
                if (parent.left === head) {
                    return parent.val
                }
                head = parent
            }
            return null
        }
    }

}

// 中右左
// 左右中

let head = new BinaryNode(1)
let left1 = new BinaryNode(2)
head.left = left1
left1.parent = head
let right1 = new BinaryNode(3)
head.right = right1
right1.parent = head
let left2 = new BinaryNode(4)
left1.left = left2
left2.parent = left1
let right2 = new BinaryNode(5)
left1.right = right2
right2.parent = left1

head.preOrderRecur(head)
head.preOrder(head)

head.inOrderRecur(head)
head.inOrder(head)

head.posOrderRecur(head)
head.posOrder(head)
console.log(head.findBackNode(right2))



