<!-- .slide: id="lesson11" -->

# JavaScript Course - Spring 2025

Lesson 11, Thursday, 2025-04-24

---

### Recap - get Element By Id

HTML:
```html
<div id="myDiv"></div>
```

How do we change the content of this div?


```js
let myDivElement = document.getElementById("myDiv");
myDivElement.textContent = "Hello world!";
```
<!-- .element: class="fragment" -->

---

### Recap - button click event Element By Id

HTML:
```html
<button id="aButton"></button>
```

JS:
```js
function handleClickButton() {
    console.log('button clicked')
}
```

How do we attach handleClickButton to the button element?

```html
<button id="aButton" onclick="handleClickButton()"></button>
```
<!-- .element: class="fragment" -->

---

<!-- .slide: id="create-element" -->

### document.createElement

`document.createElement` is used to create a new HTML elemen (such as `div`, `img`, `button`) using JavaScript. It's the first step in building elements dynamically.

Basic usage:
```js
let myDiv = document.createElement("div");
```

This creates a new `<div>` element in memory, but it's not visible on the page yet.

However, we need to do a bit more configuration to have something useful.

---

```js
let myDiv = document.createElement("div"); // 1
myDiv.textContent = "hello";               // 2
document.body.appendChild(myDiv);          // 3
// <div>hello</div> has been added to the page!
```

To make it useful, we typically need to:
1. Add content or attributes such as `textContent`, `id` and `onclick`
2. Apply styles (optional) e.g `style.backgroundColor`
3. Append it to the DOM using `appendChild()`.

---

### .appendChild()

`appendChild` are used to add elements to the DOM, that is, to make them appear on the page.

```js
document.body.appendChild(myDiv);
```

`appendChild` can be called on almost any element.

Remember our `<body>` tag in the html? `document.body` refers to that element; it is mostly just like any other HTML element. Everything inside the `<body>` is what the user sees in the browser.

---

### Task 1: Appending elements

Let's say you have this HTML:

```html
<div id="myDiv"></div>
```

How do you turn it to this from JavaScript?

```html
<div id="myDiv">
    <span>Hello</span>
</div>
```

* Hint: Use `document.getElementById`, `document.createElement`, the `textContent` property and `appendChild`.

---

### Task 2

Create a button at the top of the page that generates a new element in sequence when clicked, so  "Element 1", "Element 2", and so on.

Example:

```html
<div>Element 1</div>
<div>Element 2</div>
<div>Element 3</div>
<div>Element 4</div>
<div>Element 5</div>
```

---

### Task 3: Create a shopping list app!

It should have one `<input>` field where the user can enter a shopping item. It should have one `<button>`. When the user clicks the button, the text from the `<input>` field should be appended to the shopping list.

![Page](images/shopping.png) <!-- .element width="250px" style="display: block; margin: 0 auto;" -->

---

### Bonus (difficult!!!)

When the user clicks on a shopping item, remove it from the page.

* Hint: set an `onclick` function on your newly created HTML element.
* Hint: use the `remove()` method of your item to remove it.
