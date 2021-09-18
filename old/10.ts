const matrix = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]

function printEdge(martix: number[][],lr: number, lc: number, rr:number, rc:number) {
    if (lr === rr) {
        while(lc <= rc) {
            console.log(martix[lr][lc++])
        }
    } else if (lc === rc) {
        while(lr <= rr) {
            console.log(martix[lr++][lc])
        }
    } else {
        let currentR = lr
        let currentC = lc
        while(currentC < rc) {
            console.log(martix[currentR][currentC++])
        }
        while(currentR < rr) {
            console.log(martix[currentR++][currentC])
        }
        while(currentC > lc) {
            console.log(martix[rr][currentC--])
        }
        while(currentR > lr) {
            console.log(martix[currentR--][currentC])
        }
    }
}

function spiralOrderPrint(martrix: number[][]) {
    let lr = 0
    let lc = 0
    let rr = martrix.length - 1
    let rc = martrix[0].length - 1
    while(lr < rr && lc < rc) {
        printEdge(martrix, lr++, lc++, rr--, rc--)
    }
}
spiralOrderPrint(matrix)