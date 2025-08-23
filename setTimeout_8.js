/*
  Example: setTimeout with Additional Arguments

  What is happening here?
  - setTimeout can take extra arguments after the delay and pass them to the callback.
  - console.log is passed as the callback.
  - "hello" is passed as an argument to console.log after 100ms.
  - console.log("bye") runs synchronously immediately.

  Step-by-step execution:
  1. setTimeout(console.log, 100, "hello")         -> schedules a macrotask to run after 100ms
      - The callback is console.log 
      - Argument "hello" will be printed when the callback runs
  2. console.log("bye")                            -> synchronous, prints "bye"
  3. After 100ms, the setTimeout callback runs.    -> prints "hello"

  Output order:
  bye
  hello
*/




setTimeout(console.log, 100, "hello");           // Schedule async log of "hello" after 100ms

console.log("bye");                              // Synchronous log, prints immediately
