<!-- .slide: id="lesson14" -->

# JavaScript Course - Spring 2025

Lesson 14, Thursday, 2025-05-22

---

### Lesson overview

- Recap
- JavaScript Object Notation (JSON)
- `fetch` API

---

### Recap

What appears on the web page after this code runs?

```js
let el = document.createElement("button");
el.textContent = "Click me!";
```

Answer: Nothing, because we never _append_ the element anywhere

<!-- .element: class="fragment" -->

---

### Recap

Corrected code:

```js
let el = document.createElement("button");
el.textContent = "Click me!";
document.body.appendChild(el);
```

Now, the button is appended to the body. It'll appear _after_ all other elements.

---

<!-- .slide: id="JSON" -->

# JSON

---

In JavaScript, we can put all keys of objects in quotes. This is optional.
We can still access the keys without quotes:

```js
let me = {
  "name": "John",
  "lastName": "Doe",
  "hobbies": ["Eat", "Sleep"],
};

console.log(me.name); // "John"
```

---

### Transferring data over the internet

Let's say we want to transfer the object `me` over the internet. We can't just send the object, because the internet only understands strings.

We could send a string like "Hi my name is John Doe and I like to eat and sleep". But then how would the receiver know what is the name, what is the last name, and what are the hobbies?

---

### JSON

- JSON stands for **J**ava**S**cript **O**bject **N**otation
- When we exchange data between a browser and a server, we can only exchange string (not objects, arrays, numbers, booleans...)
- JSON is a string representation of JavaScript objects
- JSON can be easily transferred (and stored)
- The notation is very close to JavaScript objects, easy to handle from JavaScript. No complex transformation required.
- More info: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON

---

- Must contain only these types:
  - `string`, `number`, `boolean`, `array`
  - `null`
  - another JSON `object`
- These types are **forbidden**:
  - `function`, `undefined`

---

JavaScript:

```js
{ name: 'Alan', age: 42 }
```

JSON:

```js
'{"name":"Alan","age":42}'
```

---

### JSON example

```json
{
  "name": "Alan",
  "instructor": true,
  "hobbies": ["bike", "jog"],
  "age": 42,
  "workAddress": {
    "street": "Invalidenstraße",
    "number": 116,
    "city": "Berlin"
  },
  "profilePicture": null
}
```

---

### Web APIs

There are a lot of services on the internet that transfer data via JSON.

Example: https://restcountries.com/v3.1/lang/spanish
Documentation: https://restcountries.com/

Find more at https://apilist.fun, https://rapidapi.com/hub or https://apis.guru

---

OK great, but how can we access that from JavaScript?

---

<!-- .slide: id="fetch" -->

# fetch API

---

- Fetching data from the internet might take a lot of time
- We must not block our browser while waiting for the reply!

---

### Synchronous vs Asynchronous

Imagine you order a pizza:

- **Synchronous:** You stand at the counter and wait until your pizza is ready. You don't do anything else until you get your pizza.
- **Asynchronous:** You order the pizza, give your phone number, and go learn JavaScript. When the pizza is ready, they call you to pick it up.

**Synchronous code** waits for each task to finish before moving on.
**Asynchronous code** can start a task and move on to other things, then come back when the task is done.

<!-- .slide: style="font-size:80%" -->

---

### Synchronous function call

```js
function add(a, b) {
  return a + b;
}
let result = add(1, 2);
```

`add(1, 2)` is a synchronous function call. The function is called, and the result is returned immediately. No other code runs in between. While `add` runs, the entire web page is blocked.

---

### Asynchronous function call

```js
async function add(a, b) {
  return a + b;
}
let result = add(1, 2);
```

We define `add` with the additional `async` keyword. This tells JavaScript that the function is asynchronous. The function is called, but the result is not returned immediately. The function returns a promise.

---

So great, we can define a function asynchronously.

But how do we get the result?

<!-- .element: class="fragment" -->

---

### await

```js
async function add(a, b) {
  return a + b;
}
async function main() {
  let result = await add(1, 2);
}
main();
```

We can use the `await` keyword to wait for the result of an asynchronous function. The `await` keyword can only be used inside an `async` function.

---

### fetch

`fetch` is an `async` function that we can use to download content from the internet asynchronously:

```js
async function main() {
  let response = await fetch("https://restcountries.com/v3.1/lang/spanish");
  let data = await response.json();
  console.log(data);
}
```

---

### Tasks

1. Download the data from https://restcountries.com/v3.1/name/deutschland (or any country you like) in JavaScript and log the response to console
1. Create a web page that displays the country's official name, its area and its population
1. Bonus: Show the capital cities
1. Bonus: Display the flag and the coat of arms of the country as SVG file. (Hint: use `img` element and set the `src` attribute).

<!-- .slide: style="font-size:80%" -->

---

### More Bonus

1. Add an input field and a button to your page. When the user clicks the button, show the details about the country that the user entered in the input field.
1. Sometimes, more than one country can be returned. Try entering "united" in your input field. Extend your web page to show _all_ countries that match the user's input.
1. Show all the bordering countries (field: `borders`) as buttons. Example: Germany has a neighbour called `AUT`. Create a button with text content `AUT` and when the user clicks the button, the page should display information about this country (hint: use the `alpha` API, e.g: https://restcountries.com/v3.1/alpha/aut)

<!-- .slide: style="font-size:80%" -->

---

### Dogs

https://dog.ceo/dog-api/documentation/random

> Display a random dog image

https://kinduff.github.io/dog-api/

> Fetch any random dog fact

<!-- .slide: style="font-size:80%" -->

---

### Task

Create a simple webpage, that fetches a random dog image from the API. Pair it with the second API and show a random dog fact together with image.

---

## Holidays

https://date.nager.at/Api

> Query the holidays of over 100 countries

---

### Task

Show the holidays in Germany for 2025.

BONUS: Add a dropdown to select holidays for one state only.

<!-- .slide: style="font-size:80%" -->
