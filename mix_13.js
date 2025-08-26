/*
  Example: Async/Await with Microtasks

  What is happening here?
  - test() is an async function
  - Inside test():
      - console.log(1) runs immediately
      - await Promise.resolve():
          - pauses execution of test()
          - schedules the rest of test() (after the await) as a microtask
      - console.log(2) will run later in that microtask
  - Outside test():
      - console.log(3) and console.log(4) run right after test() is called
      - They are synchronous, so they run before the microtask resumes

  Step-by-step execution:
  1. test() is called
      - logs 1
      - hits `await Promise.resolve()` -> pauses test() -> schedules resume
  2. console.log(3) runs (synchronous)
  3. console.log(4) runs (synchronous)
  4. Event loop processes microtasks:
      - test() resumes -> logs 2
      - second await pauses again (but nothing left after it)
  
  Output order:
  1
  3
  4
  2
*/



async function test() {
  console.log(1);
  await Promise.resolve();               // pause -> schedule continuation as microtask
  console.log(2);
  await Promise.resolve();               // pause again (nothing after)
}

test();
console.log(3);
console.log(4);
