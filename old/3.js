function getMax(arr, l, r) {
    if (l === r) return arr[l]
    const mid = Math.floor((l + r ) / 2)
    let maxLeft = getMax(arr, l, mid)
    let maxRight = getMax(arr, mid + 1, r)
    return Math.max(maxLeft, maxRight)
}

let arr = [2,3,4,2,46,445,232,]

console.log(getMax(arr, 0, arr.length - 1))

// 递归行为的时间复杂度的估算
// master公式的使用
// T(N) = a*T(n/b) + O(n^d)
// T(N) = 2*T(n/2) + O(1)
// 1. log(b, a) > d -> 复杂度为O(N^log(b,a))
// 2. log(b, a) = d -> 复杂度为O(N^d*logN)
// 3. log(b, a) < d -> 复杂度为O(N^d)

// master公式适用范围：子过程划分规模必须是一样的
// T(n) = T(N/5) + T((2/3) * N) + O(n^2)这个由于子过程
// 规模不同无法使用master公式解

// function mergerSort(arr, l, r) {
//     if (l === r) {
//         console.log(l)
//         return [arr[l]]
//     }
//     const mid = Math.floor((l + r) / 2)
//     let leftArr = mergerSort(arr, l, mid)
//     let rightArr = mergerSort(arr, mid + 1, r)
//     let result = []
//     let leftIndex = 0
//     let rightIndex = 0
//     while(leftIndex < leftArr.length && rightIndex < rightArr.length) {
//         let left = leftArr[leftIndex]
//         let right = rightArr[rightIndex]
//         if (left < right) {
//             result.push(left)
//             leftIndex++
//         } else {
//             result.push(right)
//             rightIndex++
//         }
//     }
//     if (leftIndex < leftArr.length - 1) {
//         result = result.concat(leftArr.slice(leftIndex, leftArr.length - 1))
//     }
//     if (rightIndex < rightArr.length - 1) {
//         result = result.concat(rightArr.slice(rightIndex, rightArr.length - 1))
//     }
//     return result

// }

function merge(arr, l, mid, r) {
    let help = []
    let p1 = l
    let p2 = mid + 1
    while(p1 <= mid && p2 <= r) {
        help.push(arr[p1] < arr[p2] ? arr[p1++] : arr[p2++])
    }

    while(p1 <= mid) {
        help.push(arr[p1++])
    }

    while(p2 <= r) {
        help.push(arr[p2++])
    }

    for(let i = 0; i < help.length; i++) {
        arr[l + i] = help[i]
    }
}

function mergeSort(arr) {
    if (!arr || arr.length < 2) return arr
    sortProcess(arr, 0, arr.length - 1)
    return arr
}

function sortProcess(arr, l, r) {
    if (l === r) return
    let mid = Math.floor((l + r) / 2)
    sortProcess(arr, l, mid)
    sortProcess(arr, mid + 1, r)
    merge(arr, l, mid, r)
}

console.log(mergeSort(arr))

let x = 0
function smallSum(arr) {
    if (!arr || arr.length < 2) return arr
    return smallSumProcess(arr, 0, arr.length - 1 )
}

function smallSumProcess(arr, l, r) {
    if (l === r) return 0
    let mid = Math.floor((l + r) / 2)

    let left = smallSumProcess(arr, l, mid)

    let right = smallSumProcess(arr, mid + 1, r)
    
    return left + right + mergeSmallSum(arr, l, mid, r)
}

function mergeSmallSum(arr, l, mid, r) {
    let help = []
    let p1 = l
    let p2 = mid + 1
    let sum = 0
    while(p1 <= mid && p2 <= r) {
        if (arr[p1] < arr[p2]) {
            sum += arr[p1] * (r - p2 + 1)
            help.push(arr[p1++])
        } else {
            help.push(arr[p2++])
        }
    }

    while(p1 <= mid) {
        help.push(arr[p1++])
    }

    while(p2 <= r) {
        help.push(arr[p2++])
    }

    for(let i = 0; i < help.length; i++) {
        arr[l + i] = help[i]
    }
    return sum
}

console.log(smallSum([1,2,3,5]))

console.log(6 + (7 - 6) >> 1)