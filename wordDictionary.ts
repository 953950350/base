class DictionaryNode {
    path: number
    end: number
    nexts: Map<string, DictionaryNode>

    constructor() {
        this.path = 0
        this.end = 0
        this.nexts = new Map()
    }
}

class WordDictionary {
    _root: DictionaryNode

    constructor() {
        this._root = new DictionaryNode()
    }

    addWord(word: string): void {
        if (!word) return

        let chs = word.split('')
        let node = this._root
        
        for(let i = 0; i < chs.length; i++) {
            if (!node.nexts.has(chs[i])) {
                node.nexts.set(chs[i], new DictionaryNode())
            }
            node = node.nexts.get(chs[i])
            node.path++
        }
        node.end++
    }

    search(word: string): boolean {
        if (!word) return false

        let chs = word.split('')
        let nodes = [this._root]

        for(let i = 0; i < chs.length; i++) {
            nodes = this.searchProcess(nodes, chs[i])
            if (nodes.length === 0) {
                if (word === '.at') {
                    console.log(nodes.length)
                }
                return false
            }
        }
        if (nodes.every(i => !i.end)) {
            return false
        }
        return true
    }

    searchProcess(nodes: DictionaryNode[], value: string) {
        let ret = []
        if (value !== '.') {
            nodes.forEach(item => {
                if (!item.nexts.has(value)) return
                ret.push(item.nexts.get(value))
            })
        } else {
            nodes.forEach(item => {
                item.nexts.forEach((value, key) => {
                    ret.push(value)
                })
            })
        }
        return ret
    }
}