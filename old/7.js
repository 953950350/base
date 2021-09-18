// 自己的垃圾代码
// function getMaxDifference(arr) {
//     if (!arr || arr.length < 2) return 0
//     let min = arr[0]
//     let max = arr[0]
//     let bucket = [{
//         hasNum: true,
//         min: min,
//         max: min
//     }]
//     for(let i = 1; i < arr.length; i++) {
//         min = arr[i] < min ? arr[i] : min
//         max = arr[i] > max ? arr[i] : max
//         if (i === arr.length - 1) {
//             bucket.push({
//                 hasNum: true,
//                 min: max,
//                 max: max
//             })
//         } else {
//             bucket.push({
//                 hasNum: true,
//                 min: max,
//                 max: max
//             })
//         }
//     }
//     if (min === max) return 0
//     let value = (max - min) / (arr.length - 1)
//     for(let i = 1; i < arr.length - 1; i++) {
//         let index = Math.floor((arr[i] - min) / value)
//         const current = bucket[index]
//         if (!current.hasNum) {
//             current.hasNum = true
//             current.min = arr[i]
//             current.max = arr[i]
//         } else {
//             current.min = current.min > arr[i] ? arr[i] : current.min
//             current.max = current.max < arr[i] ? arr[i] : current.max
//         }
//     }
//     let result = undefined
//     for(let i = 1; i < bucket.length; i++) {
//         let pre = bucket[i - 1].hasNum ? bucket[i - 1] : bucket[i - 2]
//         let difference = bucket[i].min - pre.max
//         if (result === undefined) {
//             result = difference
//         } else {
//             result = result > difference ? result : difference
//         }
//     }
//     console.log(result)
// }
let arr = [12,2,60,10,9,25]
// getMaxDifference(arr)
gapMax(arr)

function bucket(num, len, min, max) {
    return parseInt((num - min) * len / (max - min))
}

function gapMax(arr) {
    if (!arr || arr.length < 2) return 0
    let max = Number.MIN_VALUE
    let min = Number.MAX_VALUE
    let len = arr.length

    for(let i = 0; i < len; i++) {
        max = Math.max(arr[i], max)
        min = Math.min(arr[i], min)
    }
    if (min === max) return 0
    let bool = Array(len + 1)
    let minArr = Array(len + 1)
    let maxArr = Array(len + 1)
    for(let i = 0; i < len; i++) {
        let index = bucket(arr[i], len, min, max)
        console.log(index)
        minArr[index] = bool[index] ? Math.min(minArr[index], arr[i]) : arr[i]
        maxArr[index] = bool[index] ? Math.max(maxArr[index], arr[i]) : arr[i]
        bool[index] = true
    }

    let ret = 0
    let lastMax = maxArr[0]
    for(let i = 1; i < len; i++) {
        if (bool[i]) {
            ret = Math.max(ret, minArr[i] - lastMax)
            lastMax = maxArr[i]
        }
    }

    console.log(ret)

}