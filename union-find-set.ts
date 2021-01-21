

class CustomNode {
    value: string
    next: CustomNode
    constructor(val: string) {
        this.value = val
        this.next = null
    }
}

class UnionFindSet {
    fatherMap: Map<CustomNode,CustomNode>
    sizeMap: Map<CustomNode, number>

    constructor() {
        this.fatherMap = new Map()
        this.sizeMap = new Map()
    }

    makeSets(nodes: CustomNode[]) {
        this.fatherMap.clear()
        this.sizeMap.clear()
        for(let node of nodes) {
            this.fatherMap.set(node, node)
            this.sizeMap.set(node, 1)
        }
    }

    findHead(node: CustomNode): CustomNode {
        let father = this.fatherMap.get(node)
        if (father !== node) {
            father = this.findHead(father)
        }
        this.fatherMap.set(node, father)
        return father
    }

    isSameSet(a: CustomNode, b: CustomNode): boolean {
        return this.findHead(a) === this.findHead(b)
    }

    union(a: CustomNode, b: CustomNode) {
        if (!a || !b) return

        let aHead = this.findHead(a)
        let bHead = this.findHead(b)

        if (aHead !== bHead) {
            let aSetSize = this.sizeMap.get(aHead)
            let bSetSize = this.sizeMap.get(bHead)

            if (aSetSize <= bSetSize) {
                this.fatherMap.set(aHead, bHead)
                this.sizeMap.set(bHead, aSetSize + bSetSize)
            } else {
                this.fatherMap.set(bHead, aHead)
                this.sizeMap.set(aHead, aSetSize + bSetSize)
            }
        }
    }

}