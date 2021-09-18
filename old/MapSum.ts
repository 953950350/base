class TrieNode {
    nexts: TrieNode[]
    value: number

    constructor() {
        this.nexts = Array(26)
        this.value = 0
    }
}

class MapSum {
    _root: TrieNode
    constructor() {
        this._root = new TrieNode()
    }

    insert(key: string, val: number): void {
        let chs = key.split('')
        let index = 0
        let node = this._root

        for(let i = 0; i < chs.length; i++) {
            index = chs[i].charCodeAt(0) - 'a'.charCodeAt(0)

            if (!node.nexts[index]) {
                node.nexts[index] = new TrieNode()
            }
            node = node.nexts[index]
        }
        node.value = val
    }

    sum(prefix: string): number {
        let chs = prefix.split('')
        let index = 0
        let node = this._root

        for(let i = 0; i < chs.length; i++) {
            index = chs[i].charCodeAt(0) - 'a'.charCodeAt(0)

            if (!node.nexts[index]) {
                return 0
            }
            node = node.nexts[index]
        }



        return this.count(node)
    }

    count(node: TrieNode): number {
        if (!node) return 0
        let ret = node.value
        for(let i of node.nexts) {
            ret += this.count(i)
        }
        return ret
    }
}