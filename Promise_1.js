/*
  Example: Handling a Rejected Promise with .then() and .catch()

  What is happening here?
  - Promise.reject() creates a Promise that is immediately rejected.
  - .then() can take two callbacks:
      1. onFulfilled  -> runs if the promise is fulfilled (success)
      2. onRejected   -> runs if the promise is rejected (failure)
  - In this example, the promise is rejected, so the onRejected callback runs.
  - .catch() would handle any rejection not already handled by .then(), but here it does not run because onRejected already handled it.

  Step-by-step execution:
  1. Promise.reject() creates a rejected promise
  2. .then() is called:
      - success handler   -> skipped (because promise is rejected)
      - failure handler   -> runs console.log("ERROR")
  3. .catch() would run if the rejection was not handled, but it is ignored here

  Output: ERROR
*/



Promise
  .reject()                                 // Create a rejected Promise immediately
  
  .then(
    () => console.log("OK"),                // onFulfilled callback -> ignored here
    () => console.log("ERROR")              // onRejected callback -> runs because promise is rejected
  )

  .catch(() => console.log("WRONG!"));      // Catch any unhandled rejection -> won't run here
