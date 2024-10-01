function fiveLine(s) {
    let str = s.trim();  // Supprime les espaces autour de la chaîne
    let init = "";
    for (let i = 1; i <= 5; i++) {
        init += str.repeat(i) + "\n";
    }
    return init.trim();
}

console.log(fiveLine('abc'))


const adjacents = {
    1: [1, 2, 4],
    2: [1, 2, 3, 5],
    3: [2, 3, 6],
    4: [1, 4, 5, 7],
    5: [2, 4, 5, 6, 8],
    6: [3, 6, 9],
    7: [4, 7, 8],
    8: [0, 8, 9, 7, 5],
    9: [9, 8, 6],
    0: [8]
}

function getPins(number) {
    return (adjacents[number])
}

console.log(getPins(8)) 