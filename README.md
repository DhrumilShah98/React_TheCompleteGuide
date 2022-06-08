## What is React/ReactJS/React.js?
- A JavaScript library for building user interfaces. (A client-side JavaScript library).
- All about building modern, reactive user interfaces for the web.
- JavaScript runs in the browser - on the loaded pages. We can manipulate the HTML structure (DOM) of the page.
- Declarative, component (Class based or Function based) focused approach.
- React.js - Lean and focused component based UI library. Certain features (e.g., routing) are added via community packages.

## SPAs (Single Page Applications)
- React can be used to control parts of HTML or entire pages.
- React can be used to control entire frontend of a web application.
- In SPA (Single Page Application) approach, server only sends one HTML page, thereafter, React takes over and controls the UI.

## ReactJS Alternatives
- Angular - Complete component-based UI framework, packed with features. Uses TypeScript. Can be overkill for smaller projects.
- Vue.js - Complete component-based UI framrwork, includes more core features. A bit less popular than React & Angular.

## Next-Gen JavaScript (A Refresher)

### 1. Understanding 'let' and 'const'

```js
// With ES6, two keywords were introduced, 'let' & 'const'. 
// 'var' still works but it is highly encouraged that we use 'let' & 'const'.
// 'let': Variable value & 'const': Constant value.

// 'var'
var myName = 'Dhrumil';
console.log(myName);
myName = 'Dhrumil Shah';
console.log(myName);

// 'let'
let myFullName = 'Dhrumil';
console.log(myFullName);
myFullName = 'Dhrumil Shah';
console.log(myName);

// 'const'
const name = 'Dhrumil';
console.log(name);
name = 'Dhrumil Shah';
console.log(name);
```
```
Output:
Dhrumil
Dhrumil Shah
Dhrumil
Dhrumil Shah
Dhrumil
/tmp/GUqkPHsmUH.js:22
name = 'Dhrumil Shah';
     ^

TypeError: Assignment to constant variable.
```

### 2. Arrow Functions

```js
// Arrow functions eliminate 'function' keyword from the syntax.
// The syntax of an arrow function is as below:
// const myFun = (args) => { 
//     statement 1;
//     ...
//     return something;
// }
// Also, using arrow functions, there are no more issues with the 'this' keyword. It is context aware.

// Normal function
function printMyName(name) {
    console.log(name);
}
printMyName('Dhrumil');

// Arrow function
const printName = (name) => {
    console.log(name);
}
printName('Dhrumil');

// Double a number 
// const doubleTheNum = (number) => { return number * 2; }
const doubleTheNum = number => number * 2;
console.log(doubleTheNum(4));
```
```
Output:
Dhrumil
Dhrumil
8
```
