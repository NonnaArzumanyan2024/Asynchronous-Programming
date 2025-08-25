/*
  Example: Handling Asynchronous Callbacks with setTimeout

  What is happening here?
  - We define two functions: onSuccess and onFail to handle success/failure messages.
  - The function foo takes a number `p` and two callbacks: resolve and reject.
  - Inside foo, setTimeout simulates asynchronous work (2 seconds delay).
      - If p is even, resolve(p) is called.
      - If p is odd, reject(p) is called.
  - Here, foo(42, onSuccess, onFail) is called:
      - 42 is even, so after 2 seconds, onSuccess(42) runs.
      - onFail is ignored.

  Step-by-step execution:
  1. foo(42, onSuccess, onFail) is called
  2. setTimeout schedules a callback after 2000ms
  3. Meanwhile, the main thread continues (nothing else here)
  4. After 2 seconds, the callback runs:
      - p % 2 === 0, so resolve(p)    -> calls onSuccess(42)
      - console.log("success:" + 42)  -> output: success:42

  Output (after 2 seconds): success:42
*/



function onSuccess(msg) {
  console.log("success:" + msg); 
}

function onFail(msg) {
  console.log("fail:" + msg);    
}

function foo(p, resolve, reject) {
  setTimeout(() => {
    if (p % 2 === 0) {
      resolve(p);                                  // calls onSuccess
    } else {
      reject(p);                                   // calls onFail
    }
  }, 2000);                                        // simulate async delay
}

foo(42, onSuccess, onFail);                        // calls foo with number 42
