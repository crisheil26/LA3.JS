// Activity: Iteration Mapping with Double Loops

// Prompt the user to input the Max Limit of the Loops
let maxLimit = prompt("Enter the Limit of the Double Loop");

// Convert input to a number
maxLimit = Number(maxLimit);

console.log("Result");

// Initialize counters
let counter1 = 0;
while (counter1 <= maxLimit) {
    let counter2 = 0;
    while (counter2 <= maxLimit) {
        let addedValue = counter1 + counter2;
        console.log(`[${counter1}] [${counter2}] Added value is ${addedValue}`);
        counter2++;
    }
    counter1++;
}
