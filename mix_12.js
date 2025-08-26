/*
  Example: Async/Await with Rejected Promise

  What is happening here?
  - getNum(n) returns:
      - a resolved Promise if n is even
      - a rejected Promise if n is odd
  - foo() is an async function that awaits getNum(3)
      - 3 is odd, so getNum(3) returns a rejected Promise
      - await throws an error inside the async function
      - console.log("After await") is never executed
  - console.log(foo()) logs the returned Promise from foo(), which is rejected

  Step-by-step execution:
  1. foo() is called
      - returns a rejected Promise (because getNum(3) rejects)
  2. console.log(foo()) logs the rejected Promise object
  3. The async function's internal rejection is not caught here
      - So the promise shows as rejected in console

  Output: Promise { <rejected> "Error!" }
*/



function getNum(n) {
  if (n % 2 == 0) {
    return Promise.resolve(n);                     // resolved Promise for even numbers
  }

  return Promise.reject("Error!");                 // rejected Promise for odd numbers
}

async function foo() {
  await getNum(3);                                 // rejected Promise -> throws
  console.log("After await");                      // never runs
}

console.log(foo());                                // Logs rejected Promise
