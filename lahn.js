function luhnAlgorithm(cardNumber) {
    const digits = cardNumber.toString().split('').map(Number);
    let sum = 0;
    let isEven = false;

    for (let i = digits.length - 1; i >= 0; i--) {
        let digit = digits[i];

        if (isEven) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }

        sum += digit;
        isEven = !isEven;
    }

    return sum % 10 === 0;
}

// usage of the algorithm
const cardNumber = 4532015112830366;
const result = luhnAlgorithm(cardNumber);
console.log(`Is ${cardNumber} valid? ${result}`);