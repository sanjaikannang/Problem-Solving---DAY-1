// Day 1 Topic : Problem Solving -  Time Complexity, Space Complexity 

// Problems : 
//  Explain the concept of prime numbers and write a function to check if a given number is prime.
//  Write a function to find the largest element in an array.
//  Write a function to find the second largest element in an array.
//  Write a function to find the nth Fibonacci number using iteration.
//  Write a function to calculate the factorial of a number using iteration.

//----------------------------------------------------------------------------------------------------------

// 1. Explain the concept of prime numbers and write a function to check if a given number is prime.

function isPrime(number) {
    // If number is less than 2, it's not prime
    if (number < 2) {
        return false;
    }

    // Check for divisibility from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            // If number is divisible by any other number, it's not prime
            return false;
        }
    }

    // If no divisor is found, the number is prime
    return true;
}

// Example usage:
const num = 17;
if (isPrime(num)) {
    console.log(num + " is a prime number.");
} else {
    console.log(num + " is not a prime number.");
}

//----------------------------------------------------------------------------------------------------------

// 2. Write a function to find the largest element in an array.

function findLargestElement(arr) {
    // If array is empty, return undefined
    if (arr.length === 0) {
        return undefined;
    }

    // Assume the first element is the largest
    let largest = arr[0];

    // Iterate through the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
        // If current element is greater than the current largest, update largest
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    return largest;
}

// Example usage:
const array = [10, 5, 20, 8, 15];
const largestElement = findLargestElement(array);
console.log("The largest element in the array is:", largestElement);

//----------------------------------------------------------------------------------------------------------

// 3. Write a function to find the second largest element in an array.

function findSecondLargest(arr) {
    // If array has less than 2 elements, return undefined
    if (arr.length < 2) {
        return undefined;
    }

    // Assume the first and second elements are the largest and second largest
    let largest = Math.max(arr[0], arr[1]);
    let secondLargest = Math.min(arr[0], arr[1]);

    // Iterate through the array starting from the third element
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] > largest) {
            // If current element is greater than largest, update both largest and secondLargest
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            // If current element is greater than secondLargest but not equal to largest, update secondLargest
            secondLargest = arr[i];
        }
    }

    return secondLargest;
}

// Example usage:
const array1 = [10, 5, 20, 8, 15];
const secondLargestElement = findSecondLargest(array1);
console.log("The second largest element in the array is:", secondLargestElement);

//----------------------------------------------------------------------------------------------------------

// 4. Write a function to find the nth Fibonacci number using iteration.

function fibonacci(n) {
    // Base cases for 0 and 1
    if (n === 0) return 0;
    if (n === 1) return 1;

    let fibNMinus1 = 1; // Fibonacci number for n - 1
    let fibNMinus2 = 0; // Fibonacci number for n - 2
    let fibN = 0; // Fibonacci number for n

    // Iterate from 2 to n
    for (let i = 2; i <= n; i++) {
        // Calculate Fibonacci number for current n
        fibN = fibNMinus1 + fibNMinus2;

        // Update fibNMinus1 and fibNMinus2 for the next iteration
        fibNMinus2 = fibNMinus1;
        fibNMinus1 = fibN;
    }

    return fibN;
}

// Example usage:
const n = 6;
console.log("The", n + "th Fibonacci number is:", fibonacci(n));

//----------------------------------------------------------------------------------------------------------

// 5. Write a function to calculate the factorial of a number using iteration.

function factorial(n) {
    // Base case: factorial of 0 is 1
    if (n === 0) {
        return 1;
    }

    // Initialize result to 1
    let result = 1;

    // Multiply result by numbers from 1 to n
    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
}

// Example usage:
const num1 = 5;
console.log("The factorial of", num1, "is:", factorial(num1));

//----------------------------------------------------------------------------------------------------------