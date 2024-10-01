/**
 * 
 * @param {Array} arr 
 */



function firstNonConsecutive(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - 1 !== arr[i - 1]) return arr[i];
    }
    return null

}


console.log(firstNonConsecutive([1, 2, 3, 4, 6]));
console.log(firstNonConsecutive([1, 2, 3, 4, 5,6,8]));
