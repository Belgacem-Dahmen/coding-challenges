function smash(words) {
    return words.join(' ').trim()
}

console.log(smash(['Hello', "World", "how", 'Are', "you ?"]));
console.log(smash(["Bonjour", "la", "France,", "ici","c'est", "paris"]));

