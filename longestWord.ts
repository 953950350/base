class TrieNode {
    nexts: TrieNode[]
    end: 0
    path: 0

    constructor() {
        this.nexts = Array(26)
        this.end = 0
        this.path = 0
    }
}

class Trie {
    _root: TrieNode

    constructor() {
        this._root = new TrieNode()
    }

    insert(word: string) {
        if (!word) return
        let chs = word.split('')
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

    search(word: string): number {
        if (!word) return
        let chs = word.split('')
        let node = this._root
        let index = 0
        let path = 0

        for(let i = 0; i < chs.length; i++) {
            index = chs[i].charCodeAt(0) - 'a'.charCodeAt(0)

            if (!node.nexts[index]) {
                return 0
            }
            node = node.nexts[index]
            path++
            if (!node.end) return 0
        }
        return path
    }
}

function longestWord(words: string[]): string {
    let trie = new Trie()

    for(let word of words) {
        trie.insert(word)
    }

    let maxCount = -Infinity
    let ret = ''

    for(let word of words) {
        let count = trie.search(word)
        if (count > maxCount) {
            maxCount = count
            ret = word
        } else if (count && count === maxCount) {
            if (checkDictionarySort(ret, word) === ret) {
                ret = word
                maxCount = count
            }
        }
    }

    return ret
};

function checkDictionarySort(a: string, b: string):string {
    let aArr = a.split('').concat(Array(Math.max(0, b.length - a.length)).fill('a'))
    let bArr = b.split('').concat(Array(Math.max(0, a.length - b.length)).fill('a'))
    
    for(let i = 0; i < aArr.length; i++) {
        if (aArr[i].charCodeAt(0) > bArr[i].charCodeAt(0)) {
            return a
        } else if (aArr[i].charCodeAt(0) < bArr[i].charCodeAt(0)) {
            return b
        }
    }
    console.log(a, b)
    if (a.length === b.length) return b
    return a.length < b.length ? b : a
}

let aa = ["ts","e","x","pbhj","opto","xhigy","erikz","pbh","opt","erikzb","eri","erik","xlye","xhig","optoj","optoje","xly","pb","xhi","x","o"]
console.log(longestWord(aa))