// Spread operator
const a = [1, 2, 3];
const b = [4, 5, 6];
const combined = [...a, ...b];

console.log(combined);

// 2. Rest operator
function multiply(...numbers) {
    return numbers.reduce((product, n) => product * n, 1);
}

console.log(multiply(2, 3, 4));
console.log(multiply(5));
console.log(multiply());        