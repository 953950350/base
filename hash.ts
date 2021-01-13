// 什么是hash函数?
// 传入一个字符串生成一个hash码，0~9和a~f的字符生成一个16位的字符串。
// 性质：
// 1、hash函数的输入域是无穷大的。
// 2、hash函数的输出域是又穷尽的。
// 3、当输入固定的时候，返回值一定是相同的。
// 4、当输入不一样的时候，也可能得到相同code的值。
// 5、hash函数具有离散性，输入域样本量很大的时候，输出结果在整个输出域上均匀分布。

// 特征：
// hash函数计算完的值，和输入规律完全无关，能够打乱输入规律。
// 将input为s域的hash函数的结果与一个数m取余的结果在0-(m-1)的范围内也是均匀分布的
// 相同输入得出相同输出，不同输入的输出均匀分布

// hash表


class RandomPoll {
    map1: Map<string, number>
    map2: Map<number, string>
    size: number
    constructor() {
        this.map1 = new Map()
        this.map2 = new Map()
        this.size = 0
    }

    insert(value: string) {
        if (this.map1.has(value)) return
        this.map1.set(value, this.size)
        this.map2.set(this.size, value)
        this.size++
    }

    getRandom():string {
        if (!this.size) return null
        let random = Math.random() * this.size | 0
        return this.map2.get(random)
    }

    remove(value: string) {
        if (!this.map1.has(value)) return
        const last = this.map2.get(this.size - 1)
        const index = this.map1.get(value)
        this.map1.delete(value)
        this.map2.delete(this.size - 1)
        this.map1.set(last, index)
        this.map2.set(index, last)
        this.size--
    }

}

// 布隆过滤器
// 查找某个东西是否在一个集合中
// 有一定的失误率。
// 是一个比特类型的map
// 0-(m-1)数组上，数组中的元素都是一个比特(0|1)
// 一个整数4个字节、一个字节32个bit，一个长度为1000的整数类型数组。
// 可以表示32000个比特位的



