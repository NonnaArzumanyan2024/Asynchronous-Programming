/*
  Example: Event Loop with setTimeout and Promise

  What is happening here?
  - console.log(C) is synchronous and runs immediately.
  - setTimeout schedules a macrotask to log "A".
  - Promise.resolve().then(...) schedules a microtask to log "B".
  - Microtasks run after all synchronous code, before macrotasks.

  Step-by-step execution:
  1. console.log(C) -> synchronous -> output: C
  2. Promise.resolve().then(...) schedules a microtask -> logs B
  3. setTimeout(..., 0) schedules a macrotask -> logs A
  4. After synchronous code finishes:
      - Microtasks run first -> console.log(B) -> output: B
  5. Macrotask runs -> console.log(A) -> output: A

  Output:
  C
  B
  A
*/



setTimeout(() => console.log("A"), 0);                          // macrotask
Promise.resolve().then(() => console.log("B"));                 // microtask
console.log("C");                                               // synchronous
