/*
  Example: setTimeout with 0ms Delay

  What is happening here?
  - setTimeout schedules a function (callback) to run after the current synchronous code, even if the delay is 0ms.
  - console.log is passed as the callback, and "hello" is passed as its argument.
  - console.log("bye") runs synchronously immediately.
  - This demonstrates that macrotasks always run after synchronous code.

  Step-by-step execution:
  1. setTimeout(console.log, 0, "hello")  -> schedules a macrotask
  2. console.log("bye")                   -> synchronous, prints "bye"
  3. Event loop executes macrotasks       -> prints "hello"

  Output order:
  bye
  hello
*/



setTimeout(console.log, 0, "hello");            // Schedule async log of "hello" after 0ms

console.log("bye");                             // Synchronous log, prints immediately
