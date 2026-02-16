// A closure is formed When:
// 1. You have a function inside another function. 
// 2. The Inner Function "remembers" and can access variables from the outer function's scope, even after the outer function has finished running.
// In another words A closures is a function bundled together with its surrounding state(lexical environment).

function outer(){
    let count = 0; // Variable in Outer Scope
    function inner(){
        count++;
        console.log(count);
    }
    return inner;
}
let counter = outer();

counter();
counter();
counter();

// Why Closures Are Useful
// - Data privacy: You can hide variables from the outside world.
// - Stateful functions: Functions can “remember” past values.
// - Callbacks & async code: Widely used in event handlers, promises, and setTimeout.