/*
  Example: Async/Await Execution Order

  What is happening here?
  - An async IIFE (Immediately Invoked Function Expression) is created and executed.
  - Inside, "start" is logged immediately (synchronous).
  - await null pauses execution and schedules the remaining code ("middle") to run later as a microtask.
  - Outside the async function, console.log("end") runs synchronously.
  - Finally, after the synchronous code finishes, the microtask resumes and "middle" is logged.

  Step-by-step execution:
  1. console.log("start") runs             -> output: start
  2. await null pauses the async function, scheduling the rest as a microtask
  3. console.log("end") runs outside async -> output: end
  4. The microtask resumes, console.log("middle") runs -> output: middle

  Output:
  start
  end
  middle
*/



(async () => {
  console.log("start");           // synchronous, runs immediately

  await null;                     // pauses, schedules the rest as a microtask

  console.log("middle");          // runs later, after synchronous code
})();

console.log("end");               // synchronous, runs before "middle"
