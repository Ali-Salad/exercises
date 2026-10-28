let input;
do {
    input = prompt("Enter a number with at least 13 digits:");
    if (input === null) break;
} while (!/^\d{13,}$/.test(input));

if (input !== null) console.log("Success! Your number is: " + input);