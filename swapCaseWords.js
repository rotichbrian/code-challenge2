// Define a string variable with the initial value "The Best Football Player"
let string = "The Best Football Player";


// Define a function named swapCase that swaps the case of each character in a given string
function swapCase(string) {
  // Split the input string into an array of characters
  return string.split('')
      // Use map to iterate over each character and swap the case as per the current case
      .map(char => {
          // If the character is uppercase, convert it to lowercase; otherwise, convert it to uppercase
          if (char === char.toUpperCase()) {
              return char.toLowerCase();
          } else if (char === char.toLowerCase()) {
              return char.toUpperCase();
          } else {
              return char; // characters that are neither uppercase or lower case remain unchanged
          }
      })
      // Join the modified characters back into a string
      .join('');
}

// Call the swapCase function with the input string and log the result to the console
console.log(swapCase(string));










  