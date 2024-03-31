// Define an array of numbers from 1 to 10
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Define a function called generatePrimeNumbers that takes an array as an argument
function generatePrimeNumbers(array) {
    // Initialize an empty array to store the prime numbers
    let result = [];

    // for...of loop used to Iterate through each value in the input array 
    for (value of array) {
        // Check if the current value is not divisible by 2 or 3 and not equal to 1, or equal to 3 or 2
        if ((value % 2) > 0 && (value % 3) > 0 && value !== 1 || value === 3 || value === 2) {
            // Use of push function if the condition is met to push the value to the result array
            result.push(value);
        }
    }

    // Return the array containing the prime numbers
    return result;
}

// Call the generatePrimeNumbers function with the 'numbers' array and log the result to the console
console.log(generatePrimeNumbers(numbers));



