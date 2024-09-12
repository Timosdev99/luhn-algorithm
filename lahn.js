const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function isRequired(input) {
    return input !== '';
}

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

function promptAndValidate() {
    rl.question('Enter card number: ', (input) => {
        if (!isRequired(input)) {
            console.log('This value is required. Please try again.');
            promptAndValidate();
        } else {
            const result = luhnAlgorithm(input);
            console.log(`Is ${input} valid? ${result}`);
            rl.close();
        }
    });
}

// Usage
promptAndValidate();