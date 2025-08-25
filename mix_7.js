/*
  Example: Event Loop with setTimeout and Promise

  What is happening here?
  - console.log(start) and console.log(end) are synchronous and run immediately.
  - setTimeout schedules a macrotask to log "timeout".
  - Promise.resolve().then(...) schedules a microtask to log "promise".
  - Microtasks run after all synchronous code, before macrotasks.

  Step-by-step execution:
  1. console.log("start")        -> output: start
  2. setTimeout(..., 0) schedules a macrotask to log "timeout"
  3. Promise.resolve().then(...) schedules a microtask to log "promise"
  4. console.log("end")          -> output: end
  5. Microtasks run:
      - console.log("promise")   -> output: promise
  6. Macrotasks run:
      - console.log("timeout")   -> output: timeout

  Output:
  start
  end
  promise
  timeout
*/



console.log("start");

setTimeout(() => console.log("timeout"), 0);                     // macrotask

Promise.resolve().then(() => console.log("promise"));            // microtask

console.log("end");                                              // synchronous
