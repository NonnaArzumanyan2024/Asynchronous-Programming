/*
  Example: Asynchronous Callback with setTimeout and Random Number

  What is happening here?
  - foo(callback) takes a function as a parameter.
  - setTimeout schedules a function to run after 1 second.
  - Inside setTimeout:
      - A random number between 0 and 999 is generated
      - The callback is called with the random number
  - This is an example of using callbacks to handle asynchronous results.

  Step-by-step execution:
  1. foo(callback) is called with a function (e.g., console.log)
  2. setTimeout schedules the callback to run after 1 second
  3. After 1 second, the callback runs and receives a random number
      - Example: callback(randomNumber) -> console.log(randomNumber)

  Output after 1 second: A random number between 0 and 999 is printed
*/



function foo(callback) {
  
  setTimeout(() => {
    let p = Math.floor(Math.random() * 1000);       // Generate random number 0-999
    callback(p);                                    // Call the callback with p
  }, 1000);                                         // Schedule async execution after 1 second

}


foo(console.log);                                   // Prints a random number after 1 second

