
class PriorityQueue<T> {
    list: T[]
    compareFunc: Function


    constructor(compareFunc: Function) {
        this.compareFunc = compareFunc
        this.list = []
    }

    enqueue(value: T) {
        this.list.push(value)
        this.heapInsert(this.list.length - 1)
    }

    heapInsert(index: number) {
        while(this.compareFunc(this.list[index], this.list[Math.floor(Math.abs(index - 1) / 2)]) > 0) {
            this.swap(this.list, index, Math.floor(Math.abs(index - 1) / 2))
            index = Math.floor(Math.abs(index - 1) / 2)
        }
    }

    dequeue(): T {
        if (!this.list.length) return null
        this.swap(this.list, 0, this.list.length - 1)
        let result = this.list.pop()
        this.heapFiy(0)
        return result
    }

    heapFiy(index: number) {
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

    peek(): T {
        return this.list[0]
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


class Project {
    cost: number
    profit: number

    constructor(cost: number, profit: number) {
        this.cost = cost
        this.profit = profit
    }
}

// costs: 花费
// profits: 净利润
// k: 最多做k个项目
// m: 启动资金
function ipo(costs: number[], profits: number[], k: number, m: number) {
    let costPq = new PriorityQueue<Project>((a: Project, b: Project) => b.cost - a.cost)
    let profit = new PriorityQueue<Project>((a: Project, b: Project) => a.profit - b.profit)

    for(let i = 0; i < costs.length; i++) {
        costPq.enqueue(new Project(costs[i], profits[i]))
    }

    for (let i = 0; i < k; i++) {

        while(costPq.size() > 0 && costPq.peek().cost <= m) {
            profit.enqueue(costPq.dequeue())
        }

        if (!profit.size()) return m

        m += profit.dequeue().profit
    }

    return m

}

console.log(ipo([0,1,1], [1,2,3], 2, 0))

