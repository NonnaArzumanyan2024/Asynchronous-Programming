/*
  Example: Asynchronous Behavior with setTimeout

  What is happening here?
  - setTimeout schedules a function (callback) to run after a delay (500ms here).
  - The return inside setTimeout does NOT return from the outer function foo().
  - foo() runs synchronously and immediately returns 200.
  - The callback inside setTimeout runs later, but its return value is ignored.

  Step-by-step execution:
  1. foo() is called
      - setTimeout schedules a callback to run after 500ms
      - return 200 executes immediately
  2. console.log prints the returned value of foo(), which is 200
  3. After 500ms, the setTimeout callback runs, but its return value is not used

  Output: 200
*/



function foo() {
   setTimeout(() => {
     return 100;                  // This return only affects the callback, not foo()
   }, 500);

   return 200;                    // Returned immediately by foo()
}
 
console.log(foo());               // Prints 200
