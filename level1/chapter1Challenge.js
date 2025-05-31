// Function to check if a number is even
function isEven(num) {
    // if(num % 2 === 0) {
    //     return true
    // } else {
    //     return false
    // }
    return num % 2 == 0

}
 
 // Test cases
 console.log(isEven(4));      // Test Case 1: Positive even integer
 console.log(isEven(7));     // Test Case 2: Positive odd integer
 console.log(isEven(-2));     // Test Case 3: Negative even integer
 console.log(isEven(0));      // Test Case 4: Zero
 console.log(isEven("10"));  // Test Case 5: Non-number input