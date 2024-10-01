

function greet(language) {
    return Object.keys(languages).includes(language) ? languages[language] : languages.english
}

function greet2(language) {
    return languages.hasOwnProperty(language) ? languages[language] : languages.english
}

const languages = {
    "english": "Welcome",
    "dutch": "WelKomen",
    "french": "Bienvenue",
    "italian": "Ciao",
    "swedish": "Valkomen"
}

console.log(greet("italian"));
console.log(greet("brazilian"));
console.log(greet("swedish"));


console.log('----------Exemple 1--------------');

console.log(greet2("italian"));
console.log(greet2("brazilian"));
console.log(greet2("swedish"));

console.log('-----------Exemple2-------------');
