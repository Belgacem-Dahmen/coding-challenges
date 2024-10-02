

/**
 * a function that identify if they are in love or not
 * @param {number} flower1 
 * @param {number} flower2 
 * @returns  boolean
 */

function loveFunc(flower1, flower2) {
    return (flower1 + flower2) % 2 == 0 ? false : true
}

console.log(loveFunc(100, 1));
