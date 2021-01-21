class UnionFind {
    father: number[]

    constructor(n: number) {
        this.father = []

        for(let i = 0; i < n; i++) {
            this.father[i] = i
        }
    }

    find(x: number):number {
        if (!this.father[x]) {
            this.father[x] = x
        }
        let j = x
        let father = this.father[j]
        while(father !== j) {
            j = father
            father = this.father[j]
        }

        while(x !== j) {
            let fx = this.father[x]
            this.father[x] = j
            x = fx
        }
        return j
    }

    union(a: number, b: number) {
        let aHead = this.find(a)
        let bHead = this.find(b)
        if (aHead < bHead) {
            this.father[bHead] = aHead
        } else if (aHead > bHead) {
            this.father[aHead] = bHead
        }
    }
}

function findRedundantConnection(edges: number[][]): number[] {
    if (!edges.length) return []
    let uf: UnionFind = new UnionFind(edges.length)
    for(let i = 0; i < edges.length; i++) {
        let x = edges[i][0]
        let y = edges[i][1]
        if (uf.find(x) === uf.find(y)) {
            return [x, y]
        } else {
            uf.union(x, y)
        }
    }
    console.log(uf.father)
    return []
};

console.log(findRedundantConnection([[1,2], [2,3], [3,4], [1,4], [1,5]]))

