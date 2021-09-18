


class Connection {
    from: number
    to: number
    cost: number

    constructor(from: number, to: number, cost: number) {
        this.from = from
        this.to = to
        this.cost = cost
    }
}

class UnionFind {
    father: number[]
    size: number

    constructor(n: number) {
        this.father = Array(n)
        for(let i = 0; i < n; i++) {
            this.father[i] = i
        }
        this.size = n
    }

    find(x: number): number {
        let j = x
        while(this.father[j] !== j) {
            j = this.father[j]
        }

        while(x !== j) {
            let fx = this.father[x]
            this.father[x] = j
            x = fx
        }

        return j
    }

    union(a: number, b: number) {
        let root_a = this.find(a)
        let root_b = this.find(b)

        if (root_a !== root_b) {
            this.father[root_a] = root_b
            this.size--
        }
    }


    getSize(): number {
        return this.size
    }


}

function minCostConnectPoints(points: number[][]): number {
    let cList: Connection[] = []
    let n = points.length
    
    // 把每个点之间的距离算出来
    for(let i = 0; i < n; i++) {
        for(let j = i + 1; j < n; j++) {
            cList.push(new Connection(i, j, getCost(points[i][0], points[i][1], points[j][0], points[j][1])))
        }
    }
    // 排序，将短的距离放到前面去
    cList.sort((a, b) => a.cost - b.cost)

    const uf: UnionFind = new UnionFind(n)
    let totalcost: number = 0

    // 从短的开始进行合并
    for(let connection of cList) {
        let a = connection.from
        let b = connection.to
        let cost = connection.cost
        if (uf.find(a) !== uf.find(b)) {
            uf.union(a, b)
            totalcost += cost
        }
    }
    return totalcost
};

function getCost(x1: number, y1: number, x2: number, y2: number): number {
    return Math.abs(x1 - x2) + Math.abs(y1 - y2)
}
