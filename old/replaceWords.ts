
class TrieNode {
    end: number
    path: number
    nexts: TrieNode[]

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

    searchPrefix(word: string): string {
        if (!word) return ''
        
        let chs = word.split('')
        let node = this._root
        let index = 0


        for (let i = 0; i < chs.length; i++) {
            index = chs[i].charCodeAt(0) - 'a'.charCodeAt(0)
            if (!node.nexts[index]) {
                if (i === 0 || !node.end) return word
                return word.slice(0, i + 1)
            }
            
            node = node.nexts[index]
            if (node.end) return word.slice(0, i + 1)
        }

        return word
    }
}

function replaceWords(dictionary: string[], sentence: string): string {
    let trie: Trie = new Trie()
    dictionary.forEach(item => trie.insert(item))
    return sentence.split(' ').map(i => trie.searchPrefix(i)).join(' ')
};

let arr = ["e","k","c","harqp","h","gsafc","vn","lqp","soy","mr","x","iitgm","sb","oo","spj","gwmly","iu","z","f","ha","vds","v","vpx","fir","t","xo","apifm","tlznm","kkv","nxyud","j","qp","omn","zoxp","mutu","i","nxth","dwuer","sadl","pv","w","mding","mubem","xsmwc","vl","farov","twfmq","ljhmr","q","bbzs","kd","kwc","a","buq","sm","yi","nypa","xwz","si","amqx","iy","eb","qvgt","twy","rf","dc","utt","mxjfu","hm","trz","lzh","lref","qbx","fmemr","gil","go","qggh","uud","trnhf","gels","dfdq","qzkx","qxw"]
let str = "ikkbp miszkays wqjferqoxjwvbieyk gvcfldkiavww vhokchxz dvypwyb bxahfzcfanteibiltins ueebf lqhflvwxksi dco kddxmckhvqifbuzkhstp wc ytzzlm gximjuhzfdjuamhsu gdkbmhpnvy ifvifheoxqlbosfww mengfdydekwttkhbzenk wjhmmyltmeufqvcpcxg hthcuovils ldipovluo aiprogn nusquzpmnogtjkklfhta klxvvlvyh nxzgnrveghc mpppfhzjkbucv cqcft uwmahhqradjtf iaaasabqqzmbcig zcpvpyypsmodtoiif qjuiqtfhzcpnmtk yzfragcextvx ivnvgkaqs iplazv jurtsyh gzixfeugj rnukjgtjpim hscyhgoru aledyrmzwhsz xbahcwfwm hzd ygelddphxnbh rvjxtlqfnlmwdoezh zawfkko iwhkcddxgpqtdrjrcv bbfj mhs nenrqfkbf spfpazr wrkjiwyf cw dtd cqibzmuuhukwylrnld dtaxhddidfwqs bgnnoxgyynol hg dijhrrpnwjlju muzzrrsypzgwvblf zbugltrnyzbg hktdviastoireyiqf qvufxgcixvhrjqtna ipfzhuvgo daee r nlipyfszvxlwqw yoq dewpgtcrzausqwhh qzsaobsghgm ichlpsjlsrwzhbyfhm ksenb bqprarpgnyemzwifqzz oai pnqottd nygesjtlpala qmxixtooxtbrzyorn gyvukjpc s mxhlkdaycskj uvwmerplaibeknltuvd ocnn frotscysdyclrc ckcttaceuuxzcghw pxbd oklwhcppuziixpvihihp"

let cc = 'i miszkays w gvcfldkiavww v dvypwyb bxahfzcfanteibiltins ueebf lqhflvwxksi dc k w ytzzlm gximjuhzfdjuamhsu gdkbmhpnvy i mengfdydekwttkhbzenk w h ldipovluo a nusquzpmnogtjkklfhta k nxzgnrveghc mpppfhzjkbucv c uwmahhqradjtf i z q yzfragcextvx i i j gzixfeugj rnukjgtjpim h a x h ygelddphxnbh rvjxtlqfnlmwdoezh z i bbfj mhs nenrqfkbf spfpazr w c dtd c dtaxhddidfwqs bgnnoxgyynol h dijhrrpnwjlju muzzrrsypzgwvblf z h q i daee r nlipyfszvxlwqw yoq dewpgtcrzausqwhh q i k bqprarpgnyemzwifqzz oai pnqottd nygesjtlpala q gyvukjpc s mxhlkdaycskj uvwmerplaibeknltuvd ocnn f c pxbd oklwhcppuziixpvihihp'
let tt = cc.split(' ')
replaceWords(arr, str).split(' ').forEach((i, index) => {
    if (i !== tt[index]) {
        console.log(i, index, tt[index])
    }
})

