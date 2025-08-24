/*
  Example: Handling a Rejected Promise with .then()

  What is happening here?
  - Promise.reject() creates a Promise that is immediately rejected.
  - .then() can take two callbacks:
      1. onFulfilled  -> runs if the promise is fulfilled (success)
      2. onRejected   -> runs if the promise is rejected (failure)
  - In this example, the promise is rejected, so the onRejected callback runs.
  - There is no .catch() here, so only the onRejected callback is executed.

  Step-by-step execution:
  1. Promise.reject() creates a rejected promise
  2. .then() is called:
      - success handler   -> skipped
      - failure handler   -> runs console.log("ERROR")

  Output: ERROR
*/



Promise
  .reject()                              // Create a rejected Promise immediately
  
  .then( 
    () => console.log("OK"),             // onFulfilled callback -> ignored here
    () => console.log("ERROR")           // onRejected callback -> runs because promise is rejected
  );
