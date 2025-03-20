<!-- .slide: id="lesson1" -->

### JavaScript Course - Spring 2025

Lesson 1, Thursday, 2025-03-20

---

### Lesson overview

- Introduction to JavaScript
- Data Types

---

<!-- .slide: id="intro" -->

# Welcome to JavaScript!

---

> It does not matter what we cover, but what you discover
>
> \- Victor Weisskopf, quoted by Noam Chomsky


---

### Questions

- don't be shy (or scared), ask questions!
  - as many as possible
  - there are no bad questions
- interrupt us
- ask us to repeat
- if something is not clear to you, it's likely that it's not clear for others

---

- Students with growth mindset are likely to learn by a mastery approach, embrace challenges and put in effort to learn

- Setbacks as a necessary part of the learning process (cf. [The Neuroscience of Growth Mindset and Intrinsic Motivation](https://pmc.ncbi.nlm.nih.gov/articles/PMC5836039/) )  


---

![Growth Mindset](images/growth-mindset.jpg) <!-- .element  height="270px" width="430px"-->


---

### Pillars of Web Development

| HTML                                                                         | CSS                                                                   | JavaScript                                                                     |
| ---------------------------------------------------------------------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| ![HTML5](images/HTML5_Logo.svg) <!-- .element height="64px" width="64px" --> | ![CSS3](images/css3.svg) <!-- .element height="64px" width="64px" --> | ![JS](images/javascript-logo.svg) <!-- .element height="64px" width="64px" --> |
| _Content_                                                                    | _Presentation_                                                        | _Dynamic Effects_                                                              |
| Nouns                                                                        | Adjectives                                                            | Verbs                                                                          |

```html
<p>Hey</p>
<!-- HTML: Adds a paragraph -->
```

```css
p {
  color: red;
} /* CSS: Makes the paragraph red */
```

```js
p.remove(); // JavaScript: removes the paragraph
```

---

### JavaScript (JS) - What is it?

- JS is a _programming language_ (_scripting language_)
- JS allows you to implement dynamic content and effects

---

### JavaScript is Everywhere

- For servers, back-end: [Node.js](https://nodejs.org/en/), [Deno](https://deno.land/), ...
- For mobile apps: [React Native](https://facebook.github.io/react-native/), [Cordova](https://cordova.apache.org/), ...
- For desktop apps: [PWAs](https://developers.google.com/web/progressive-web-apps), [Electron](https://www.electronjs.org/)
- [Most used programming language](https://www.statista.com/statistics/793628/worldwide-developer-survey-most-used-languages/) among developers worldwide as of 2024
- [#1 most used language on GitHub](https://octoverse.github.com/2022/top-programming-languages) as of 2022

---

### Tools

We'll be using these tools during our course:

- [Chrome Browser](https://www.google.com/chrome/) (or any modern browser, although Chrome is advised)
- [Visual Studio Code](https://code.visualstudio.com/)
- [MDN Web Documentation](https://developer.mozilla.org/en-US/)

Please install [Visual Studio Code](https://code.visualstudio.com/)

---

### Additional Material

<!-- .slide: style="font-size:80%" -->

- [javascript.info](https://javascript.info/): tutorials with nice (often visual) explanations
- [freecodecamp.org](https://www.freecodecamp.org/): full free courses on many topics
- [udemy.com](https://www.udemy.com): Introduction to JS (course)
- [codeacademy.com](https://www.codecademy.com): Introduction to JS (another course)
- [edabit.com](https://edabit.com): Learn JavaScript with interactive challenges and external resources
- [learnjavascript.online](https://learnjavascript.online): very good online course, but costs 40€

---

### Names of Special Characters

|                                      |                                                               |
| ------------------------------------ | ------------------------------------------------------------- |
| `(` Parentheses `)`                  | `<` Angle brackets `>`                                        |
| `{` Braces, or curly braces `}`      | `&` Ampersand `&`                                             |
| `[` Brackets, or square brackets `]` | <code>&#124;</code> Vertical bar, or pipe <code>&#124;</code> |
| `;` Semicolon `;`                    | `:` Colon `:`                                                 |
| `'` Single quote `'`                 | `#` Hash or number sign `#`                                   |
| `"` Double quote `"`                 | `` ` `` Back tick `` ` ``                                     |
| `_` Underscore `_`                   | `*` Asterisk `*`                                              |
| `/` Slash, or Forward slash `/`      | `~` Tilde `~`                                                 |
| `\` Backslash `\`                    | `^` Caret or circumflex `^`                                   |

---

### Let's start with JavaScript!

- Open Google Chrome
- Hit `F12` key
- _Or opt + cmd + C (Mac) / ctrl + shift + C (Windows)_
- Click on **Console**
- Try entering something

What did you try? What did you see?

<!-- .element: class="fragment" -->

---

### Numbers and Numerical Operators

<!-- .slide: style="font-size:80%" -->

Numbers include natural and decimal numbers. In Javascript, we call them integer and float, respectively.

```
10, 12, 1.5, 3.5
```

Basic mathematical operators:

- `+` addition
- `-` subtraction
- `*` multiplication
- `/` division
- `**` exponentiation

---

### Practice

Let's say we want to go to the cinema with some friends (choose any number).

1. How many people are going to the cinema in total? Enter it to JavaScript Console.

<!-- .element: class="fragment" -->

2. A ticket costs 8€. Let JavaScript compute how much we have to pay in total.

<!-- .element: class="fragment" -->

3. Alan and Ada volunteered to pay for the tickets. Use JavaScript to compute how much each has to pay.

<!-- .element: class="fragment" -->

---

<!-- .slide: id="basic-data-types" -->

### Data Types

A data type is defined by two things:

1. A set of values
1. A set of operators

The operators are used on the values.

---

`2` and `3` are example _values_ for the `Number` data type. `+` is an _operator_ that we can use to perform an addition on `2` and `3`.

When we say "Number data type", we mean all the possible number values plus all the operations we can perform with those values.

---

### Data Type: String

- A **String** is a sequence of characters
- It starts and ends with a `"` double quote
- **Or** it starts and ends with a `'` single quote
- Examples: `"Hello"`, `'Grace Hopper'`

---

### Try it out

Open the console, and type in the following strings:

- Your first name
- Your favorite food
- Name of your favorite book / tv series / anime

---

### Strings and Quotes

Strings start and end with (`'`) or (`"`). But what if we want to add a quote within our string?

```js
"He said: "Hello""
```

We must _escape_ the quote with a backslash (`\`).

A backslash in a string means that the character right after the backslash is special:

```js
"He said: \"Hello\"";
```

---

### Special Characters

If you want a backslash in a string, you need to escape it: `"\\"`

There are some special characters in strings, for example:

- `"\n"` - new line
- `"\t"` - tab

---

### Quiz: Which strings are correct?

```plaintext
1. "Hello"
2. 'World'
3. "He said "hello" to me"
4. 'Let's go!'
5. ""
6. 'This is a\nnew line'
7. 'This is a backslash: \'
```

---

### Solution

```js
"Hello"                        // CORRECT
'World'                        // CORRECT
"He said "hello" to me"        // WRONG - unescaped quotes
'Let's go!'                    // WRONG - unescaped '
""                             // CORRECT
'This is a\nnew line'          // CORRECT
'This is a backslash: \'       // WRONG - escaped '
```

### String operators

The addition operator (`+`) can be used to combine (concatenate) two strings:

```js
"a" + "b" // results: "ab"
```

---

### String operators

The addition operator can be used on Strings and Numbers:

```js
1 + 1 // is 2

"hello" + " world" // is "hello world"
```

---

### Importance of data types

```js
1 + 1 // is 2

"1" + "1" // is "11"
```

It is important to select the appropriate data type for your data, as the behavior of operators in JavaScript varies depending on the data type used.

---

### Small exercise

Use the `+` operator to combine multiple strings to generate the following string. Use your name and favorite food:

`Hello, my name is + (name) + and I like + (food)`

---

### String operators

We shouldn't use operators (like `-`, `/`, `*`) on strings. While JavaScript allows that, the results are unexpected. With strings, use `+` for concatenation.

---

### Data Type: Boolean

- **Boolean** describes a yes/no situation
- In JavaScript, we use `true` or `false`

---

### Practice

Open the console, and type in the following:

- `true`
- `false`

Why would we dedicate an entire data type for just two values?

<!-- .element: class="fragment" -->

---

