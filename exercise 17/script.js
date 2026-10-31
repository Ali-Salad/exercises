const Tempreture = Number(prompt("Enter Tempreture"));

if (Tempreture > 45) {
    console.log("Very Hot");
} else if (Tempreture > 25) {
    console.log("hot")

} else if (Tempreture > 14) {
    console.log("Cold");
} else if (Tempreture > 15) {
    console.log("Warm");
} else if (Tempreture <= 0) {
    console.log(" Very Cold");
} else {
    Console.log("Your Tempreture is above standard")
}
