
class TrieNode {
    path: number
    end: number
    nexts: TrieNode[]

    constructor() {
        this.path = 0
        this.end = 0
        this.nexts = Array(26)
    }
}

class Trie {
    _root: TrieNode

    constructor() {
        this._root = new TrieNode()
    }

    insert(word: string) {
        if (!word) return
        const chs: string[] = word.split('')
        let node = this._root
        let index = 0

        for(let i = 0; i < chs.length; i++) {
            index = chs[i].charCodeAt(0) - 'a'.charCodeAt(0)
            if (!node.nexts[index]) {
                node.nexts[index] = new TrieNode()
            }
            node = node.nexts[index]
            node.path++
        }
        node.end++
    }

    delete(word: string) {
        if (this.search(word) === 0) return

        let chs: string[] = word.split('')
        let node = this._root
        let index = 0

        for(let i = 0; i < chs.length; i++) {
            index = chs[i].charCodeAt(0) - 'a'.charCodeAt(0)
            if (--node.nexts[index].path === 0) {
                node.nexts[index] = null
                return
            }
            node = node.nexts[index]
        }
        node.end--
    }

    search(word: string): number {
        if (!word) return 0
        const chs: string[] = word.split('')
        let node = this._root
        let index = 0

        for(let i = 0; i < chs.length; i++) {
            index = chs[i].charCodeAt(0) - 'a'.charCodeAt(0)
            if (!node.nexts[index]) return 0
            node = node.nexts[index]
        }
        return node.end
    }

    prefixNumber(pre: string) {
        if (!pre) return 0

        let chs: string[] = pre.split('')
        let node = this._root
        let index = 0

        for(let i = 0; i < chs.length; i++) {
            index = chs[i].charCodeAt(0) - 'a'.charCodeAt(0)
            if (!node.nexts[index]) return 0
            node = node.nexts[index]
        }
        return node.path
    }
}

let trie = new Trie()

console.log(trie.search('zuo'))
trie.insert("zuo");
console.log(trie.search('zuo'))
trie.delete("zuo");
console.log(trie.search('zuo'))
trie.insert("zuo");
trie.insert("zuo");
trie.delete("zuo");
console.log(trie.search('zuo'))
trie.delete("zuo");
console.log(trie.search('zuo'))
trie.insert("zuoa");
trie.insert("zuoac");
trie.insert("zuoab");
trie.insert("zuoad");
trie.delete("zuoa");
console.log(trie.search('zuoa'))
console.log(trie.prefixNumber('zuoa'))

