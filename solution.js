const binaryArrayToNumber = arr => {
    arr = arr.reverse()
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr.splice(i, 1, (2 ** i))
        }
    }
    return arr.reduce((a, b) => a + b, 0)
}

console.log(binaryArrayToNumber([0, 0, 0, 1])) // 1
console.log(binaryArrayToNumber([0, 0, 1, 0])) // 2
console.log(binaryArrayToNumber([1, 0, 0, 1])) // 9
console.log(binaryArrayToNumber([1, 1, 1, 1])) // 15

// Alternate Solution

const binaryArrayToDecimal = arr => parseInt(arr.join(''), 2)

console.log(binaryArrayToDecimal([0, 0, 0, 1])) // 1
console.log(binaryArrayToDecimal([0, 0, 1, 0])) // 2
console.log(binaryArrayToDecimal([1, 0, 0, 1])) // 9
console.log(binaryArrayToDecimal([1, 1, 1, 1])) // 15