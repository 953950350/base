// 自己的垃圾代码
// 荷兰国旗问题
function separate(arr, num) {
    if (!arr || arr.length < 2) return arr
    let min = -1
    let max = arr.length
    for(let i = 0; i < max; i++) {
        if (arr[i] < num) {
            console.log(arr[i])
            swap(arr, i, ++min)
        } else if (arr[i] > num) {
            swap(arr, i, --max)
            i--
        }
    }
    console.log(arr)
}

function partinion(arr, L, R, num) {
    let less = L - 1
    let more = R
    let cur = L
    while(cur < more) {
        if (arr[cur] < num) {
            swap(arr, cur++, ++less)
        } else if (arr[cur] > num) {
            swap(arr, cur, --more)
        } else {
            cur++
        }
    }
    swap(arr, more, R)
    return [less + 1, more - 1]
}

function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

let arr = [8,9,3,4,5, 5, 6, 65]
separate([8,9,3,4,5, 5, 6, 65], 5)
partinion(arr, 0, arr.length - 1, 5)
console.log(arr)



// 快排

function quickSort(arr) {
    if (!arr || arr.length < 2) return arr

    quickSortProcess(arr, 0, arr.length - 1)
    console.log(arr)
}

function quickSortProcess(arr, L, R) {
    if (L < R) {
        const num = arr[R]
        const p = partinion(arr, L, R, num)
        quickSortProcess(arr, L, p[0] - 1)
        quickSortProcess(arr, p[1] + 1, R)
    }
}

let testArr = [8,9,3,4,5, 5, 6, 65]

quickSort(testArr)