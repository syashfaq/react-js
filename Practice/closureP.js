function greeting() {
    let message = 'Hi';

    function sayHi() {
        console.log(message);
    }

    return sayHi;
}
let hi = greeting();
hi(); // still can access the message variable

function greeting(message) {
    return function(name){
         return message + ' ' + name;
    }
 }
 let sayHi = greeting('Hi');
 let sayHello = greeting('Hello');
 
 console.log(sayHi('John')); // Hi John
 console.log(sayHello('John')); // Hello John   