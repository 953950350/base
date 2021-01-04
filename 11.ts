let matrix = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12]
]

function printZigzag(matrix) {
    let aR = 0
    let aC = 0
    let bR = 0
    let bC = 0
    let endR = matrix.length - 1
    let endC = matrix[0].length - 1
    let fromUp = false
    while(aR !== endR + 1) {
        printZigzagProcess(matrix, aR, aC, bR, bC, fromUp)
        aR = aC === endC ? aR + 1 : aR
        aC = aC === endC ? aC : aC + 1
        bC = bR === endR ? bC + 1 : bC
        bR = bR === endR ? bR : bR + 1
        fromUp = !fromUp
    }
}

function printZigzagProcess(martix, aR, aC, bR, bC, fromUp) {
    if (fromUp) {
        while(aR <= bR) {
            console.log(matrix[aR++][aC--])
        }
    } else {
        while(bR >= aR) {
            console.log(matrix[bR--][bC++])
        }
    }
}

printZigzag(matrix)
