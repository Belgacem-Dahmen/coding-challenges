function findAverage(numbers) {
    return numbers.length > 0 || null ? numbers.reduce((a, b) => a + b,0) / numbers.length : 0
}

console.log(findAverage([1, 2, 3]))
console.log(findAverage([]))
