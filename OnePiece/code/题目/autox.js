// 查找和为零的元组
// [0, 0]
// [1, 1]
// [-2, -1]
// [0, 1]

// 先计算两个一组数据的和出现的次数，保存到map中
// 然后再遍历长的那一组的和，通过对当前值取反，能得到另一组和中的key，将和出现的次数相加能得到和出现的次数
function findSum(A, B, C, D) {
    let sum1 = {}
    let sum2 = {}
    let result = 0

    for(let i = 0; i < A.length; i++) {
        let a = A[i]
        for (let j = 0; j < B.length; j++) {
            let b = B[j]
            let sum = a + b
            if (!sum1[sum]) {
                sum1[sum] = 1
            } else {
                sum1[sum]++
            }
        }
    }
    
    for (let i = 0; i < C.length; i++) {
        let c = C[i]
        for(let j = 0; j < D.length; j++) {
            let d = D[j]
            let sum = c + d
            if (!sum2[sum]) {
                sum2[sum] = 1
            } else {
                sum2[sum]++
            }
        }
    }

    for (let key in sum1) {
        let num = -Number(key)
        if (sum2[num]) {
            result += (sum1[key] + sum2[num])
        }
    }

    return result
}

console.log(findSum([0, 0], [1, 1], [-2, -1], [0, 1]))


// 两数相加
// '123' + '456'
function sum(a, b) {
    const stack1 = a.split('').map(item => Number(item))
    const stack2 = b.split('').map(item => Number(item))
    let result = ''
    let curry = false
    while(stack1.length && stack2.length) {
        let sum = stack1.pop() + stack2.pop() + curry
        if (sum >= 10) {
            sum -= 10
            curry = true
        } else {
            curry = false
        }
        result = String(sum) + result
    }

    let finalStack = stack1.length ? stack1 : stack2

    while(finalStack.length) {
        let sum = finalStack.pop() + curry
        if (sum >= 10) {
            sum -= 10
            curry = true
        } else {
            curry = false
        }
        result = String(sum) + result
    }

    if (curry) {
        result = '1' + result
    }

    return result
}

console.log(sum('123', '456'))

