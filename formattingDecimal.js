

/**
 * a function that return only two decimals
 * @param {float} n 
 * @returns {float} 
 */

function twoDecimalPlaces(n) {
    return Number(n.toFixed(2))
}

function twoDecimalPlaces_Math(n) {
    return Math.round(n * 100) / 100
}
console.log(twoDecimalPlaces(1.6610));
console.log(twoDecimalPlaces_Math(1.6610));
