/*
  Example: Long-running Microtasks vs setTimeout

  What is happening here?
  - setTimeout schedules a callback as a macrotask.
  - Promise.resolve().then(...) schedules callbacks as microtasks.
  - Microtasks run after synchronous code and before macrotasks.
  - If a microtask takes a long time (like the "C" loop), it blocks the event loop, delaying macrotasks.

  Step-by-step execution:
  1. console.log("D") -> synchronous -> output: D
  2. setTimeout(..., 0) schedules "A" as a macrotask
  3. First Promise.then schedules "B" as a microtask
  4. Second Promise.then schedules the long "C" loop as a microtask
  5. After synchronous code finishes:
      - Microtask 1    -> console.log("B") -> output: B
      - Microtask 2    -> runs the loop printing "C" 1000 times
  6. Only after all microtasks finish, the macrotask runs:
      - console.log("A") -> output: A

  Output:
  D
  B
  C (1000 times)
  A
*/



setTimeout(() => console.log("A"), 0);                  // macrotask

Promise.resolve().then(() => console.log("B"));         // microtask

Promise.resolve().then(() => {                
  for (let i = 0; i < 1000; ++i) {
    console.log("C");                                   // microtask (long-running)
  }
});

console.log("D");                                       // synchronous
                   
