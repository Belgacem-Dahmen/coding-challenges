
function getAverage(array) {
    return Math.floor(array.reduce((prev, current) => (prev + current),0) /array.length)
    
}

console.log(getAverage([1,2,3]));
