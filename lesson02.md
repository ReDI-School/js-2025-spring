<!-- .slide: id="lesson2" -->

### JavaScript Course - Spring 2025

Lesson 2, Tuesday, 2025-03-25

---

### Recap

What did we talk about last lesson?

---

### Recap: Javascript Console

`F12` is the magic key

<!-- .slide: style="font-size:80%" -->

- Alternatively, `opt + cmd + C` (Mac) / `ctrl + shift + C` (Windows)

- Or right click on browser viewport and choose "Inspect"

---

### Recap: data types

Number:

```js
42

3.1415
```

We can also do computation, using operators:

<!-- .element: class="fragment" -->

```js
1 + 1

10 / 5

5 ** 3
```

<!-- .element: class="fragment" -->

---

### Recap: data types

String:

```js
"Alan"

'Berlin'
```


<!-- .element: class="fragment" -->

---

### Comparison operators

We can use `===` and `!==` to test for the equality and inequality of any 2 values in JavaScript.

---

### Comparison operators

- `===` strict equality

```js
1 === 1 // true
3 === 10 // false

3 === "Hello" // false
3 === "3" // false

"Ada" === "Ada" // true
"Ada" === "Alan" // false
"Alan" === "alan" // false
```

---

### Comparison operators

- `!==` strict inequality

```js
3 !== 5 // true
3 !== 3 // false
1 !== "Cookies" // true
```

---

### Small exercise

<!-- .slide: style="font-size:80%" -->

Use the equality comparison operators to generate boolean values for these questions:

- is your favorite food Pizza?
- are you 25 years old?
- is "Friends" your favorite tv series?
- is 42 your shoe size?

As an example for the first item on this list, my favorite food is Döner:

```js
"Pizza" === "Döner" // false
```

---

### Comparison operators

These are operators that we use for numbers:

- `>` greater than
- `<` less than
- `>=` greater or equal
- `<=` less or equal

---

```js
1 > 0 // true
1 > 5 // false

10 < 20 // true
10 < 5 // false

42 >= 40 // true
42 >= 42 // true
42 >= 50 // false
```

---

### Comparison operators

- `===` strict equality
- `!==` strict inequality
- `>` greater than
- `<` less than
- `>=` greater or equal
- `<=` less or equal

All of these only return `true` or `false`

---

<!-- .slide: id="variables" -->

# Variables

---

### Variable

A variable is a pointer to value

```js
let price = 5;
let name = "John";
```

![Variable](images/variables.jpg)

<!-- .element: style="text-align:center; height: 400px" -->

---

### Examples:

```js
let priceCoffee = 2;
let priceCappuccino = 3;
let customer = "John";
let greeting = "Hello";
let likesCarlo = true;
let hasKids = false;
```

Can you guess how we can define a variable?

<!-- .element: class="fragment" -->

---

### How do we define a variable?

We write:

- `let`
<!-- .element: class="fragment" -->
- the variable name
<!-- .element: class="fragment" -->
- `=`
<!-- .element: class="fragment" -->
- the value we want
<!-- .element: class="fragment" -->
- `;`
<!-- .element: class="fragment" -->

---

### Semicolon in JavaScript

Adding semicolon after statements in JavaScript is optional.

It's often considered good practice and can prevent unexpected behavior. All code in this course uses semicolons.

<!-- .element: class="fragment" -->

---

### Variables are variable

You can change the value of a variable using the assignment operator (`=`):

<!-- .element: class="fragment" -->

```js
let temperature = 24; // define a variable, initialize it to 24
temperature = 30; // assign a new value (30) to the variable
temperature = 23; // now temperature is 23
```

<!-- .element: class="fragment" -->

We define a variable once, then we can change it as often as needed.

<!-- .element: class="fragment" -->

---

### try it!

<!-- .slide: style="font-size:80%" -->

Create some variables:

- one for your full name
- one for your age
- one for your favorite city
- one for whether you can speak German or not
- and anything else you can think of :)

In the JavaScript console, enter the name of the variable. Do you see its value?

Bonus: Change the value of one of the variables that you defined.

---

### Variables

Variables can be used wherever we can use values

```js
let pricePerTicket = 8;
let friends = 3;
let totalPrice = friends * pricePerTicket;
```

<!-- .element: class="fragment" -->

---

### Why do we use variables?

We use variables:

- to give names (meaning) to values. "42" could mean a person’s age or shoe size.
<!-- .element: class="fragment" -->
- for reuse and flexibility. We define the variable once with a value, and use it more than once.
<!-- .element: class="fragment" -->

---

### Variable names

- You can use letters, numbers, and underscore `_` (spaces are _not_ allowed!)
- A variable name cannot start with a number

Valid variable names:

```js
let element = 3;
let element3 = 5;
```

Invalid variable names:

```js
let 2squared = 4;
let element-1 = 0;
let full name = 'Anakin Skywalker';
```

---

Giving good and descriptive names to your variables is very important!

Good variable names make the code easier to understand by other developers, and even by yourself!

Valid but not very descriptive variable names:

```js
let a = 0;
let _12 = 0;
let asldjf = 0;
let thisisareallylongvariablename = 0;
```

---

In this course, and JavaScript in general, we use 'camelCase':

- `isStudent`
- `favoriteBook`
- `likesGermanFood`

---

Variable names are case sensitive:

```js
let name = "John";
let Name = "John";
let NAME = "John";
```

These are 3 different variables.

---

### Practice

<!-- .slide: style="font-size:80%" -->

Let's say we want to go to the cinema with some friends (choose any number).

How many people are going to the cinema in total? Create a variable for that.

<!-- .element: class="fragment" -->

A ticket to watch the movie costs 12.5€, create a variable for this as well.

<!-- .element: class="fragment" -->

Create a new variable that contains how much we have to pay in total.

<!-- .element: class="fragment" -->

Ada and Alan volunteered to pay for the tickets. Use JavaScript to compute how much each has to pay.

<!-- .element: class="fragment" -->

---

### Bonus

1. The cinema gives a discount of 10%! Create a new variable that contains the discounted price.
1. Ada and Alan have 40 EUR total. Create a new variable that is `true` if 40 EUR is enough to pay for the discounted tickets, `false` otherwise

---

### Solution for bonus

```js
let totalPrice = 50; // result from the first task
let discount = 0.1; // 10 percent discount
let discountedPriceMultiplier = 1 - discount;
let discountedPrice = totalPrice * discountedPriceMultiplier;
let budget = 40;
let canPay = budget >= discountedPrice;
```
