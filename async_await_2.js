/*
  Example: Async/Await with Multiple Functions

  What is happening here?
  - Two async functions are defined: first() and second().
  - When first() is called:
      1. "1" is logged immediately.
      2. It calls second():
          - second() logs "3".
          - second() is async, so it returns a resolved Promise.
      3. await pauses first() until second() resolves, so the rest of first() ("2") is scheduled as a microtask.
  - Meanwhile, synchronous code continues and console.log("4") runs.
  - After synchronous code finishes, the microtask continues and "2" is logged.

  Step-by-step execution:
  1. first() is called
  2. console.log("1")         -> output: 1
  3. second() is called
     - console.log("3")       -> output: 3
     - returns a resolved Promise
  4. await pauses first(), scheduling the rest ("2") as a microtask
  5. console.log("4") runs    -> output: 4
  6. Microtask resumes -> console.log("2") -> output: 2

  Output:
  1
  3
  4
  2
*/


async function first() {
  console.log(1);
  await second();                 // pauses here until second() resolves
  console.log(2);                 // runs later (microtask)
}

async function second() {
  console.log(3);                 // runs immediately when called
}

first();                          // call first()
console.log(4);                   // synchronous, runs before "2"
