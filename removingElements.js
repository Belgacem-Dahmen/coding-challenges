function removeEveryOther(arr) {
    let newArr = []
    for (let i = 0; i <= arr.length; i++) {
        if (i % 2 === 0) {
            newArr.push(arr[i])
        }
    }
    return newArr
}
console.log(removeEveryOther(['keep', 'remove', 'keep', 'remove', 'keep']));


function removeEveryOther2(arr) {
    return arr.filter((e, i) => i % 2 === 0 ? e : null)
}

console.log(removeEveryOther2(['keep', 'remove', 'keep', 'remove', 'keep']));

