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
      - console.log(3) runs right after test() is called
      - It is synchronous, so it runs before the microtask resumes

  Step-by-step execution:
  1. test() is called
      - logs 1
      - hits `await Promise.resolve()` -> pauses test() -> schedules resume
  2. console.log(3) runs (synchronous, outside async)
  3. Event loop processes microtasks:
      - test() resumes -> logs 2
  
  Output order:
  1
  3
  2
*/



async function test() {
  console.log(1);
  await Promise.resolve();          // pause -> continuation in microtask
  console.log(2);
}

test();
console.log(3);
