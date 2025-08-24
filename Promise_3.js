/*
  Example: Synchronous and Asynchronous Behavior with Promises

  What is happening here?
  - The executor function inside new Promise() runs immediately and synchronously.
  - resolve() schedules the .then() callback as a microtask (runs after current synchronous code).
  - console.log("Outside") runs synchronously after the Promise is created.
  - Microtasks (like .then callbacks) run after all synchronous code finishes.

  Step-by-step execution:
  1. new Promise(...) executes immediately:
      - console.log("Inside")         -> prints "Inside"
      - resolve() schedules the .then() callback as a microtask
  2. console.log("Outside")           -> synchronous -> prints "Outside"
  3. Microtask (.then callback) runs  -> prints "Then"

  Output:
  Inside
  Outside
  Then
*/



new Promise((resolve, reject) => {
  console.log("Inside");                      // Runs synchronously
  resolve();                                  // Schedules .then() as a microtask
}).then(() => console.log("Then"));           // Runs after synchronous code

console.log("Outside");                       // Runs synchronously
