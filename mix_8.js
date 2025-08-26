/*
  Example: Async/Await with Promises

  What is happening here?
  - getNum(n) returns:
      - a resolved Promise if n is even
      - a rejected Promise if n is odd
  - foo() is an async function using await to get values from getNum
  - await pauses foo() until the Promise resolves (or throws if rejected)
  - Both getNum(4) and getNum(6) are even, so both return resolved Promises
  - After both await calls, console.log(a + b) logs the sum

  Step-by-step execution:
  1. foo() is called
  2. let a = await getNum(4)
      - getNum(4) returns Promise.resolve(4)
      - await resolves a = 4
  3. let b = await getNum(6)
      - getNum(6) returns Promise.resolve(6)
      - await resolves b = 6
  4. console.log(a + b) -> output: 10

  Output: 10
*/



function getNum(n) {
  if (n % 2 == 0) {
    return Promise.resolve(n);                     // resolved Promise for even numbers
  } else {
    return Promise.reject("Error!");               // rejected Promise for odd numbers
  }

}

async function foo() {
  let a = await getNum(4);                         // resolves to 4
  let b = await getNum(6);                         // resolves to 6
  
  console.log(a + b);                              // logs 10
}

foo();                                             // call async function
