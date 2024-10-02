

/**
 * a function that return only two decimals
 * @param {float} n 
 * @returns {float} 
 */

function twoDecimalPlaces(n) {
    return Number(n.toFixed(2))
}

console.log(twoDecimalPlaces(1.6610));
