
class PriorityQueue {
    list: number[]
    compareFunc: Function

    defaultCompareFunc(a: number, b: number) {
        return a - b
    }

    constructor(compareFunc?: Function) {
        this.compareFunc = compareFunc ? compareFunc : this.defaultCompareFunc
        this.list = []
    }

    enqueue(value: number) {
        this.list.push(value)
        this.heapInsert(this.list.length - 1)
    }

    heapInsert(index: number) {
        while(this.compareFunc(this.list[index], this.list[Math.floor(Math.abs(index - 1) / 2)]) > 0) {
            this.swap(this.list, index, Math.floor(Math.abs(index - 1) / 2))
            index = Math.floor(Math.abs(index - 1) / 2)
        }
    }

    dequeue(): number {
        if (!this.list.length) return null
        this.swap(this.list, 0, this.list.length - 1)
        let result = this.list.pop()
        this.heapFiy(0)
        return result
    }

    heapFiy(index) {
        let left = index * 2 + 1
        let heapSize = this.list.length
        while(left < heapSize) {
            let largest = left
            if (left + 1 < heapSize && this.compareFunc(this.list[left + 1], this.list[left]) > 0) {
                largest = left + 1
            }
            if (this.compareFunc(this.list[index], this.list[largest]) > 0) {
                largest = index
            }
            if (largest === index) break
            this.swap(this.list, index, largest)
            index = largest
            left = index * 2 + 1
        }
    }

    size(): number {
        return this.list.length
    }

    swap(arr, i, j) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
}

// let queue = new PriorityQueue()

// queue.enqueue(5)
// queue.enqueue(2)
// queue.enqueue(3)
// queue.enqueue(6)


// console.log(queue.dequeue())
// console.log(queue.dequeue())
// console.log(queue.dequeue())
// console.log(queue.dequeue())

function lessMoney(arr: number[]): number {
    let pq = new PriorityQueue((a: number, b: number) => b - a)
    for(let item of arr) {
        pq.enqueue(item)
    }
    let sum = 0

    while(pq.size() > 1) {
        let cur = pq.dequeue() + pq.dequeue()
        sum += cur
        pq.enqueue(cur)
    }

    return sum
}

console.log(lessMoney([10, 20, 30]))