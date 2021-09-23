class ArrayStack {
    items
    count
    n
    constructor(size) {
        this.n = size
        this.items = []
        this.count = 0
    }

    push(item) {
        if (this.count === this.n) return false
        this.items[this.count++] = item
        return true
    }
    pop() {
        if (this.count === 0) return false
        return this.items[--this.count]
    }
}

// 20. 匹配括号
var isValid = function(s) {
    let stack = []
    for(let i = 0; i < s.length; i++) {
        let str = s.charAt(i)
        if (str === '(' || str === '[' || str === '{') {
            stack.push(str)
        } else {
            if (str === '}' && stack.pop() !== '{') {
                return false
            }
            if (str === ')' && stack.pop() !== '(') {
                return false
            }
            if (str === ']' && stack.pop() !== '[') {
                return false
            }
        }
    }
    return !stack.length
};

// 155.最小栈
/**
 * initialize your data structure here.
 */
 var MinStack = function() {
    this.item = []
    this.current = 0
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.item[this.current++] = x
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.current > 0) this.current--
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.item[this.current - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if (this.current === 0) return null
    let min = Infinity
    for(let i = 0; i < this.current; i++) {
        if (min > this.item[i]) min = this.item[i]
    }

    return min
};

// 20,155,232,844,224,682,496