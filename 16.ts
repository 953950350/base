// 并查集
// 1、查两个元素是否属于一个集合
// 2、两个元素各自所在的集合合并在一起

class UnionFind {
    fatherMap: Map<number, number>
    sizeMap: Map<number, number>

    constructor(list: number[]) {
        this.makeSets(list)
    }

    makeSets(nodes: number[]) {
        this.fatherMap = new Map()
        this.sizeMap = new Map()
        for(let node of nodes) {
            this.fatherMap.set(node, node)
            this.sizeMap.set(node, 1)
        }
    }

    find(node: number): number {
        let father = this.fatherMap.get(node)
        let cur = node

        while(father !== cur) {
            cur = father
            father = this.fatherMap.get(father)
        }

        while(node !== father) {
            this.fatherMap.set(node, father)
            node = this.fatherMap.get(node)
        }

        return father
    }

    union(a: number, b: number) {
        if (!a || !b) return
        let aHead = this.fatherMap.get(a)
        let bHead = this.fatherMap.get(b)
        let aSize = this.sizeMap.get(a)
        let bSize = this.sizeMap.get(b)

        if (aHead !== bHead) {
            if (aSize > bSize) {
                this.fatherMap.set(bHead, aHead)
                this.sizeMap.set(aHead, aSize + bSize)
            } else {
                this.fatherMap.set(aHead, bHead)
                this.sizeMap.set(bHead, bSize + aSize)
            }
        }
    }

    isSameSet(a: number, b: number) {
        return this.find(a) === this.find(b)
    }
}

function island (martix: number[][]): number {
    if (!martix.length || !martix[0].length) return 0

    let row = martix.length
    let column = martix[0].length
    let res = 0

    for(let i = 0; i < row; i++) {
        for(let j = 0; j < column; j++) {
            if (martix[i][j] === 1) {
                res++
                infect(i, j, martix, row, column)
            }
        }
    }
    return res
}

function infect(x, y, martix, row, column) {
    if (x < 0 || y < 0 || x >= row || y >= column || martix[x][y] !== 1) {
        return
    }

    martix[x][y] = 2

    infect(x + 1, y, martix, row, column)
    infect(x - 1, y, martix, row, column)
    infect(x, y + 1, martix, row, column)
    infect(x, y - 1, martix, row, column)
}

let arr = [
    [0,0,1,0,1,0],
    [1,1,1,0,1,0],
    [1,0,0,1,0,0],
    [0,1,0,1,0,1]
]

// 使用多任务解决岛屿数量问题，并行计算
// 使用并查集将每个岛的第一个节点设置为并查集的头结点
// 边界合并的时候，如果两个岛相邻，并且头结点不同，那么岛的数量减一
// 两个岛合并
