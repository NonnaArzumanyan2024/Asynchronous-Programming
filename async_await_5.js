/*
  Example: typeof an Async Function Return

  What is happening here?
  - An async function always returns a Promise.
  - Even if you return a simple value (like 42), JavaScript wraps it in Promise.resolve(42).
  - So foo() returns a Promise object.
  - typeof foo() will therefore be "object".

  Step-by-step execution:
  1. async function foo() { return 42 } is defined
  2. foo() is called
      - returns Promise.resolve(42)
  3. typeof foo() evaluates to "object" (because all Promises are objects in JavaScript)

  Output: object
*/



async function foo() {
  return 42;                            // wrapped in Promise.resolve(42)
}

console.log(typeof foo());              // Logs: "object"
