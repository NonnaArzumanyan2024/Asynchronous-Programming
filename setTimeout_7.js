/*
  Example: Event Loop with Multiple setTimeouts (0ms)

  What is happening here?
  - JavaScript executes synchronous code first, line by line.
  - setTimeout schedules macrotasks to run after the current synchronous code.
  - Even with 0ms delay, setTimeout callbacks run after all synchronous code finishes.
  - Macrotasks are executed in the order they were scheduled.

  Step-by-step execution:
  1. console.log(1)         -> synchronous, prints 1
  2. console.log(2)         -> synchronous, prints 2
  3. setTimeout(..., 0)     -> schedules a macrotask to print 3
  4. setTimeout(..., 0)     -> schedules a macrotask to print 4
  5. console.log(5)         -> synchronous, prints 5
  6. Event loop runs macrotasks in order:
      - First setTimeout    -> prints 3
      - Second setTimeout   -> prints 4

  Output order:
  1
  2
  5
  3
  4
*/



console.log(1);                           // Synchronous
console.log(2);                           // Synchronous

setTimeout(() => console.log(3), 0);      // Macrotask, runs after current code
setTimeout(() => console.log(4), 0);      // Macrotask, runs after current code

console.log(5);                           // Synchronous
