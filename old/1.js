function bubbling(arr) {
    arr = arr.slice()
    if (!arr || arr.length < 2) return arr
    for(let i = arr.length - 1; i > 0; i--) {
        for(let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1)
            }
        }
    }
    console.log(arr)
    return arr
}

function selectSort(arr) {
    arr = arr.slice()
    if (!arr || arr.length < 2) return arr
    for(let i = 0; i < arr.length; i++) {
        let minIndex = i
        for(let j = i; j < arr.length; j++) {
            minIndex = arr[j] < arr[minIndex] ? j : minIndex
        }
        swap(arr, minIndex, i)
    }
    console.log(arr)
    return arr
}

function insertSort(arr) {
    arr = arr.slice()
    if (!arr || arr.length < 2) return arr
    for(let i = 1; i < arr.length; i++) {
        for(let j = i - 1; j >= 0 && arr[j] > arr[j + 1]; j--) {
            swap(arr, j, j + 1)
        }
    }
    console.log(arr)
    return arr
}


function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

let arr = [87,2,43,2,8,3]

bubbling(arr)
selectSort(arr)
insertSort(arr)