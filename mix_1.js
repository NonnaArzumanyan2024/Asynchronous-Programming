/*
  Example: Event Loop with setTimeout, Promise, and queueMicrotask

  What is happening here?
  - JavaScript executes all synchronous code first.
  - setTimeout(..., 0) schedules a callback as a macrotask (runs later in the task queue).
  - Promise.then() schedules its callback as a microtask.
  - queueMicrotask() also schedules a microtask.
  - Event loop rule: 
      1. Run all synchronous code.
      2. Run all microtasks (Promise, queueMicrotask).
      3. Then run macrotasks (like setTimeout).

  Step-by-step execution:
  1. console.log("start") -> output: start
  2. setTimeout(..., 0) schedules "timeout" as a macrotask
  3. Promise.resolve().then(...) schedules "promise" as a microtask
  4. queueMicrotask(...) schedules "microtask" as a microtask
  5. console.log("end") -> output: end
  6. After sync code, microtasks run:
      - console.log("promise") -> output: promise
      - console.log("microtask") -> output: microtask
  7. Finally, macrotask (setTimeout) runs:
      - console.log("timeout") -> output: timeout

  Output:
  start
  end
  promise
  microtask
  timeout
*/



console.log("start");                        // synchronous first

setTimeout(() => {
  console.log("timeout");                    // macrotask -> runs last
}, 0);

Promise.resolve().then(() => {
  console.log("promise");                    // microtask -> runs before timeout
});

queueMicrotask(() => {
  console.log("microtask");                  // microtask -> runs before timeout
});

console.log("end");                          // synchronous -> runs before microtasks
