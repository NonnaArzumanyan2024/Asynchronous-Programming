/*
  Example: Using Callbacks with setTimeout

  What is happening here?
  - foo(callback) is a function that takes another function as a parameter.
  - foo.length gives the number of parameters of the foo function (here it's 1).
  - setTimeout schedules a callback to run after 1 second.
  - Inside setTimeout:
      - p is calculated as a + 2
      - callback(p) runs, which prints the value
  - This is an example of asynchronous execution using callbacks.

  Step-by-step execution:
  1. foo(console.log) is called
      - a = foo.length -> 1 (number of parameters)
      - setTimeout schedules the callback to run after 1 second
  2. After 1 second, the setTimeout callback runs:
      - p = 1 + 2 = 3
      - callback(p) -> console.log(3) runs

  Output after 1 second: 3
*/



function foo(callback) {
  let a = foo.length;                // Number of parameters of foo (1)
  setTimeout(() => {
    let p = a + 2;                   // Calculate p = 1 + 2
    callback(p);                     // Call the callback with p
  }, 1000);                          // Schedule async execution after 1 second
}

foo(console.log);                    // Pass console.log as the callback
