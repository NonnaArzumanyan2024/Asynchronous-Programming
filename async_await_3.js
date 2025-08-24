/*
  Example: Async Function Return Value

  What is happening here?
  - Declaring a function with "async" makes it always return a Promise.
  - Even if you return a plain value (like 42), JavaScript automatically wraps it in a resolved Promise.
  - So foo() does NOT return 42 directly, but Promise { 42 }.
  - When console.log(foo()) is called, it logs the Promise object, not the actual value.

  Step-by-step execution:
  1. async function foo() { return 42 } is defined
  2. foo() is called
      - The value 42 is returned
      - Because foo is async, JavaScript wraps it in Promise.resolve(42)
  3. console.log(foo()) logs the Promise

  Output: Promise { 42 }
*/



async function foo() {
  return 42;                            // JavaScript wraps this in Promise.resolve(42)
}

console.log(foo());                     // Logs: Promise { 42 }
