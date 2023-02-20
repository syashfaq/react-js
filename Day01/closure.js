/*A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.*/
//Every function in the javascript is a closure.
const text = "learn and grow";
void function sayHello(){
console.log("Hello!");
}();
