/*
  Example: Chaining Promises

  What is happening here?
  - Promise.resolve() creates an immediately resolved Promise.
  - The first .then() schedules a microtask to run its callback and prints "A".
  - The second .then() is chained and runs after the first .then() callback completes, printing "B".
  - Both callbacks are microtasks, so they run after all synchronous code.

  Step-by-step execution:
  1. Promise.resolve()                             -> immediately resolved
  2. First .then() schedules microtask             -> prints "A"
  3. Second .then() schedules after first .then()  -> prints "B"

  Output:
  A
  B
*/



Promise.resolve()
  
  .then(() => console.log("A"))                // First microtask   -> prints "A"
  .then(() => console.log("B"));               // Chained microtask -> prints "B"

