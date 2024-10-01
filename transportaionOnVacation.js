

/*
priceperday = 40$
if delay > 3 you get minus 20$
if delay > 7 you get minus 50$


/**
 * 
 * @param {number} d 
 * @returns string
 */


function rentalCarCost(d) {
    if (d < 3) {
        return `the price is ${d * 40} $`;
    } else if (d >= 3 && d < 7) {
        return `the price is ${(d * 40) - 20} $`;
    } else if (d >= 7) {
        return `the price is ${(d * 40) - 50} $`;
    }
}


// in switch case , youcant put a boolean as a value , it has to be a hard coded value

console.log(rentalCarCost(1));
console.log(rentalCarCost(2));
console.log(rentalCarCost(3));
console.log(rentalCarCost(5));
console.log(rentalCarCost(10));


/**
 * Another solution with ternary operations
 * 
 * function rentalCarCost(d) {
    return d < 3 ? `the price is ${d * 50} $` :
           d <= 7 ? `the price is ${(d * 50) - 20} $` :
           `the price is ${(d * 50) - 50} $`;
}

 */