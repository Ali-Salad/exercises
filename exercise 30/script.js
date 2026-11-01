function operate(a, b, callback) {
    return callback(a, b);
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

console.log("Addition:", operate(8, 4, add));        // Output: 8
console.log("Subtraction:", operate(8, 5, subtract)); // Output: 2
console.log("multiply:", operate(5, 7, multiply)); // Output: 2
console.log("divide:", operate(2, 2, divide)); // Output: 2
