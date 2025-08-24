/*
  Example: Chained Promises with Assignment and Finally

  What is happening here?
  - Promise.resolve(4) creates an immediately resolved Promise with value 4.
  - The first .then() assigns this value to num1.
  - The second .then() returns a new resolved Promise with value 6.
  - The third .then() assigns this new value to num2.
  - .finally() runs after all .then() callbacks, regardless of success or failure, and prints the sum of num1 + num2.
  - Important: .finally() does not receive the resolved value from the previous Promise.

  Step-by-step execution:
  1. Promise.resolve(4)                       -> resolved with 4
  2. First .then(r1 => num1 = r1)             -> num1 = 4
  3. Second .then(() => Promise.resolve(6))   -> returns a new resolved Promise
  4. Third .then(r2 => num2 = r2)             -> num2 = 6
  5. .finally()                               -> prints num1 + num2 = 10

  Output: 10
*/



let num1, num2;

Promise
  .resolve(4)                               // Creates resolved Promise with 4
  
  .then(r1 => num1 = r1)                    // Assigns 4 to num1
  .then(() => Promise.resolve(6))           // Returns a new resolved Promise with 6
  .then(r2 => num2 = r2)                    // Assigns 6 to num2
  
  .finally(() => {
     console.log(num1 + num2)               // Prints 10
  });
