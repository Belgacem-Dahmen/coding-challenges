
const vowels = {
    a: "a", e: "e", i: "i", o: "o", u: "u"
}

/**
 * 
 * @param {string} string 
 * @returns  {string}
 */
function shortcut(string) {
    return string.split('').filter((e) => !Object.keys(vowels).includes(e)).join('')
}

console.log(shortcut('kacem'));
console.log(shortcut('Hello'));
console.log(shortcut('how are you today?'));


