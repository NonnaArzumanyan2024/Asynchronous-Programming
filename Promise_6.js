/*
  Example: Asynchronous Behavior in Chained Promises

  What is happening here?
  - Promise.resolve(4) creates an immediately resolved Promise with value 4.
  - The first .then() assigns 4 to num1.
  - The second .then() returns a new resolved Promise with 6.
  - The third .then() assigns 6 to num2.
  - console.log(num1 + num2) runs synchronously, before any of the .then() callbacks execute.
  - Important: Because promises are asynchronous, num1 and num2 are still undefined when the console.log runs.

  Output: NaN
*/



let num1, num2;

Promise
  .resolve(4)                                // Resolved Promise with 4
  
  .then(r1 => num1 = r1)                     // num1 = 4 (runs asynchronously)
  .then(() => Promise.resolve(6))            // Returns a resolved Promise with 6
  .then(r2 => num2 = r2);                    // num2 = 6 (runs asynchronously)

console.log(num1 + num2);                    // Runs synchronously -> prints NaN
