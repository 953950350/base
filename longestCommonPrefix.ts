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
    root: TrieNode

    constructor() {
        this.root = new TrieNode()
    }

    add(str: string) {
        let chars: string[] = str.split('')
        let index = 0
        let node = this.root

        for(let i = 0; i < chars.length; i++) {
            index = chars[i].charCodeAt(0) - 'a'.charCodeAt(0)
            if (!node.nexts[index]) {
                node.nexts[index] = new TrieNode() 
            }
            node = node.nexts[index]
            node.path++
        }
        node.end++
    }
    
    findCommonPrefix(str: string, len: number): string {
        let chars: string[] = str.split('')
        let index = 0
        let node = this.root

        for(let i  = 0; i <= chars.length; i++) {
            if (i === chars.length) {
                return str
            }
            index = chars[i].charCodeAt(0) - 'a'.charCodeAt(0)
            if (!node.nexts[index]) return ''
            node = node.nexts[index]
            console.log(node.path < len)
            if (i === 0 && node.path < len) return ''
            if (node.path < len) {
                return str.slice(0, i)
            }
        }
        return ''
    }

}

function longestCommonPrefix(strs: string[]): string {
    if (!strs.length) return ''
    let trie = new Trie()
    for(let str of strs) {
        trie.add(str)
    }
    
    return trie.findCommonPrefix(strs[0], strs.length)
};

console.log(longestCommonPrefix(["a"]))