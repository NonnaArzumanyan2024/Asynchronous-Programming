/*
  Example: Asynchronous Behavior with setTimeout Returning a Value

  What is happening here?
  - foo() schedules a function to run after 500ms using setTimeout.
  - The return inside setTimeout does NOT return from the outer function foo().
  - foo() does not return any value immediately (undefined is returned by default).
  - This demonstrates that asynchronous functions cannot return values directly like synchronous functions.

  Step-by-step execution:
  1. foo() is called
      - setTimeout schedules a callback to run after 500ms
      - foo() finishes execution immediately -> returns undefined
  2. After 500ms, the setTimeout callback runs
      - return 42 inside the callback has no effect outside foo()

  Output: foo() returns undefined
*/



function foo() {
   
  setTimeout(() => {
     return 42;                  // This return only affects the callback, not foo()
   }, 500);

  }

console.log(foo());              // Prints undefined
