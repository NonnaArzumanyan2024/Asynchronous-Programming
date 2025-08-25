/*
  Example: Checking if Async Function Returns a Promise

  What is happening here?
  - Declaring a function with "async" automatically makes it return a Promise.
  - Even though foo() returns 42, JavaScript wraps it in Promise.resolve(42).
  - Using `instanceof Promise` checks whether the returned value is a Promise object.

  Step-by-step execution:
  1. async function foo() { return 42 } is defined
  2. foo() is called and returns Promise.resolve(42)
  3. result instanceof Promise checks if result is a Promise
      - true, because foo() always returns a Promise

  Output: true
*/



async function foo() {
  return 42;                                       // wrapped in Promise.resolve(42)
}

let result = foo();
console.log(result instanceof Promise);            // Logs: true
