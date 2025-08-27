/*
  What is Synchronous JS?
  - JavaScript normally runs one line at a time, in order.
  - Each line waits until the previous one finishes before running.
  - This is called synchronous execution.
  - If one line takes a long time, it blocks the next lines.

  Code explanation:
  - method1() prints "hello"
  - method2() prints "whatsup" 1,000,000 times
  - method3() prints "bye"
  - JavaScript runs code line by line, so method3() waits until method2() finishes
*/


method1();
method2();
method3();

function method1() {
    console.log("hello"); 
}

function method2() {
    for (let i = 0; i < 1000000; i++) {
        console.log("whatsup"); 
    }
}

function method3() {
    console.log("bye"); 
}
