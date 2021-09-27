// 合并数字'1,2,3,5,7,8,13' => '1~3,5,7~8,13'
function changeStr(str) {
    const num = str.split(',').map(item => Number(item))
    let result = ''

    for(let i = 0; i < num.length; i++) {
        if (i === 0) {
            result = result + num[i]
        } else if (i === num.length - 1) {
            if (num[i] - num[i - 1] === 1) {
                result = result + '~' + num[i]
            } else {
                result = result + ',' + num[i]
            }
        } else {
            if (num[i] - num[i - 1] === 1 && num[i + 1] - num[i] === 1) {
                continue
            }
            if (num[i] - num[i - 1] === 1 && num[i + 1] - num[i] !== 1) {
                result = result + '~' + num[i]
            } else if (num[i] - num[i - 1] !== 1) {
                result = result + ',' + num[i]
            }
            
        }
    }
    return result
}

console.log(changeStr('1,2,3,5,7,8,13'))