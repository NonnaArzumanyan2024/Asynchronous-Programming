/*
  Example: Using .then() with Async Functions

  What is happening here?
  - foo() is an async function.
  - It returns 42, but because it's async, JavaScript wraps it in a resolved Promise.
  - We can use .then() to get the resolved value of the Promise.
  - console.log(a) prints the resolved value.

  Step-by-step execution:
  1. foo() is called
      - returns Promise.resolve(42)
  2. .then(a => console.log(a)) runs when the Promise resolves
      - logs: 42

  Output: 42
*/



async function foo() {
  return 42;                                      // wrapped in Promise.resolve(42)
}

foo()
  .then(a => console.log(a));                     // logs resolved value: 42
