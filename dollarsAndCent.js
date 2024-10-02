
/**
 *  a function that convert a price to two rounded digits and return a string 
 * @param {float} money 
 * @returns {string} 
 */
function formatMoney(money) {

    return `$ ${((money.toFixed(2)))}`
}

console.log(formatMoney(100));
