// 什么是hash函数?
// 传入一个字符串生成一个hash码，0~9和a~f的字符生成一个16位的字符串。
// 性质：
// 1、hash函数的输入域是无穷大的。
// 2、hash函数的输出域是有穷尽的。
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

// 准备k个hash函数，将url输入到这些hash函数中，得到的结果%m,
// 然后将得到的结果对应的位置描黑，这样将url添加到布隆过滤器中
// 查一个url是否在黑名单中，将改url输入到这k个hash函数中，
// 如果对应的结果都是黑的，那么说明url在黑名单中，只要有一个
// 结果不是黑的，那么就不是黑名单
// 通过调节数组的大小和hash函数的个数k可以来调节失误率

// 确定数组大小公式
// m = (n * lnP)/(ln2)^2
// n 是样本量、P是预期失误率

// 确定hash函数的个数
// k = ln2 * (m / n) = 0.7 * (m / n)

// 确定数组大小和hash函数个数之后的真实失误率:
// (1 - e^(-(n * k) / m))^k

// 一致性哈希

// 负载均衡

// 保存key和value为例，前端服务器在接受到请求后。
// 将key输入到hash函数，得到的结果%m,m为后端服务器的数量。
// 最后将请求转发给结果对应的后端服务器上，由于hash函数的
// 输出是均匀分布的，所以能保证每个后端服务器接收到的请求也是均匀的
// 当需要查找对应的数据时，相同的key，经过hash函数的计算得到的结果
// 一定是相同的，所以总能够找到正确对应的后端机器，然后执行对应的请求
// 但是问题是，当有扩容需求的时候，需要将之前保存的数据全部都重新计算一遍
// 迁移成本巨大。

// 
