/*
  Example: Handling Rejected Promise with Async/Await

  What is happening here?
  - foo() is an async function.
  - await Promise.reject("Error!") creates a rejected Promise.
  - When an awaited Promise rejects, it throws an error inside the async function.
  - Since foo() is called with .catch(), the rejection is caught, and the error message is logged.
  - console.log("After await") never runs because the function was interrupted by the rejection.

  Step-by-step execution:
  1. foo() is called
  2. await Promise.reject("Error!") rejects
      - throws "Error!" inside async function
  3. The rejection is caught by foo().catch(err => console.log(err))
      - logs: Error!
  4. console.log("After await") is never executed

  Output: Error!
*/



async function foo() {
  await Promise.reject("Error!");                 // rejected Promise -> throws

  console.log("After await");                     // never runs
}

foo().catch(err => console.log(err));             // catch handles the rejection
