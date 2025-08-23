/*
  Example: Asynchronous Behavior Problem with setTimeout

  What is happening here?
  - foo() tries to get a value from an asynchronous operation.
  - setTimeout schedules a function to run after 500ms, setting response = 42.
  - However, foo() returns response immediately, before setTimeout runs.
  - This demonstrates that asynchronous operations cannot return values directly.

  Step-by-step execution:
  1. foo() is called
      - response is initialized as null
      - setTimeout schedules the callback to run after 500ms
      - return response executes immediately -> returns null
  2. After 500ms, the setTimeout callback runs and sets response = 42
      - But this happens after foo() has already returned, so the returned value is not updated

  Output: foo() returns null
*/




function foo() {
  let response = null;                  // Initialize response
  
  setTimeout(() => {
    response = 42;                      // This runs after 500ms
  }, 500);
  
  return response;                      // Returns null immediately
}

console.log(foo());                     // Prints null
