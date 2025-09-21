<!-- .slide: id="lesson12" -->

# JavaScript Course - Spring 2025

Lesson 12, Tuesday, 2025-04-29

---

# Arrays & Loops

---

# Part 1: Arrays

---

### Array

An `array` is a container type that holds multiple values:

```js
// we create an empty array using []
let emptyArray = [];

// we put the values we want in square brackets
// separated by commas
let ages = [19, 33, 25, 40];
let cities = ['London', 'Paris', 'Berlin'];
```

---

Array can hold any type of value:

```js
let prices = [0.99, 1.49];
```

And any quantity:

```js
// I only have one favorite food
let favoriteFoods = ['Pizza'];
// An array holding 26 letters of the alphabet
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
```

---

### Analogy: Bookshelf

A bookshelf can be thought of as an array of books

![bookshelf](images/bookshelf.jpg)

```js
let books = ['Harry Potter', 'The Hobbit', 'Game of Thrones'];
```

---

### Usage

Can you think of use cases for arrays? Where would we use it?

- a todo list
<!-- .element: class="fragment" -->
- a shopping list
<!-- .element: class="fragment" -->
- ingredients in a recipe
<!-- .element: class="fragment" -->
- the students in this class
<!-- .element: class="fragment" -->
- the numbers from 1 to 10
<!-- .element: class="fragment" -->

---

### Accessing elements

We can access elements in the array by number using square brackets `[]`

The numbering starts at `0` (think floors of a building):

```js
let books = ['Harry Potter', 'The Hobbit', 'Game of Thrones'];

console.log(books[0]); // "Harry Potter"
console.log(books[1]); // "The Hobbit"

// QUIZ - how do we access "Game of Thrones" ?
```

```js
console.log(books[2]); // "Game of Thrones"
```

<!-- .element: class="fragment" -->

The order of elements in the array matters!

<!-- .element: class="fragment" -->

---

### Bookshelf array

![bookshelf](images/array_bookshelf_0.png)

---

### Invalid elements

```js
let books = ['Harry Potter', 'The Hobbit', 'Game of Thrones'];

console.log(books[0]); // "Harry Potter"
console.log(books[1]); // "The Hobbit"
console.log(books[2]); // "Game of Thrones"
console.log(books[3]); // ???
```

```js
console.log(books[3]); // undefined
```
<!-- .element: class="fragment" -->

---

### Quiz

```js
let friends = ['Ada', 'Alan', 'Brendan'];

console.log(friends[1]); // ???
console.log(friends[3]); // ???
```

```js
console.log(friends[1]); // "Alan"
console.log(friends[3]); // undefined
```
<!-- .element: class="fragment" -->

---

### Array vs Object

Both `array` and `object` can store multiple values:

```js
let favoriteNumbersArray = [42, 24];
let favoriteNumbersObject = {
    first: 42,
    second: 24
};
```

Use object if you want to access elements by by key (string), use arrays if you want to access elements by its index (number).

---

### Task 1

- Step 1: Create an array with your 3 top friends
- Step 2: Say "hello" on console to each friend, in the array:

```plaintext
hello Ada
hello Alan
hello Brendan
```

---

### Task 1: Solution

```js
let friends = ['Ada', 'Alan', 'Brendan'];
console.log('hello ' + friends[0]);
console.log('hello ' + friends[1]);
console.log('hello ' + friends[2]);
```

---

### Modifying arrays

We can change any value using brackets:

```js
let friends = ['Ada', 'Alan', 'Brendan'];

friends[2] = 'Bjarne';
// friends array is now ['Ada', 'Alan', 'Bjarne']

console.log(friends[2]); // "Bjarne"
```

---

### Common operations: array length

We can get the length of an array with the `.length` property:

```js
let friends = ['Ada', 'Alan', 'Brendan'];
console.log(friends.length); // 3
```

---

### Appending new values

We can append new values to an array using `.push()`:

```js
let friends = ['Ada', 'Alan', 'Brendan'];
console.log(friends.length); // 3

friends.push('Bjarne');

console.log(friends.length); // 4
console.log(friends[3]); // Bjarne
```

---

### remove a value

We can remove the last element from an array `.pop()`:

```js
let friends = ['Ada', 'Alan', 'Brendan', 'Bjarne'];
console.log(friends.length); // 4

friends.pop();

console.log(friends.length); // 3
console.log(friends[3]); // undefined
```

---

### HTML and Arrays

Every HTML element has a `children` property that returns an array of its children.

```html
<body>
  <div>First</div>
  <div>Second</div>
</body>
```

How can we access the two `div` elements inside the body (without `document.getElementById`?)

---

### HTML and Arrays

```js
let firstDiv = document.body.children[0];
let secondDiv = document.body.children[1];

// firstDiv and secondDiv now point to the two divs inside body
// we can now get/set properties
firstDiv.textContent = "This is the first div";
secondDiv.style.backgroundColor = "green";
```

---

### Task 1

You have an array with your favorite vegetables, e.g:

```js
// this line is given. Do not touch :)
let favoriteVeggies = ['eggplant', 'broccoli', 'potato'];
```

Add some code that replaces 'broccoli' with 'carrot' and some code that adds 'pepper' to the end of `favoriteVeggies`.

After your code ran, the array should look like this:

```js
['eggplant', 'carrot', 'potato', 'pepper']
```

---

### Task 1 - Solution

```js
let favoriteVeggies = ['eggplant', 'broccoli', 'potato'];
favoriteVeggies[1] = 'carrot';
favoriteVeggies.push('pepper');
```

---

### Task 2

You have the following HTML in your body:

```html
<div id="colors">
  <div>red</div>
  <div>yellow</div>
  <div>green</div>
</div>
```

Write some JavaScript code that sets the `backgroundColor` of the three inner `div` elements to the color of their `textContent`. Example: The first `div` should have a red background color.

---

### Task 2 - Solution

```js
let colorElement = document.getElementById("colors");
let children = colorElement.children;
children[0].style.backgroundColor = children[0].textContent;
children[1].style.backgroundColor = children[1].textContent;
children[2].style.backgroundColor = children[2].textContent;
```

---

<!-- .slide: id="lesson12-part2" -->

# Part 2: Loops

---

### The problem

Output your name to `console.log` two times.

```js
console.log('Alan');
console.log('Alan');
```

<!-- .element: class="fragment" -->

Output your name to `console.log` 14207 times.

<!-- .element: class="fragment" -->

```js
// huh ????
```

<!-- .element: class="fragment" -->

---

### Loops

We use loops to run the same code in our programs repeatedly.

More generally, a loop is a way to repeat an action multiple times as long as a certain condition is `true`.

---

### Loops: cake recipe

Let's say I want to bake a cake:

<div style="display: flex;">

![scale](images/scale.webp) <!-- .element: style="width: 400px"-->

<div>
Cake recipe:<br>

- 6 eggs
- 3 cups of sugar
- 5 cups of flour
</div>
</div>

---

### Loops: cake recipe

We take an empty bowl and keep our ingredients ready.

We need 5 cups of flour.

1. What's the action that we need to repeat?
1. For how long do we need to repeat it?

---

### Loops: cake recipe

1. The action we need to repeat is adding a cup of flour to the bowl
1. We repeat it 5 times

---

### Loops: cake recipe

We can distinguish different parts in a loop:

- initialization: a starting point
- condition: a test to see if the loop should stop
- update: changes the value checked by the condition
- action: what we want to repeat

---

### Loops: cake recipe

- initialization: no flour in the bowl (`cupsOfFlour = 0`)
- condition: did we put less than 5 cups of flour? (`cupsOfFlour < 5`)
- update: cups of flour in the bowl (`cupsOfFlour++`)
- action: add flour to the bowl

---

### While loop

Let's see how to make an actual loop in JavaScript.

A `while` loop repeats its body while its `condition` is `true`:

```js
while (condition) {
  // body is executed while "condition" is true
  console.log('Hello from while loop');
}
```

---

### While loop

```js
let cupsOfFlour = 0; // initialization
while (cupsOfFlour < 5) { // condition
  // action
  console.log('Take a cup of flour and put it in the bowl');
  // update
  cupsOfFlour++;
  console.log('There are now ' + cupsOfFlour + ' cups in the bowl');
}
```

---

### While loop

A while loop might execute zero to unlimited times:

```js
let isHungry = false; // we just ate
while (isHungry) {
  eat(); // this is never reached!
}
```

---

### While loop

Always make sure that a `while` loop's condition is eventually set to `false`.
Otherwise your loop will run infinitely.

```js
let bitesOfChocolate = 0;
while (bitesOfChocolate < 10) {
  console.log('Bites of chocolate: ' + bitesOfChocolate);
  console.log('Still hungry.');
}
// this code will print "Bites of chocolate: 0" and
//"Still hungry" until your laptop runs out of battery,
// you close the browser, you reboot, or the universe ends
```

---

### Task

Let's `console.log` the numbers from 1 to 5 using a `while` loop.

---

### Counting - solution

Quiz: Let's `console.log` the numbers from 1 to 5 using a `while` loop.

```js
let i = 1; // initialize i with 1
while (i <= 5) {
  // repeat this loop until we reach 5
  console.log(i);
  i++; // update i at every step
}
```

---

### Quiz

What will this loop output?

```js
let i = 0;
while (i < 2) {
  console.log(i);
}
```

Answer: 0, until you run out of battery<!-- .element: class="fragment" -->

---

### Quiz

- How many times will the loop run?

```js
let i = 10;
while (i < 15) {
  console.log(i);
  i++;
}
```

Answer: 5 times <!-- .element: class="fragment" -->

---

### Tasks

- Output your name five times
- Output the squares of the first 10 numbers starting with 1 (1, 4, 9, 16, ...)

---

### Solutions

Output your name five times

```js
let i = 0;
while (i < 5) {
  console.log('Carlo');
  i++;
}
```

---

Squaring the first 10 numbers

```js
let i = 1;
while (i < 11) {
  console.log(i * i); // or i ** 2
  i++;
}
```

---

### loop: recap quiz

1. What can we do with loops?
1. What are the main parts of a loop?
1. Can a loop run 0 times?
1. Can a loop run only 1 time?

---

### loop: recap

- a loop lets us execute a block of code multiple times
- the block is executed as long as certain condition is true
- we normally need a starting point, initializing some variable
- inside the block that is repeated, we usually update some value to make sure that the loop can stop


---

But developers are lazy, we want to write the least amount of code as possible.

Hence, the for loop!

---


<!-- .slide: id="forLoop" -->

# For loop

look at this example, can you explain how do we write a for loop?

```js
for (let counter = 0; counter < 10; counter++){
  console.log(counter);
}
```

---
### For loops

A `for` loop works like a `while` loop, but it's more concise.

```js
for (initialization; condition; update) {
  // loop body
}
```


---

### Anatomy of a for loop

- `for`
- `(`
-  initialization
- `;`
- condition
- `;`
- update

The 3 main parts of the loop are all in one line, separated by semicolons (`;`).

---

### For loop

Let's replace our `while` loop with a `for`:

```js
let i = 1;       // part 1 - *initialize* the counter
while (i < 6) {  // part 2 - *test* the exit *condition*
  console.log(i);// loop body
  i++;           // part 3 - *update* the counter
}

// same code with for loop:
for (let i = 1; i < 6; i++) {
  console.log(i);
}
```

---

### For loop - summary

* A `while` loop executes its body while the condition is `true`.
* A `for` loop *first* runs the **initialization** part, then tests the **condition** part
  and, if it is `true`, executes the body. After every loop, it executes the **update** part.

---

### For vs. while

* We use a `for` loop if we know in advance how often it will be executed.

```js
for (let i = 0; i < 1000; i++) {
  console.log(i);
}
```

* We use a `while` loop if we don't know how many times the loop will be executed.

```js
while (passwordIsWrong) {
  askForPassword();
}
```

---


### Task

use a for loop and output the numbers between 0 and 10 (including both) to the console


```js
for(let i = 0; i < 11; i++){
  console.log(i);
}
```
<!-- .element: class="fragment" -->

---

### Task

use a for loop and output the numbers between 13 and 17 (including both) to the console


```js
for(let i = 13; i <= 17; i++){
  console.log(i);
}
```
<!-- .element: class="fragment" -->

---

### For loops & arrays

For loops and arrays work wonderfully together!

```js
let languages = ["english", "german", "arabic", "japanese"]

for (let i = 0; i < languages.length; i++){
  console.log(languages[i]);
}
```

---
### Task

use a for loop to output: hello `name`! for every one of your friends:


```js
let friends = ['Abdo', 'Harald', 'Sevtap', 'Meli'];
// ????
```


---

### Task

use a for loop and output the numbers between 5 and -3 (including both) to the console


```js
for(let i = 5; i > -4; i--){
  console.log(i);
}
```
<!-- .element: class="fragment" -->

---

### More tasks?

- Output the sum of the first 10 numbers (e.g. 1 + 2 + 3 + ...)
- Output a countdown from 10 to 0 to console (e.g. 10, 9, 8, ...)
    - Bonus: Instead of zero, output "liftoff!"
    - Bonus: Instead of counting down to console.log, write the output to a an HTML page
