# Asynchronous Programming in JavaScript  

A collection of simple explanations and examples to understand asynchronous programming in JavaScript.  

---

## 📚 Topics Covered
- setTimeout ⏱️  
- Promises 💎  
- async/await ⚡  
- Mixed examples combining these concepts  

---

## JavaScript Execution Model
- JavaScript is single-threaded, executing one line at a time.  
- Asynchronous programming allows long-running tasks (like network requests, file reading, or timers) to run without blocking the main thread.  
- The event loop coordinates synchronous code, microtasks (like Promise callbacks), and macrotasks (like `setTimeout`).  

---

## ⏱️ setTimeout
- Schedules a function to run after a specified delay.  
- Even with a delay of 0ms, the scheduled function runs after all synchronous code and microtasks have finished.  
- It is considered a macrotask in the event loop.  
- Useful for simulating delays, creating timers, or deferring tasks.  
- Important points:  
  - The callback does not block other code.  
  - Execution order depends on the event loop and existing tasks.  

---

## 💎 Promises
- Represent a value that will be available in the future.  
- Can be in one of three states:  
  1. Pending – the initial state, neither fulfilled nor rejected.  
  2. Fulfilled – the operation completed successfully.  
  3. Rejected – the operation failed.  
- Advantages over callbacks:  
  - Avoids deeply nested code.  
  - Provides chaining via .then().  
  - Handles errors more cleanly via .catch().  
- Promises are microtasks, so they run before macrotasks in the event loop.  

---

## ⚡ async/await
- async functions always return a Promise, even if you return a regular value.  
- await pauses execution of the async function until the Promise resolves.  
- Advantages:  
  - Makes asynchronous code look synchronous, improving readability.  
  - Reduces complexity of chaining multiple Promises.  
  - Error handling can be done using try/catch, similar to synchronous code.  
- Important points:  
  - Only works inside async functions.  
  - await pauses the current async function but does not block the main thread.  

---

## 🔄 Event Loop and Task Queues
- Synchronous code runs first.  
- Microtasks (Promise callbacks, queueMicrotask) run after synchronous code.  
- Macrotasks (setTimeout, setInterval, I/O) run after microtasks.  
- Understanding this order is key to predicting how and when asynchronous tasks execute.  


