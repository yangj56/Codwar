const input = 32123;

function validatePIN(pin) {
    //return true or false
    const matchingPattern = /^\d{4}(?:\d{2})?$/;
    // return /^(\d{4}|\d{6})$/.test(pin);
    return matchingPattern.test(input);

}

console.log(validatePIN(input));