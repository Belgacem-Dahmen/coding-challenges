function reverse(text) {
    return text.trim().split(' ').reverse().join(' ')
}

console.log(reverse('   kacem dahmen   '));
console.log(reverse('Hello world'));
console.log(reverse('Hi  There'));
