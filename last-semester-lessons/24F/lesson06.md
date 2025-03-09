<!-- .slide: id="lesson6" -->

# Basic Frontend - Fall 2024

Lesson 6, Tuesday, 2024-10-01

---

### Recap

What are variables?

```js
let isWarm = true;
let restaurantName = "Pizza Doe";
```

<!-- .element: class="fragment" -->


---

### Recap: Data

Which data types have we seen so far?

---

### Recap: Data

| Data Type | Example      | Operators                |
| --------- | ------------ | ------------------------ |
| number    | `-0.5`, `42` | `+`, `-`, `*`, `/`, `**` |
|           |              | `<`, `>`, `<=`, `<=`     |
| boolean   | `true`       | `&&`, `!`, `\|\|`        |
| string    | `"hello"`    | `+`                      |
| null      | `null`       | `===` `!==`              |
| undefined | `undefined`  | `===` `!==`              |

---

### Recap: Statements

Which statements have we seen so far?

---

```js
if (condition) {
  // runs if condition is true
} else if (anotherCondition) {
  // runs if condition is false and anotherCondition is true
} else {
  // runs if neither condition nor anotherCondition are true
}
```

---

### Quiz

What's the value of `y` after this code runs?

```js
let x = 42;
let y = 0;

if (x === 42) {
    y = 1;
} else if (x === 42) {
    y = 2;
} else {
    y = 3;
}
```

1
<!-- .element: class="fragment" -->

---

# Functions

<!-- .slide: id="functions" -->

---

### functions

A function is a reusable block of code:

```js
function sayHello() {
  document.body.textContent = "Hello There!";
}
```

---

### Function definition

There are 3 mandatory parts in a function definition:

1. the `function` keyword
<!-- .slide: id="functions" -->
1. the name of the function we are defining, followed by parentheses `()`
<!-- .slide: id="functions" -->
1. the function body, surrounded by curly braces `{}`
<!-- .slide: id="functions" -->

---

The code in the function will only run when we _call_ the function.

We can call the function like this, by typing its name followed by a pair of open and closed parentheses:

```js
sayHello();
```

---

### Function definition and execution

It's important to distinguish between 2 parts when working with functions:

1. function definition (also called function **declaration**)
<!-- .slide: id="functions" -->
1. function execution (**calling** the function)
<!-- .slide: id="functions" -->

---

### Function definition and execution

```js
// this is the function definition
function sayHello() {
  document.body.textContent = "Hello There!";
}

// this is the function call (execution)
sayHello();
```

We always need to define a function in order to call it.

---

A function can contain any kind of code:

```js
function checkTemperature() {
  let temperature = 10;

  if (temperature < 0) {
    document.body.textContent = "it's cold outside";
  } else {
    document.body.textContent = "it's not that cold";
  }
}

checkTemperature();
```

---

### Quiz

What's in `textContent` after the following code runs:

```js
function output42() {
  document.body.textContent = "42";
}
```

Answer: Nothing, because we never _call_ the function
<!-- .element: class="fragment" -->

---

### Quiz

What's in `textContent` after the following code runs:

```js
function output42() {
  document.body.textContent += "42";
}

output42();
output42();
```

Answer: "4242"
<!-- .element: class="fragment" -->

---

### Quiz

Where does the "Hey!" appear in your console?

```js
console.log('I go first');

function sayHey() {
  console.log('Hey!');
}

console.log('I go second');
sayHey();
console.log('I go last');
```

Answer: between "I go second" and "I go last"
<!-- .element: class="fragment" -->

---

### Task 1

Write a function that writes your name to the `textContent` of the HTML document's body.
Call the function. What do you see on your web page?

---

## Function parameters and arguments

We have a function that writes "Hi Alan" to console, another one that writes "Hi Ada" and a last one that writes "Hi Brendan".

How can we do it without repeating ourselves?

---

### Function parameters and arguments

```js
function sayHiToAlan() {
  console.log('Hi Alan');
}
function sayHiToAda() {
  console.log('Hi Ada');
}
function sayHiToBrendan() {
  console.log('Hi Brendan');
}

sayHiToAlan();
sayHiToAda();
sayHiToBrendan();
```

---

### Function parameters and arguments

The code works, but we are basically writing the same function 3 times and just changing a string inside.

We want to avoid rewriting nearly identical code.

Functions have the option to accept **parameters** that let us do just that.

---

### Function parameters and arguments

```js
function sayHi(name) {
  console.log("Hi " + name);
}

sayHi('Alan');
sayHi('Ada');
sayHi('Brendan');
```

- `name` is a function **parameter**
- "Alan", "Ada", "Brendan" are **arguments**. In each function call they will be assigned to the `name` parameter

---

### Multiple parameters

A function can have any number of parameters

```js
function sum(parameter1, parameter2, parameter3) {
  console.log(parameter1 + parameter2 + parameter3);
}

sum(1, 2, 3);
```

Each argument will be assigned to the corresponding parameter in **order**, from left to right

---

```js
function greetFriend(greeting, name) {
  console.log(greeting + " " + name + ", how are you today?");
}

greetFriend("Hi", "Alan");
greetFriend("Good day", "Ada");
```

---

## Returning values

Typically, we use functions to make a calculation. We want to use the result of that calculation outside of the function.

We can use the `return` keyword for that.

---

### Return: example

```js
function giveMe5() {
  return 5;
}

let number = giveMe5();
// number is 5
```

---

### Quiz

What is the value of the variable `result`?

```js
function add(a, b) {
  return a + b;
}

let result = add(3, 5);
```

Result is 8
<!-- .element: class="fragment" -->

---

### Returning values

The `return` keyword exits the function immediately. Any code after the `return` statement will not be executed.

```js
function describeWeather(temperature) {
  if (temperature > 25) {
    return "It's hot";
    // no further code will be executed
  }
  if (temperature < 5) {
    return "It's cold";
    // no further code will be executed
  }
  return "It's nice outside";
  console.log("function finished"); // this will never be reached
}
```

---

### No return in function

What is the value of the variable `number`?

```js
function giveMe5() {
  console.log("5");
}

let number = giveMe5();
console.log(number); // ???
```

`undefined`! This function does not have a return value!
<!-- .element: class="fragment" -->

---

It is _not_ mandatory to have a return value in a function, but do not forget to add it if you need to use its value outside of the function scope (block).

---

### Quiz

What is the value of `result`?

```js
function giveMe5() {
  return 5;
}

let result = giveMe5() * giveMe5();
```

Answer: 25
<!-- .element: class="fragment" -->


---

### Task 2

Write a `min` function that returns the smaller of the two numbers.

```js
min(1, 2);    // should return 1
min(100, 99); // should return 99
min(-10, 0);  // should return -10
```

---

### Task 3

Write a function that takes the name of a person, their age, and the language they speak, and returns a string that introduces this person.

Example:

Ada, 30, English &#8594; **"Hello! My name is Ada, I am 30 years old and I speak English."**

---

### Bonus Tasks

[Here are some incomplete examples](https://github.com/ReDI-School/js-berlin-2021-fall/tree/main/exercises/2021-10-07)
of using functions. Copy the contents of the file into a script tag, and try
to fix the examples so that they run correctly.

---

### Bonus Bonus Tasks

Want to practice more? Try solving the tasks in [index.html](https://github.com/ReDI-School/js-berlin-2024-fall/tree/main/functions)
