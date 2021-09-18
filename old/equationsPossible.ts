

class UnionFind {
    fatherMap: Map<string, string>
    inequalityList: string[]

    constructor(nodes: string[]) {
        this.fatherMap = new Map()
        this.inequalityList = []
        for(let node of nodes) {
            let [left, operator, right] = this.splitStr(node)
            !this.fatherMap.has(left) && this.fatherMap.set(left, left)
            !this.fatherMap.has(right) && this.fatherMap.set(right, right)
            if (operator === '==') {
                if (!this.isSameSet(left, right)) {
                    this.union(left, right)
                }
            } else {
                this.inequalityList.push(node)
            }
        }
    }

    check(): boolean {
        console.log(this.inequalityList)
        for(let node of this.inequalityList) {
            let [left, operator, right] = this.splitStr(node)
            if (this.isSameSet(left, right)) return false
        }
        return true
    }

    find(a: string): string {
        let father: string = this.fatherMap.get(a)

        if (father !== a) {
            father = this.find(father)
        }

        this.fatherMap.set(a, father)

        return father
    }

    union(a: string, b: string) {
        let aHead = this.find(a)
        let bHead = this.find(b)

        if (aHead !== bHead) {
            this.fatherMap.set(bHead, aHead)
        }
    }

    isSameSet(a: string, b: string): boolean {
        return this.find(a) === this.find(b)
    }

    splitStr(str: string): string[] {
        return [str.slice(0, 1), str.slice(1, 3), str.slice(3, 4)]
    }
}

function equationsPossible(equations: string[]): boolean {
    let uf: UnionFind = new UnionFind(equations)
    return uf.check()
};

console.log(equationsPossible(["a==b","b!=c","c==a"]))