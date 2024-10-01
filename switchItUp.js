function switchItUp(number) {
    switch (number) {
        case 0:
            return "zero"
            break;
        case 1:
            return "one"
            break;
        case 2:
            return "2"
            break;
        case 3:
            return "three"
            break;
        case 4:
            return "four"
            break;
        case 5:
            return "five"
            break;
        case 6:
            return "six"
            break;
        case 7:
            return "seven"
            break;
        case 8:
            return "eight"
            break;
        case 9:
            return "nine"
            break;


        default:
            return "please provide a number between 0 and 9"
            break;
    }
}

console.log(switchItUp(0)); //return zero
console.log(switchItUp(5)); //return five
console.log(switchItUp(55)); //return error message
