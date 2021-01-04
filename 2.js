// 对数器

// 0, 有一个想要测试的方法a
// 1，实现一个绝对正确但是复杂度不好的方法b
// 2，实现一个随机样本产生器
// 3，实现比对方法
// 4，把方法a和方法b比对很多次来验证方法a是否正确
// 5，如果有一个样本使得比对出错，打印样本分析是那个方法出错
// 6，当样本数量很多时比对测试依然正确，可以确定方法a已经正确。

function generateRandomArray(maxSize, maxValue) {
    return Array(getRndInteger(maxSize)).fill(0).map(() => {
        return getRndInteger(maxValue) - getRndInteger(maxValue)
    })
}

Math.floor()

function getRndInteger(max, min = 0) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function sort(arr) {
    arr = arr.slice()
    return arr.sort((a, b) => a - b)
}

function bubblingSort(arr) {
    arr = arr.slice()
    if (!arr || arr.length < 2) return arr
    for(let i = arr.length - 1; i > 0; i--) {
        for(let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1)
            }
        }
    }
    return arr
}

function comparison(testTime = 50000, maxSize = 100, maxValue = 100) {
    let errArr = []
    for(let i = 0; i < testTime; i ++) {
        const arr = generateRandomArray(maxSize, maxValue)
        let arr1 = sort(arr)
        let arr2 = bubblingSort(arr)
        if (!isEqual(arr1, arr2)) {
            errArr.push({
                arr,
                arr1,
                arr2
            })
            break
        }
    }
    console.log(errArr.length ? errArr : 'nice')
}

comparison()

function isEqual(arr1, arr2) {
    if (!arr1 || !arr2) return false
    if (arr1.length !== arr2.length) return false
    for(let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false
    }
    return true
}

function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}