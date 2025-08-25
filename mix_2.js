/*
  Example: Promise.then vs queueMicrotask

  What is happening here?
  - JavaScript runs synchronous code first.
  - Promise.then() schedules its callback as a microtask.
  - queueMicrotask() also schedules a callback as a microtask.
  - Event loop rule: after synchronous code, all microtasks are executed in the order they were added.

  Step-by-step execution:
  1. console.log("A")          -> output: A
  2. Promise.resolve().then(...) schedules "B" as a microtask
  3. queueMicrotask(...) schedules "C" as a microtask
  4. console.log("D")          -> output: D
  5. After synchronous code finishes:
      - first microtask runs.  -> console.log("B") -> output: B
      - next microtask runs    -> console.log("C") -> output: C

  Output:
  A
  D
  B
  C
*/



console.log("A");                                         // synchronous

Promise.resolve().then(() => console.log("B"));           // microtask

queueMicrotask(() => console.log("C"));                   // microtask
 
console.log("D");                                         // synchronous
