
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




function shortcut_regex(string){
    return string.replace(/[aeiou]/g,'')
  }
console.log(shortcut('kacem'));
console.log(shortcut('Hello'));
console.log(shortcut('how are you today?'));


console.log(shortcut_regex('kacem'));
console.log(shortcut_regex('Hello'));
console.log(shortcut_regex('how are you today?'));


