# code-challenge2


## Date,2024/03/24


## By Brian Rotich


# Swap Case of Words in a String

## Description
This JavaScript code demonstrates how to swap the case of words in a string. It defines a function named `swapCase` that takes a string as an argument and returns the string with the case of each word modified.

## Usage
1. Clone the repository containing the JavaScript file.
2. Open the JavaScript file in your preferred code editor.
3. Run the JavaScript code in a Node.js environment or a web browser console.

## Code Explanation
- The code defines a string variable with the initial value "The Best Football Player".
- A function named `swapCase` is defined that takes a string as an argument.
- Within the `swapCase` function, the input string is split into an array of words using the space (' ').
-  If the character is uppercase, it is converted to lowercase using `toLowerCase()`.
  - If the character is lowercase, it is converted to uppercase using `toUpperCase()`.
  - Characters that are neither uppercase nor lowercase remain unchanged.
 - Lastly the modified characters are joined back into a string using the `join('')`

## Example
Input: "The Best Football Player"
Output: "tHe bEST fOOTBALL pLAYER"


## Technologies Used
 -Javascript



## license
The content of this site is licensed under the MIT license.



# Generate Array of Numbers

## Description
This JavaScript code shows how to generate an array of numbers within a specified range. It defines a function named `generateArray` that takes two arguments, `value1` and `value2`. The function returns an array containing numbers from `value1` to `value2`.

## Usage
1. Clone the repository containing the JavaScript file.
2. Open the JavaScript file in your preferred code editor.
3. Run the JavaScript code in a Node.js environment or a web browser console.
4. After running you will see the output in the console displaying the generated array of numbers within the range specified.


## Code Explanation
1. The code defines a function called `generateArray` that takes two arguments: `value1` and `value2`
2. Within the function, an empty array called `arr` is initialized to store the generated numbers.
3. A `for` loop is used to iterate from `value1` to `value2` (inclusive).
4. During each iteration, the current value of `i` is pushed to the `arr` array.
5. After the loop, the function returns the generated array containing numbers from `value1` to `value2`.


## Technologies Used
 -Javascript


## license
The content of this site is licensed under the MIT license.


# Generate Prime Numbers from an Array

## Description
This JavaScript code shows how to generate an array containing prime numbers. It has a function named `generatePrimeNumbers` that defines an array of numbers from 1 to 10 . The function identifies prime numbers based on specific conditions and returns an array containing only the prime numbers.

## Usage
1. Clone the repository containing the JavaScript file.
2. Open the JavaScript file in your preferred code editor.
3. Run the JavaScript code in a Node.js environment or a web browser console.
4. After running you will see the output in the console displaying array containing the prime numbers


## Code Explanation
- The code defines an array of numbers from 1 to 10 using the 'numbers' array.
- It defines a function called `generatePrimeNumbers` that takes an array as an argument.
- Within the function, an empty array called `result` is initialized to store the prime numbers.
- The function iterates through each value in the input array using a `for...of` loop.
- If the specific condition from each iteration is met, the value is pushed to the `result` array.
- Lastly, the function returns the results containing only the prime numbers as reguired.

## Example
Input: generatePrimeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
Output: [2, 3, 5, 7]


## Technologies Used
 -Javascript


## license
The content of this site is licensed under the MIT license.