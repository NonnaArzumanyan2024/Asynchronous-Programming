/*
  Example: Async Function with Await and Execution Order

  What is happening here?
  - "foo" is an async function.
  - Inside foo():
      1. "A1" is logged immediately when foo is called.
      2. await Promise.resolve(42) pauses the function and schedules the rest ("A2") as a microtask.
  - Outside foo():
      1. "S1" logs first (synchronous).
      2. foo() is called:
          - logs "A1"
          - pauses at await
      3. "S2" logs next (synchronous).
  - Finally, after all synchronous code finishes, the microtask resumes and "A2" logs.

  Step-by-step execution:
  1. console.log("S1")     -> output: S1
  2. foo() is called
     - console.log("A1")   -> output: A1
     - await Promise.resolve(42) pauses, schedules "A2"
  3. console.log("S2")     -> output: S2
  4. Microtask resumes.    -> console.log("A2") -> output: A2

  Output:
  S1
  A1
  S2
  A2
*/



async function foo() {
  console.log("A1");
  await Promise.resolve(42);         // pauses, rest is scheduled as microtask
  console.log("A2");
}

console.log("S1");
foo();
console.log("S2");
