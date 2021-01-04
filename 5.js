
// 完全二叉树的父节点下标与子节点下标的关系，已知父节点下标为i
// 父节点的左孩子的下标是：2*i+1，右孩子的下标是：2*i+2
// 子节点下标与父节点下标的关系，已知子节点下标为i
// 父节点的下标为(i - 1) / 2

function heapSort(arr) {
    if (!arr || arr.length < 2) return arr
    for(let i = 0; i < arr.length; i++) {
        heapInsert(arr, i)
    }
}

function heapInsert(arr, index) {
    while(arr[index] < arr[Math.floor(Math.abs(index - 1)/2)]) {
        swap(arr, index, Math.floor(Math.abs(index - 1)/2))
        index = Math.floor(Math.abs(index - 1)/2)
    }
}

function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

// 自己的垃圾代码
// function heapFiy(arr, index, heapSize) {
//     let leftChild = index * 2 + 1
//     let rightChild = leftChild + 1
//     while((leftChild < heapSize && arr[index] < arr[leftChild]) || (rightChild < heapSize && arr[index] < arr[rightChild])) {
//         if (rightChild >= heapSize) {
//             swap(arr, leftChild, index)
//             index = leftChild
//             leftChild = index * 2 + 1
//             rightChild = leftChild + 1
//         } else {
//             let max = arr[leftChild] > ar[rightChild] ? leftChild : rightChild
//             swap(arr, max, index)
//             index = max
//             leftChild = index * 2 + 1
//             rightChild = leftChild + 1
//         }
//     }
// }

function heapFiy(arr, index, heapSize) {
    let left = index * 2 + 1
    while(left < heapSize) {
        let largest = left + 1 < heapSize && arr[left] < arr[left + 1] ? left + 1 : left
        largest = arr[index] > arr[largest] ? index : largest
        if (largest === index) {
            break
        }
        swap(arr, index, largest)
        index = largest
        left = index * 2 + 1
    }
}