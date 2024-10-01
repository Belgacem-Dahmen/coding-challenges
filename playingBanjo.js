function areYouPlayingBanjoo(name) {
    return name.startsWith('r') || name.startsWith('R') ?
        `${name} is playing Banjo ` : `${name} does not play Banjoo`

}

console.log(areYouPlayingBanjoo('Rami'))