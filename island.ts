
// 一个矩阵中只有0和1两种值，每个位置都可以和自己的上、下、左、右
// 四个位置相连，如果有一片1连在一起，这个部分叫做一个岛，求一个
// 矩阵中有多少个岛？

// 0 0 1 0 1 0
// 1 1 1 0 1 0
// 1 0 0 1 0 0
// 0 0 0 0 0 0



function islands(arr: string[][]) {
    if (!arr || !arr.length) return 0
    const row = arr.length
    const column = arr[0].length
    let res = 0

    for(let i = 0; i < row; i++) {
        for(let j = 0; j < column; j++) {
            if (arr[i][j] === '1') {
                res++
                infect(arr, i, j, row, column)
            }
        }
    }

    return res
}


function infect(arr: string[][], i, j, row, column) {
    if (i < 0 || j >= column || j < 0 || i >= row || arr[i][j] !== '1') {
        return
    }

    arr[i][j] = '2'
    infect(arr, i - 1, j, row, column)
    infect(arr, i + 1, j, row, column)
    infect(arr, i, j - 1, row, column)
    infect(arr, i, j + 1, row, column)
}

let arr = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]

console.log(islands(arr))