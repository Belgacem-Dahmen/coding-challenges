


function bonusTime(salary, bonus) {
    return bonus ? `€${salary * 10}` : `€${salary }`    
}

console.log(bonusTime(1700, true));
console.log(bonusTime(950, false));
console.log(bonusTime(1250, true));
