class ArrayStack {
    private items: string[]
    private current: number
    constructor(size: number) {
        this.items = Array(size)
        this.current = 0
    }

    push(item: string):boolean {
        if (this.current === this.items.length) return false
        this.items[this.current++] = item
        return true
    }
    pop():string {
        if (this.current == 0) return null
        return this.items[--this.current]
    }
    peek():string {
        if (this.current == 0) return null
        return this.items[this.current - 1]
    }
    isEmpty():boolean {
        return !!this.current
    }
    getSize():number {
        return this.current
    }
    display() {
        console.log(this.items)
    }
}

class MyStack {
    private dataStack: ArrayStack
    private minStack: ArrayStack

    constructor(size: number) {
        this.dataStack = new ArrayStack(size)
        this.minStack = new ArrayStack(size)
    }

    push(item: string):boolean {
        const min = this.getMin()
        if (min === null) {
            this.minStack.push(item)
        } else {
            this.minStack.push(min < item ? min : item)
        }
        return this.dataStack.push(item)
    }

    pop():string {
        this.minStack.pop()
        return this.dataStack.pop()
    }

    getMin(): string {
        return this.minStack.peek()
    }
}

// const stack = new MyStack(5)
// stack.push('2')
// stack.push('3')
// stack.push('1')
// stack.push('1')
// stack.pop()
// stack.push('9')
// console.log(stack.getMin())

class ArrayQueue {
    private items: string[]
    private head: number
    private tail: number
    private size: number

    constructor(size) {
        this.items = Array(size)
        this.head = 0
        this.tail = 0
        this.size = 0
    }

    isEmpty():boolean {
        return !!this.size
    }

    getSize():number {
        return this.size
    }

    enqueue(item):boolean {
        if (this.size === this.items.length) return false
        this.items[this.tail] = item
        this.tail = this.tail + 1 === this.items.length ? 0 : this.tail + 1
        this.size++
        return true
    }
    
    dequeue():string {
        if (!this.size) return null
        let ret = this.items[this.head]
        this.head = this.head + 1 === this.items.length ? 0 : this.head + 1
        this.size--
        return ret
    }
    display() {
        console.log(this.items, this.head, this.tail)
    }
}


// const stack = new ArrayQueue(5)
// stack.enqueue('2')
// stack.enqueue('3')
// stack.enqueue('4')
// stack.enqueue('2')
// stack.enqueue('2')
// console.log(stack.dequeue())
// stack.enqueue('9')
// console.log(stack.dequeue())
// console.log(stack.dequeue())
// console.log(stack.dequeue())
// stack.enqueue('8')
// console.log(stack.dequeue())
// console.log(stack.dequeue())
// console.log(stack.dequeue())
// console.log(stack.dequeue())
// stack.display()


class StackForQueue {
    private pushStack: ArrayStack
    private popStack: ArrayStack

    constructor(size: number) {
        this.pushStack = new ArrayStack(size)
        this.popStack = new ArrayStack(size)
    }

    enqueue(item: string):boolean {
        console.log(item)
        return this.pushStack.push(item)
    }

    dequeue():string {
        this.dao()
        return this.popStack.pop()
    }

    dao() {
        if (this.popStack.isEmpty()) {
            return
        }
        while(this.pushStack.getSize()) {
            this.popStack.push(this.pushStack.pop())
        }
    }
}

class QueueForStack {
    private dataQueue: ArrayQueue
    private helpQueue: ArrayQueue

    constructor(size: number) {
        this.dataQueue = new ArrayQueue(size)
        this.helpQueue = new ArrayQueue(size)
    }

    push(item):boolean {
        return this.dataQueue.enqueue(item)
    }

    pop():string {
        if (!this.dataQueue.isEmpty()) return null
        while(this.dataQueue.getSize() > 1) {
            this.helpQueue.enqueue(this.dataQueue.dequeue())
        }
        let ret = this.dataQueue.dequeue()
        this.swap()
        return ret
    }

    swap() {
        const temp = this.dataQueue
        this.dataQueue = this.helpQueue
        this.helpQueue = temp
    }
}

const stack = new QueueForStack(5)
stack.push('2')
stack.push('3')
stack.push('4')
stack.push('2')
stack.push('1')
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
stack.push('1')
stack.push('2')
console.log(stack.pop())
console.log(stack.pop())
// console.log(stack.pop())
// console.log(stack.pop())
// console.log(stack.pop())
// console.log(stack.pop())
// console.log(stack.pop())
// stack.enqueue('9')
// console.log(stack.dequeue())
// console.log(stack.dequeue())
// console.log(stack.dequeue())
// stack.enqueue('8')
// console.log(stack.dequeue())
// console.log(stack.dequeue())
// console.log(stack.dequeue())
// console.log(stack.dequeue())
// stack.display()