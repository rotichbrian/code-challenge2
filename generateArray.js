// Define a function called generateArray that takes two arguments: value1 and value2
function generateArray(value1, value2) {
    // An empty array is Initialized ('arr') to store the generated numbers
    let arr = [];

    // Use of for loop to iterate from 'value1' to 'value2'
    for (let i = value1; i <= value2; i++) {
        // Push each value of 'i' to the 'arr' array
        arr.push(i);
    }

    // Return the generated array containing numbers from 'value1' to 'value2'
    return arr;
}

// Call the generateArray function with the arguments -10 and 100 and log the result to the console
console.log(generateArray(-10, 100));



