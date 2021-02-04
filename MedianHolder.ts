
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

    isEmpty(): boolean {
        return this.size() === 0
    }

    peek(): number {
        return this.list[0]
    }

    swap(arr, i, j) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
}


class MedianHolder {
    maxHeap: PriorityQueue = new PriorityQueue()
    minHeap: PriorityQueue = new PriorityQueue((a: number, b: number) => b - a)

    modifyTwoHeapSize() {
        if (this.minHeap.size() === this.maxHeap.size() + 2) {
            this.maxHeap.enqueue(this.minHeap.dequeue())
        }
        if (this.maxHeap.size() === this.minHeap.size() + 2) {
            this.minHeap.enqueue(this.maxHeap.dequeue())
        }
    }

    addNumber(num: number) {
        if (this.maxHeap.isEmpty()) {
            this.maxHeap.enqueue(num)
            return
        }
        if (this.maxHeap.peek() >= num) {
            this.maxHeap.enqueue(num)
        } else {
            if (this.minHeap.isEmpty()) {
                this.minHeap.enqueue(num)
                return
            }
            if (this.minHeap.peek() > num) {
                this.maxHeap.enqueue(num)
            } else {
                this.minHeap.enqueue(num)
            }
        }
        this.modifyTwoHeapSize()
    }

    getMedian(): number {
        let maxHeapSize = this.maxHeap.size()
        let minHeapSize = this.minHeap.size()

        if (maxHeapSize + minHeapSize === 0) return null

        let maxHeapHead = this.maxHeap.peek()
        let minHeapHead = this.minHeap.peek()

        console.log(this.maxHeap.list, this.minHeap.list)

        if (((maxHeapSize + minHeapSize) & 1) === 0) {
            return (maxHeapHead + minHeapHead) / 2
        }
        return maxHeapSize > minHeapSize ? maxHeapHead : minHeapHead
    }
}

let aa = new MedianHolder()

aa.addNumber(8)
aa.addNumber(2)
aa.addNumber(5)
aa.addNumber(4)
aa.addNumber(3)
aa.addNumber(6)
aa.addNumber(7)
// 2345678
console.log(aa.getMedian())