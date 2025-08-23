/*
  Example: Event Loop with setTimeout

  What is happening here?
  - JavaScript runs synchronous code line by line first.
  - setTimeout schedules macrotasks that run after the current code and microtasks.
  - The delay in setTimeout determines when the callback is added to the macrotask queue.
  - Even setTimeout with 0ms delay runs after synchronous code.

  Step-by-step execution:
  1. console.log(1)        -> synchronous, prints 1
  2. console.log(2)        -> synchronous, prints 2
  3. setTimeout(..., 100)  -> schedules a macrotask to print 3 after ~100ms
  4. setTimeout(..., 0)    -> schedules a macrotask to print 4 after 0ms (but still after current code)
  5. console.log(5)        -> synchronous, prints 5
  6. Event loop runs macrotasks in order:
      - setTimeout 0ms.    -> prints 4
      - setTimeout 100ms.  -> prints 3

  Output order:
  1
  2
  5
  4
  3
*/



console.log(1);                             // Synchronous
console.log(2);                             // Synchronous

setTimeout(() => console.log(3), 100);      // Macrotask, runs after ~100ms
setTimeout(() => console.log(4), 0);        // Macrotask, runs after current code

console.log(5);                             // Synchronous
