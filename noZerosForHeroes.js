
// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105

// STEPS
/* convert to string 
    check if the last element = 0 
    if yes => delete it 
    get back the string 
    return it into a number again 
*/
function noBoringZeroes(number) {
    let stringParam = String(number)

    while (stringParam.lastIndexOf(0) === stringParam.length - 1) {
        stringParam = stringParam.slice(0, stringParam.length - 1)
    }


    return stringParam
}

console.log(noBoringZeroes('1235500'));
