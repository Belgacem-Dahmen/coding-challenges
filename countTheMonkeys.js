function monkeyCount(value) {
    let newArray = []
    for (let i = 1;i<=value;i++) {
            newArray.push(i)
    }
    return newArray
}

console.log(monkeyCount(10));
console.log(monkeyCount(1));
