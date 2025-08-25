/*
  Example: Event Loop with Nested Microtasks and setTimeout

  What is happening here?
  - JavaScript executes synchronous code first.
  - setTimeout schedules macrotasks.
  - Promise.then and queueMicrotask schedule microtasks.
  - Microtasks run after synchronous code, before macrotasks.
  - Nested microtasks (inside setTimeout) run immediately after the current macrotask finishes its synchronous part.

  Step-by-step execution:
  1. console.log(A) -> synchronous -> output: A
  2. setTimeout(..., 0) schedules first macrotask -> logs B + nested queueMicrotask(C)
  3. Promise.resolve().then(...) schedules a microtask -> logs D
  4. setTimeout(..., 0) schedules second macrotask -> logs E + nested Promise.then(F)
  5. console.log(G) -> synchronous -> output: G
  6. Microtasks after sync code:
      - Promise.then -> console.log(D) -> output: D
  7. First macrotask executes:
      - console.log(B) -> output: B
      - nested queueMicrotask -> console.log(C) -> output: C
  8. Second macrotask executes:
      - console.log(E) -> output: E
      - nested Promise.then -> console.log(F) -> output: F

  Output:
  A
  G
  D
  B
  C
  E
  F
*/



console.log("A");

setTimeout(() => {
  console.log("B");
  queueMicrotask(() => console.log("C"));                    // nested microtask inside macrotask
}, 0);

Promise.resolve().then(() => console.log("D"));              // microtask

setTimeout(() => {
  console.log("E");
  Promise.resolve().then(() => console.log("F"));            // nested microtask inside macrotask
}, 0);

console.log("G");                                            // synchronous
