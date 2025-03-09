<!-- .slide: id="lesson9" -->

# Basic Frontend - Fall 2024

Lesson 9, Tuesday, 2024-10-15

---

### Recap: Objects

```js
let me = {
    name: "Ada",
    address: {
        country: "Germany",
        city: "Berlin"
    }
};

console.log(me.name)
console.log(me.address.city)

me.name = "Annie Easley"

console.log(me.name)
```

* What's the result?

```js
Ada
Berlin
Annie Easley
```
<!-- .element: class="fragment" -->


---

### "this" in JavaScript

In JavaScript, `this`  is a special keyword that refers to the object that the current function is a method of.

---

### Example

```js
let person = {
    name: "Grace",
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};

person.greet();
```

* What's the result?

```js
Hello, my name is Grace
```
<!-- .element: class="fragment" -->

---

### Recap: onclick Event

The `onclick` event is a specific type that happens when a user clicks on an element, like a button, link, or image.

---

### Example

```html
<button onclick="sayHello();">Click Me</button>
```

In this example, When a user clicks the button, it triggers the `sayHello` function

```js
function sayHello() {
  console.log('Hello, World!');
}
```

---

### Another event: oninput

There are many more events similar to `onclick`:

[MDN documentation -  Mouse events](https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events)

We can use the `oninput` event to run a function every time the user inputs something in an input field.

---

### Example

```html
<input type="number" oninput="inputChanged();">
<script>
  function inputChanged() {
    console.log("yay, something changed");
  }
</script>
```

---

### HTML and Javascript

**HTML (Structure)**: HTML provides the basic structure of a webpage. It defines elements like headings, paragraphs, images, and more. It's like the skeleton of a webpage.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Simple Page</title>
</head>
<body>
    <h1 id="greeting">Hello, World!</h1>
<body>
</html>
```

---

### Manipulate HTML Elements from JavaScript

Let's say we have a HTML element:

```html
<div>Total Price: 0 EUR</div>
```

Wouldn't it be nice if we could dynamically change that from JavaScript?

---

<!-- .slide: id="get-element" -->

### document.getElementById

One way to obtain a variable pointing to a HTML element is `document.getElementById()`:

HTML:

```html
<div id="totalPrice">Total Price: 0 EUR</div>
```

JavaScript

```js
let priceDiv = document.getElementById("totalPrice");
```

---

`priceDiv` is a variable, and its type is `object`.

How do we know which properties/methods the object has?

We could try the browser's developer tools.

Or we could check [MDN - HTML div element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDivElement)

---

Let's try some properties, see what happens:

```js
let priceDiv = document.getElementById("totalPrice");
// choose from below:
priceDiv.textContent = "Hi from JavaScript";
priceDiv.hidden = true;
priceDiv.style.backgroundColor = "red";
priceDiv.remove();
```

---

### Example

```html
<!DOCTYPE html>
<html>
<body>
  <h1 id="greeting">Hello, World!</h1>
  <button onclick="changeText();">Click Me</button>

  <script>
    function changeText() {
      let greetingElement = document.getElementById("greeting");
      greetingElement.textContent = "Hi, there!";
    }
  </script>
</body>
</html>

```

---

### How to access the HTML via Javascript (or the DOM)

* Add `id` to your HTML element
* Create a variable for the element using `document.getElementById()`
* Read or change any properties of the element using the variable and dot (`.`) notation

---

### Task 1

In HTML, create a `div` element with width and height set to 100, and a `button`.

When the user clicks the button, set the background color of the `div` to red.

---

### Task 2

In HTML, create a `button` and a `div` element.

When the user clicks the button, update the `textContent` of the `div` element with the amount of times the user has clicked the button.

Example: "You clicked 12 times"

---

### Task 3

We're creating a web shop selling pizza (or lasagne, or domoda)!

Create a number input field in HTML that lets the user choose the amount of pizza:

```html
Choose the amount of pizza slices:
<input type="number" id="amount" min="0" value="0" oninput="amountChanged();">
```

Use the `valueAsNumber` property of the number input to get the amount that the user selected in your `amountChanged` function. Output the total price the user has to pay to a `div` element.

---

### Bonus: Task 4

Extend your webshop to sell two products (e.g. pizza _and_ lasagne).

Every product has a different price. Update the total price in the `div` element every time the user changes the amount of each product.

---

### Bonus: Task 5

There's a special sale - if the user buys products which sums for more than 20 EUR, they get 10% discount. Show the discounted total price.

---

### Solution Task 1

HTML:

```html
<button onclick="changeColor()">Click me!</button>
<div id="myDiv" width="100" height="100">Hello</div>

<script>
  function changeColor() {
    let myDiv = document.getElementById("myDiv");
    myDiv.style.backgroundColor = "red";
  }
</script>
```

---

### Solution Task 2

```html
<button onclick="count()">Click me!</button>
<div id="myDiv">You clicked 0 times</div>

<script>
  let clickCount = 0;

  function count() {
    clickCount += 1;
    let myDiv = document.getElementById("myDiv");
    myDiv.textContent = "You clicked " + clickCount + " times";
  }
</script>
```

---

### Solution Task 3

```html
Number of hummus:
<input type="number" id="amount" min="0" value="0" oninput="amountChanged();">
<div id="priceDiv">0 EUR</div>

<script>
  let hummusPrice = 5;

  function amountChanged() {
    let amountInput = document.getElementById("amount");
    let priceDiv = document.getElementById("priceDiv");
    let amount = amountInput.valueAsNumber;
    let totalPrice = hummusPrice * amount;

    priceDiv.textContent = totalPrice + " EUR"
  }
</script>
```
