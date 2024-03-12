# Welcome to My Tech Interview Preparation Repository

This repository contains a comprehensive collection of interview questions for various technologies including HTML, CSS, JavaScript, React, TypeScript, Express, and Node.js. We aim to provide over 1000 questions to help you prepare thoroughly for your technical interviews.

## Table of Contents

| Tech(Language) | No. of Questions |
| -------------- | ---------------- |
| HTML           | 30               |
| CSS            | 20               |
| Javascript     | 30               |
| React          | 10               |

## Description

This repository is dedicated to providing a comprehensive collection of interview questions for various web development technologies. Whether you're preparing for interviews or simply looking to enhance your knowledge in HTML, CSS, JavaScript, React, TypeScript, Express, or Node.js, you'll find a wide range of questions and answers to help you in your journey.

Feel free to contribute by adding more questions or improving existing ones. Let's collaborate to build a valuable resource for the developer community!

# Advanced HTML Interview Questions

## Question 1: What are the differences between HTML4 and HTML5?

**Answer:**
HTML5 introduces several new features and elements such as `<canvas>`, `<video>`, `<audio>`, `<section>`, `<article>`, `<header>`, `<footer>`, etc., compared to HTML4. HTML5 also provides better support for multimedia, graphics, and offline applications through features like local storage and web workers.

## Question 2: Explain the differences between `<div>` and `<span>` elements.

**Answer:**
`<div>` is a block-level element used to group elements for styling purposes and to create layout structures. `<span>` is an inline-level element used to apply styles to specific portions of text within a block-level element.

## Question 3: What is the purpose of the `data-` attribute in HTML5?

**Answer:**
The `data-` attribute allows developers to store custom data attributes directly in HTML elements. These attributes can be accessed and manipulated using JavaScript and are commonly used to store extra information that is not suitable for other attributes or elements.

## Question 4: Explain the difference between `<script>`, `<script async>`, and `<script defer>` in HTML.

**Answer:**

- `<script>` is used to embed or reference a JavaScript file in an HTML document. Scripts included using `<script>` block further parsing of the HTML content until the script is fetched and executed.
- `<script async>` loads the script asynchronously while parsing the HTML document. The script is executed immediately after it's downloaded, potentially before the HTML document is fully parsed.
- `<script defer>` also loads the script asynchronously but defers its execution until after the HTML document has been fully parsed.

## Question 5: What are semantic elements in HTML5, and why are they important?

**Answer:**
Semantic elements in HTML5 are elements that carry meaning. They describe the content they contain, making it more understandable both for developers and assistive technologies like screen readers. Examples include `<header>`, `<footer>`, `<nav>`, `<article>`, `<section>`, `<aside>`, and it is mainly use for SEO (Search Engine Optimizaion)

## Question 6: What is the purpose of the `alt` attribute in the `<img>` element?

**Answer:**
The `alt` attribute provides alternative text for an image if the image cannot be displayed. It is important for accessibility as it helps users who cannot see the image understand its content or purpose.

## Question 7: Explain the differences between HTTP GET and POST methods.

**Answer:**

- GET is used to request data from a specified resource, and the data is sent in the URL. It has length restrictions and should not be used for sensitive data.
- POST is used to submit data to be processed to a specified resource, and the data is sent in the HTTP request body. It can handle large amounts of data and is more secure for sensitive information.

## Question 8: What is the purpose of the `<iframe>` element, and what are some considerations when using it?

**Answer:**
`<iframe>` is used to embed another HTML document within the current document. It is commonly used for embedding videos, maps, or other third-party content. Considerations include security risks associated with cross-origin content, performance implications, and accessibility concerns.

## Question 9: Explain the concept of responsive web design and how it's implemented in HTML.

**Answer:**
Responsive web design is an approach to design and development that ensures a website adapts to various screen sizes and devices. This is typically achieved using CSS media queries to adjust the layout, font sizes, and other elements based on the viewport width. HTML elements can also be structured using flexible or fluid layouts to accommodate different screen sizes.

## Question 10: What is the purpose of the `<meta>` tag in HTML, and what are some common attributes used with it?

**Answer:**
The `<meta>` tag is used to provide metadata about the HTML document, such as character encoding, viewport settings, author information, and keywords. Common attributes include `charset`, `name`, `content`, `http-equiv`, `viewport`, `description`, `author`, `keywords`, etc.

## Question 11: What is the purpose of the `<!DOCTYPE>` declaration in HTML?

**Answer:**
The `<!DOCTYPE>` declaration specifies the document type and version of HTML being used. It helps browsers to render the web page correctly by switching to the appropriate rendering mode. For example, `<!DOCTYPE html>` declares the document as an HTML5 document.

## Question 12: Explain the difference between HTML entities and HTML character codes.

**Answer:**
HTML entities are symbolic representations of characters, such as `&lt;` for `<` and `&gt;` for `>`. HTML character codes are numeric representations of characters, such as `&#60;` for `<` and `&#62;` for `>`. Both entities and codes can be used to display special characters in HTML.

## Question 13: What are the new input types introduced in HTML5 for form validation?

**Answer:**
HTML5 introduced new input types such as `email`, `url`, `tel`, `number`, `date`, `time`, `datetime`, `month`, `week`, `color`, etc., which provide built-in form validation features in modern browsers.

## Question 14: How can you embed audio and video content in HTML5 without using `<audio>` and `<video>` elements?

**Answer:**
You can embed audio and video content in HTML5 using the `<object>` element or the `<embed>` element. However, it's recommended to use the `<audio>` and `<video>` elements for better compatibility and accessibility.

## Question 15: What is the purpose of the `<figure>` and `<figcaption>` elements in HTML5?

**Answer:**
The `<figure>` element is used to encapsulate self-contained content, such as images, illustrations, diagrams, etc. The `<figcaption>` element is used to provide a caption or description for the content within the `<figure>` element.

## Question 16: How can you create a hyperlink that opens an email client with a pre-filled email address in HTML?

**Answer:**
You can create a mailto link using the `mailto:` protocol followed by the email address. For example, `<a href="mailto:example@example.com">Send Email</a>` will open the default email client with the recipient's email address pre-filled.

## Question 17: Explain the differences between the `<strong>` and `<b>` elements, and the `<em>` and `<i>` elements in HTML.

**Answer:**
`<strong>` and `<b>` are used to emphasize text, but `<strong>` indicates stronger importance, typically displayed in bold, while `<b>` is just for stylistic purposes. Similarly, `<em>` and `<i>` are used to italicize text, but `<em>` indicates emphasis, typically displayed in italics, while `<i>` is for stylistic purposes.

## Question 18: What is the purpose of the `aria-` attributes in HTML, and how are they used for accessibility?

**Answer:**
The `aria-` attributes are used to enhance the accessibility of HTML elements for assistive technologies, such as screen readers. They provide additional information about the role, state, and properties of elements that may not be conveyed through the HTML structure alone.

## Question 19: How can you create a placeholder text for an input field in HTML5?

**Answer:**
You can use the `placeholder` attribute to create placeholder text for an input field. For example, `<input type="text" placeholder="Enter your name">` will display "Enter your name" as a placeholder text in the input field.

## Question 20: Explain the difference between the `<input type="button">`, `<input type="submit">`, and `<button>` elements in HTML.

**Answer:**

- `<input type="button">`: It creates a clickable button without any default behavior. You need to use JavaScript to define the button's action.
- `<input type="submit">`: It creates a button that submits the form when clicked.
- `<button>`: It creates a clickable button that can have both text and HTML content, and you can define its behavior using JavaScript.

## Question 21: What is the purpose of the `contenteditable` attribute in HTML?

**Answer:**
The `contenteditable` attribute is used to make an element editable by the user. When set to `true`, the content of the element can be edited directly by the user. This attribute is commonly used to create rich text editors or make specific sections of a webpage editable.

## Question 22: Explain the difference between the `<script>` tag placement: at the top, at the bottom, and using the `async` attribute.

**Answer:**

- Placing `<script>` tags at the top of the HTML document may block the rendering of the page content until the script is fully loaded and executed.
- Placing `<script>` tags at the bottom of the HTML document allows the page content to render first, improving perceived performance, but may delay script execution.
- Using the `async` attribute with the `<script>` tag allows the script to be downloaded asynchronously while parsing the HTML document. This can improve page load time and doesn't block rendering, but the order of execution may not be guaranteed.

## Question 23: What is the purpose of the `<details>` and `<summary>` elements in HTML?

**Answer:**
The `<details>` element is used to create a disclosure widget, which allows users to toggle the visibility of additional content. The content that can be toggled is enclosed within the `<details>` element. The `<summary>` element is used to provide a visible heading or summary for the content enclosed within the `<details>` element.

## Question 24: How can you create a tooltip in HTML without using JavaScript?

**Answer:**
You can create a tooltip using the `title` attribute. When the user hovers over an element with the `title` attribute, the browser will display the tooltip with the content of the `title` attribute. For example, `<a href="#" title="This is a tooltip">Hover me</a>` will display "This is a tooltip" when hovered.

## Question 25: What is the purpose of the `scoped` attribute in the `<style>` tag?

**Answer:**
The `scoped` attribute in the `<style>` tag is used to apply styles only to the elements within the same parent element as the `<style>` tag. This allows for more localized styling, reducing the risk of style conflicts with other parts of the document.

## Question 26: How can you create a responsive image in HTML?

**Answer:**
You can create a responsive image by setting the `width` property to `100%` and the `height` property to `auto`. This ensures that the image scales proportionally to fit its container while maintaining its aspect ratio, making it responsive to different screen sizes.

## Question 27: What is the purpose of the `hidden` attribute in HTML?

**Answer:**
The `hidden` attribute is used to hide an element from being displayed in the browser. When applied to an element, it removes the element from the rendering flow, effectively hiding it from view. This attribute can be toggled dynamically using JavaScript to show or hide elements as needed.

## Question 28: How can you embed SVG (Scalable Vector Graphics) in HTML?

**Answer:**
You can embed SVG in HTML using the `<svg>` element directly in the HTML document. Alternatively, you can use the `<img>` element with the `src` attribute pointing to an SVG file, or use inline SVG by including SVG markup within an HTML document.

## Question 29: What are the benefits of using semantic HTML elements?

**Answer:**
Semantic HTML elements provide meaning to the structure of a web page, making it more accessible to both users and search engines. They improve code readability and maintainability, enhance search engine optimization (SEO), and help assistive technologies better understand the content and context of the page.

## Question 30: How can you create custom data attributes in HTML?

**Answer:**
Custom data attributes can be created by prefixing attribute names with `data-`. For example, `<div data-custom="value">` creates a custom data attribute named `data-custom` with the value `value`. Custom data attributes are commonly used to store extra information that is not suitable for other attributes or elements.

# Advanced CSS Interview Questions

### Question 31: What is the CSS Box Model?

**Answer:**
The CSS Box Model describes the layout of elements in HTML. It consists of the content area, padding, border, and margin. The content area contains the actual content of the element, surrounded by padding, border, and margin, which provide spacing and styling options.

### Question 32: Explain the difference between `display: block`, `display: inline`, and `display: inline-block`.

**Answer:**

- `display: block`: Renders the element as a block-level element, taking up the full width available and starting on a new line.
- `display: inline`: Renders the element as an inline-level element, allowing other elements to appear on the same line.
- `display: inline-block`: Renders the element as an inline-level element, but retains block-like features such as the ability to set width, height, padding, and margin.

### Question 33: What is the difference between `position: relative`, `position: absolute`, `position: fixed`, and `position: sticky`?

**Answer:**

- `position: relative`: Positions the element relative to its normal position in the document flow.
- `position: absolute`: Positions the element relative to its nearest positioned ancestor or the initial containing block.
- `position: fixed`: Positions the element relative to the viewport, meaning it stays in the same position even when the page is scrolled.
- `position: sticky`: Positions the element based on the user's scroll position. It acts like `relative` positioning until the element reaches a specified point and then becomes `fixed`.

### Question 34: How do you vertically center an element in CSS?

**Answer:**
There are several methods to vertically center an element in CSS, including using `flexbox`, `grid`, or `position` properties like `absolute` and `transform`.

### Question 35: What is the CSS specificity and how does it work?

**Answer:**
CSS specificity is a measure of how specific a selector is in targeting elements. It determines which styles take precedence when multiple conflicting styles are applied to the same element. Specificity is calculated based on the type of selector, ID selectors being the most specific, followed by class selectors, attribute selectors, and finally, type selectors.

### Question 36: What are CSS pseudo-elements and pseudo-classes?

**Answer:**
CSS pseudo-elements are used to style specific parts of an element, such as the first line or first letter of text, using selectors like `::first-line` and `::first-letter`. Pseudo-classes are used to style elements in specific states, such as `:hover` for mouse hover, `:focus` for focus, and `:active` for active states.

### Question 37: Explain the difference between `margin` and `padding`.

**Answer:**

- `margin`: Provides space outside an element's border, creating space between the element and surrounding elements.
- `padding`: Provides space inside an element's border, creating space between the element's content and its border.

### Question 38: What is the CSS `z-index` property used for?

**Answer:**
The `z-index` property specifies the stacking order of positioned elements along the z-axis (perpendicular to the screen). Elements with a higher `z-index` value appear on top of elements with a lower `z-index` value. This property only works on positioned elements (`position: absolute`, `position: relative`, `position: fixed`, or `position: sticky`).

### Question 39: How can you create CSS animations and transitions?

**Answer:**
CSS animations are created using the `@keyframes` rule, defining the animation's keyframes and properties over specific intervals. CSS transitions are created using the `transition` property, specifying the property to animate, duration, timing function, and delay.

### Question 40: What are CSS preprocessors and what are their advantages?

**Answer:**
CSS preprocessors like Sass, LESS, and Stylus extend the capabilities of CSS by introducing features like variables, mixins, functions, and nested rules. They help improve code organization, maintainability, and reusability, allowing for more efficient CSS development.

### Question 40: What is the CSS Box Model and how does it work?

**Answer:**
The CSS Box Model is a fundamental concept that describes the design and layout of elements on a web page. It consists of four main components: content, padding, border, and margin. When you apply styles to an element, such as setting its width, height, padding, border, or margin, these properties are calculated based on the box model.

### Question 41: What are CSS preprocessors, and why are they used?

**Answer:**
CSS preprocessors are tools that extend the functionality of CSS by introducing features like variables, nesting, mixins, inheritance, and more. Popular CSS preprocessors include Sass, LESS, and Stylus. They help improve code organization, maintainability, and reusability by allowing developers to write cleaner and more concise CSS code.

### Question 42: Explain the difference between `em` and `rem` units in CSS.

**Answer:**

- `em` unit: Represents the font size of the element relative to its parent element's font size. If applied to other properties like width or height, it's relative to the font size of the element itself.
- `rem` unit: Represents the font size of the root element (`html`). It ensures consistent sizing across the entire document, as it's not affected by the font size of parent elements.

### Question 43: What is the difference between `:nth-child()` and `:nth-of-type()` selectors in CSS?

**Answer:**

- `:nth-child()`: Selects elements based on their position relative to their parent container, regardless of their type.
- `:nth-of-type()`: Selects elements based on their position relative to their parent container, considering only elements of the same type.

### Question 44: How can you vertically center an element in CSS?

**Answer:**
There are several methods to vertically center an element:

1. Using Flexbox: Apply `display: flex` to the parent container and use `align-items: center`.
2. Using Grid: Apply `display: grid` to the parent container and use `align-items: center`.
3. Using `position` and `transform`: Apply `position: absolute` to the element and use `top: 50%` and `transform: translateY(-50%)`.
4. Using table-cell: Apply `display: table-cell` to the parent container and use `vertical-align: middle`.

### Question 45: What are CSS variables (Custom Properties), and how do you use them?

**Answer:**
CSS variables, also known as Custom Properties, allow you to define reusable values that can be used throughout your CSS code. They are declared using the `--` prefix and accessed using the `var()` function. For example:

```css
:root {
  --primary-color: #007bff;
}

.element {
  color: var(--primary-color);
}
```

### Question 46: What is the CSS specificity and how does it work?

**Answer:**
CSS specificity determines which CSS rule takes precedence when multiple rules target the same element. Specificity is calculated based on the number of selectors, type of selectors, and order of specificity. Inline styles have the highest specificity, followed by IDs, classes, and elements.

### Question 47: What is the difference between `display: none` and `visibility: hidden`?

**Answer:**

- `display: none`: Completely removes the element from the document flow, making it invisible and not taking up any space.
- `visibility: hidden`: Hides the element while still occupying space in the document flow. The element is not visible, but its space is preserved.

### Question 48: Explain the difference between absolute and relative positioning in CSS.

**Answer:**

- Absolute positioning: Positions the element relative to its nearest positioned ancestor. If no ancestor is positioned, it is placed relative to the initial containing block.
- Relative positioning: Positions the element relative to its normal position in the document flow, while still occupying space in the document flow. Other elements are positioned as if the element were in its normal position.

### Question 49: How can you create a CSS animation?

**Answer:**
CSS animations allow you to animate CSS properties over time. You can define animations using `@keyframes` rule and apply them to elements using the `animation` property. For example:

```css
@keyframes slide-in {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

.element {
  animation: slide-in 1s forwards;
}
```

### Question 50: What is the purpose of the `z-index` property in CSS?

**Answer:**
The `z-index` property specifies the stacking order of positioned elements along the z-axis (depth) of the stacking context. Elements with a higher `z-index` value will be displayed in front of elements with a lower `z-index` value.

# Advanced Javascript Interview Questions

### Question 51: What is event delegation in JavaScript?

**Answer:**
Event delegation is a technique in JavaScript where instead of attaching an event handler to each individual element, you attach it to a parent element. When an event occurs, it bubbles up from the target element to the parent element where the event handler is attached. This allows you to handle events efficiently, especially for dynamically created elements.

### Question 52: Explain the concept of closures in JavaScript.

**Answer:**
A closure is a combination of a function and the lexical environment within which that function was declared. It allows a function to retain access to variables from its lexical scope even after the scope has closed. This enables powerful programming patterns like data encapsulation, private variables, and the creation of factory functions and modules.

### Question 53: What are promises in JavaScript? How do they work?

**Answer:**
Promises are objects representing the eventual completion or failure of an asynchronous operation. They are used to handle asynchronous operations in JavaScript, providing a cleaner and more readable syntax compared to callbacks. A promise can be in one of three states: pending, fulfilled, or rejected. Once a promise settles (either fulfilled or rejected), it will not change its state again.

### Question 54: What is the difference between `null` and `undefined` in JavaScript?

**Answer:**

- `null`: Represents the intentional absence of any value. It is a primitive value that indicates a variable has been explicitly set to nothing.
- `undefined`: Represents an uninitialized, declared variable. It is also a primitive value and is the default value of uninitialized variables.

### Question 55: Explain the concept of prototypal inheritance in JavaScript.

**Answer:**
Prototypal inheritance is a mechanism in JavaScript where objects inherit properties and methods from other objects. Each object has a prototype object, and when a property or method is accessed on an object, JavaScript first checks if it exists on the object itself. If not, it looks up the prototype chain until it finds the property or method or reaches the end of the chain (with the prototype being `null`).

### Question 56: What are higher-order functions in JavaScript?

**Answer:**
Higher-order functions are functions that can accept other functions as arguments or return functions as output. They enable powerful programming patterns like function composition, currying, and abstraction over behavior.

### Question 57: What is the event loop in JavaScript?

**Answer:**
The event loop is a crucial part of JavaScript's concurrency model. It continuously checks the call stack for any tasks that need to be executed. If the call stack is empty, it checks the task queue for any pending asynchronous tasks. If there are tasks in the queue, the event loop will dequeue them and push them onto the call stack for execution.

### Question 58: Explain the difference between `==` and `===` in JavaScript.

**Answer:**

- `==`: The equality operator compares two values after converting them to a common type. It performs type coercion if the operands are of different types.
- `===`: The strict equality operator compares two values without type conversion. It returns true only if both the value and the type are the same.

### Question 59: What is a closure and how is it used in JavaScript?

**Answer:**
A closure is a combination of a function and the lexical environment within which that function was declared. It allows a function to retain access to variables from its lexical scope even after the scope has closed. Closures are commonly used for data encapsulation, private variables, and maintaining state in functional programming patterns.

### Question 60: Explain the concept of hoisting in JavaScript.

**Answer:**
Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase, before the code execution. This means you can use variables and functions before they are declared in your code. However, only the declarations are hoisted, not the initializations.

### Question 61: What is the difference between `null` and `undefined` in JavaScript?

**Answer:**

- `null`: Represents the intentional absence of any value. It is a primitive value that indicates a variable has been explicitly set to nothing.
- `undefined`: Represents an uninitialized, declared variable. It is also a primitive value and is the default value of uninitialized variables.

### Question 62: Explain the concept of prototypal inheritance in JavaScript.

**Answer:**
Prototypal inheritance is a mechanism in JavaScript where objects inherit properties and methods from other objects. Each object has a prototype object, and when a property or method is accessed on an object, JavaScript first checks if it exists on the object itself. If not, it looks up the prototype chain until it finds the property or method or reaches the end of the chain (with the prototype being `null`).

### Question 63: What are higher-order functions in JavaScript?

**Answer:**
Higher-order functions are functions that can accept other functions as arguments or return functions as output. They enable powerful programming patterns like function composition, currying, and abstraction over behavior.

### Question 64: What is the event loop in JavaScript?

**Answer:**
The event loop is a crucial part of JavaScript's concurrency model. It continuously checks the call stack for any tasks that need to be executed. If the call stack is empty, it checks the task queue for any pending asynchronous tasks. If there are tasks in the queue, the event loop will dequeue them and push them onto the call stack for execution.

### Question 65: Explain the difference between `==` and `===` in JavaScript.

**Answer:**

- `==`: The equality operator compares two values after converting them to a common type. It performs type coercion if the operands are of different types.
- `===`: The strict equality operator compares two values without type conversion. It returns true only if both the value and the type are the same.

### Question 66: What is a closure and how is it used in JavaScript?

**Answer:**
A closure is a combination of a function and the lexical environment within which that function was declared. It allows a function to retain access to variables from its lexical scope even after the scope has closed. Closures are commonly used for data encapsulation, private variables, and maintaining state in functional programming patterns.

### Question 67: Explain the concept of hoisting in JavaScript.

**Answer:**
Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase, before the code execution. This means you can use variables and functions before they are declared in your code. However, only the declarations are hoisted, not the initializations.

### Question 68: What are the benefits of using strict mode in JavaScript?

**Answer:**
Strict mode is a feature in JavaScript that helps catch common coding errors and enforce stricter parsing and error handling. Some benefits of using strict mode include preventing accidental global variables, making `this` point to `undefined` in functions invoked without a context, and throwing errors for silent errors.

### Question 69: How does `async`/`await` work in JavaScript?

**Answer:**
`async`/`await` is a feature in JavaScript that allows asynchronous code to be written in a synchronous style. It is built on top of promises and provides a more intuitive way to work with asynchronous operations. The `async` keyword is used to define an asynchronous function, while the `await` keyword is used to pause the execution of an asynchronous function until a promise is resolved or rejected.

### Question 70: What are generators in JavaScript and how are they used?

**Answer:**
Generators are special functions in JavaScript that can be paused and resumed at any time. They are defined using the function\* syntax and yield values one at a time using the `yield` keyword. Generators are useful for implementing iteration protocols, asynchronous programming, and lazy evaluation.

### Question 71: What is the purpose of the `this` keyword in JavaScript?

**Answer:**
The `this` keyword in JavaScript refers to the object that is currently executing the code. Its value is determined by how a function is called, and it can have different values depending on the context in which it is used. In global scope, `this` refers to the global object (window in browsers). In a function called as a method of an object, `this` refers to the object itself. In an event handler, `this` usually refers to the element that triggered the event.

### Question 72: Explain the concept of event bubbling and event capturing in JavaScript.

**Answer:**
Event bubbling and event capturing are two mechanisms for handling events in the DOM.

- **Event bubbling**: In event bubbling, when an event is triggered on an element, it first runs the event handlers on the innermost element and then bubbles up to run event handlers on its parent elements.
- **Event capturing**: In event capturing, when an event is triggered on an element, it runs event handlers on the outermost element first and then works its way down to the innermost element.

### Question 73: What is the difference between `addEventListener()` and `attachEvent()` methods in JavaScript?

**Answer:**

- `addEventListener()`: This is a method used to attach an event handler to an element. It allows attaching multiple event handlers to the same element and supports event delegation. It is the preferred method for adding event listeners in modern browsers.
- `attachEvent()`: This method was used in older versions of Internet Explorer to attach event handlers to elements. It only allows attaching one event handler per element and does not support event delegation. It is deprecated and not recommended for use in modern web development.

### Question 74: What is the `DOMContentLoaded` event in JavaScript?

**Answer:**
The `DOMContentLoaded` event is fired when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading. This event is useful for executing JavaScript code that needs to run as soon as the DOM is ready but before the `load` event occurs.

### Question 75: What are arrow functions in JavaScript? How do they differ from regular functions?

**Answer:**
Arrow functions are a more concise way to write functions in JavaScript introduced in ECMAScript 6 (ES6). They have a more compact syntax and lexically bind the `this` value, meaning they inherit `this` from the surrounding code. Arrow functions do not have their own `this`, `arguments`, `super`, or `new.target` bindings. Additionally, arrow functions cannot be used as constructors and do not have a `prototype` property.

### Question 76: How do you clone an object in JavaScript?

**Answer:**
There are several ways to clone an object in JavaScript:

- Using the spread operator (`...`): `const clone = { ...original };`
- Using `Object.assign()`: `const clone = Object.assign({}, original);`
- Using `JSON.parse()` and `JSON.stringify()`: `const clone = JSON.parse(JSON.stringify(original));`
- Using `Object.create()`: `const clone = Object.create(Object.getPrototypeOf(original), Object.getOwnPropertyDescriptors(original));`

### Question 77: What is a Promise in JavaScript? How do you handle promise chaining and errors?

**Answer:**
A Promise in JavaScript represents the eventual completion or failure of an asynchronous operation and its resulting value. Promises are used for handling asynchronous operations in a more manageable and scalable way. Promise chaining allows you to execute multiple asynchronous operations sequentially. Errors in promises can be handled using the `.catch()` method to catch any errors that occur during the promise chain.

### Question 78: What is the purpose of the `fetch()` function in JavaScript?

**Answer:**
The `fetch()` function is used to make network requests to fetch resources from the network. It is a modern replacement for XMLHttpRequest (XHR) and provides a simpler and more flexible interface for making HTTP requests. The `fetch()` function returns a Promise that resolves to the Response object representing the response to the request.

### Question 79: What are modules in JavaScript? How do you export and import modules?

**Answer:**
Modules in JavaScript are reusable pieces of code that encapsulate functionality and can be imported into other scripts. Modules allow you to organize code into separate files, making it easier to manage and maintain large applications. You can export variables, functions, and classes from a module using the `export` keyword and import them into another module using the `import` keyword.

### Question 80: How do you handle asynchronous code in JavaScript?

**Answer:**
Asynchronous code in JavaScript can be handled using callbacks, Promises, async/await, and event listeners. Callbacks are functions passed as arguments to other functions and executed later when an asynchronous operation completes. Promises provide a cleaner and more manageable way to work with asynchronous code and handle asynchronous operations sequentially or concurrently. Async/await is a modern feature in JavaScript that allows you to write asynchronous code in a synchronous style, making it easier to read and understand. Event listeners are used to handle asynchronous events such as user input, network requests, and timers.

# React Interview Questions

### Question 81: What are React hooks? How do they differ from class components?

**Answer:**
React hooks are functions that let you use state and other React features in functional components. They were introduced in React 16.8 as a way to use state and lifecycle methods in functional components without writing a class. Hooks provide a more concise and readable way to manage component state and side effects compared to class components.

### Question 82: Explain the purpose of the `useState` hook in React.

**Answer:**
The `useState` hook is used to add state to functional components in React. It returns a stateful value and a function to update that value. The initial state can be passed as an argument to the `useState` hook, and subsequent updates to the state can be made using the update function returned by the hook.

### Question 83: What is the `useEffect` hook in React and how is it used?

**Answer:**
The `useEffect` hook is used to perform side effects in functional components in React. It allows you to perform tasks such as data fetching, subscriptions, or manually changing the DOM after the component has rendered. The `useEffect` hook takes a function as its first argument, which will be executed after every render. You can also specify dependencies to control when the effect runs.

### Question 84: What are controlled and uncontrolled components in React?

**Answer:**

- Controlled components: Components whose state is controlled by React. Their value is controlled by React state, and updates to the input value are handled by event handlers.
- Uncontrolled components: Components whose state is managed by the DOM itself. Their value is controlled by the DOM, and updates to the input value are not managed by React state.

### Question 85: What is the purpose of React context?

**Answer:**
React context is used to share data between components without having to explicitly pass props through every level of the component tree. It provides a way to pass data through the component tree without having to pass props down manually at every level. Context is particularly useful for global data such as user authentication, theme, or language preferences.

### Question 86: Explain the concept of React portals.

**Answer:**
React portals provide a way to render children into a DOM node that exists outside of the normal DOM hierarchy of the parent component. Portals are useful for scenarios such as modals, tooltips, or other UI elements that need to be rendered outside of the normal DOM flow.

### Question 87: What are the differences between shallow rendering and full rendering in React testing?

**Answer:**

- Shallow rendering: Shallow rendering renders only the top-level component without rendering its children. It is useful for isolating the component being tested and focusing on its behavior without worrying about the behavior of its children.
- Full rendering: Full rendering renders the entire component tree, including all of its children. It is useful for testing the behavior of the component and its children together.

### Question 88: What is the purpose of React.memo()?

**Answer:**
React.memo() is a higher-order component (HOC) that memoizes the result of a component rendering. It is similar to React.PureComponent for class components. React.memo() improves performance by preventing unnecessary re-renders of functional components when their props have not changed.

### Question 89: How do you optimize performance in React applications?

**Answer:**
Performance optimization in React applications can be achieved using techniques such as:

- Memoization: Memoizing expensive computations or data fetching results to prevent unnecessary re-computation.
- Code splitting: Splitting the application code into smaller chunks and loading them asynchronously to reduce initial load time.
- Virtualization: Using techniques like windowing or pagination to render only the elements that are currently visible on the screen.
- Optimizing renders: Avoiding unnecessary re-renders by using PureComponent, memoization, or shouldComponentUpdate in class components.

### Question 90: What are React hooks rules and best practices?

**Answer:**
Some rules and best practices for using React hooks include:

- Only call hooks at the top level of functional components or custom hooks.
- Only call hooks from React function components or custom hooks, not regular JavaScript functions.
- Name custom hooks with the prefix "use" to indicate that they are hooks.
- Keep hooks simple and focused on a single concern to make them reusable and easier to understand.

### Question 91: What is the purpose of the `useReducer` hook in React?

**Answer:**
The `useReducer` hook is used to manage complex state logic in React components. It is an alternative to `useState` that allows you to update state based on the previous state and action objects. `useReducer` is useful for managing state that involves multiple sub-values or when the next state depends on the previous one.

### Question 92: Explain the concept of code splitting in React applications.

**Answer:**
Code splitting is a technique used to improve the performance and loading time of React applications by splitting the bundle into smaller chunks. With code splitting, you can dynamically load only the necessary JavaScript code for the current route or component, reducing the initial bundle size and improving load times.

### Question 93: What are React error boundaries?

**Answer:**
React error boundaries are components that catch JavaScript errors anywhere in their child component tree and display a fallback UI instead of crashing the entire application. Error boundaries are used to gracefully handle errors and prevent them from propagating up to higher-level components.

### Question 94: How do you handle routing in React applications?

**Answer:**
Routing in React applications can be handled using libraries like React Router. React Router provides a declarative way to define routing in your application, allowing you to map URL paths to specific components and manage navigation between different views in a single-page application.

### Question 95: What is server-side rendering (SSR) in React? How does it differ from client-side rendering?

**Answer:**
Server-side rendering (SSR) is the process of rendering React components on the server and sending the generated HTML to the client, where it is hydrated into a fully interactive application. SSR improves performance and SEO by delivering fully rendered pages to the client, whereas client-side rendering (CSR) renders components in the browser using JavaScript after the initial HTML has been loaded.

### Question 96: Explain the concept of lazy loading in React.

**Answer:**
Lazy loading is a technique used to defer the loading of non-essential resources until they are needed. In React, lazy loading is commonly used with React Suspense and React.lazy to dynamically import components or data only when they are required, reducing the initial bundle size and improving performance.

### Question 97: What are React context providers and consumers?

**Answer:**
React context providers and consumers are components used to share data between components without having to pass props manually through every level of the component tree. Context providers wrap a part of the component tree and provide a value that can be accessed by any nested consumer component.

### Question 98: How do you handle forms with validation in React?

**Answer:**
Forms with validation in React can be handled by using controlled components and libraries like Formik or Yup. Controlled components allow you to manage form state and validation logic using React state, while libraries like Formik provide a simpler and more declarative way to handle form validation, submission, and error handling.

### Question 99: What are React fragments?

**Answer:**
React fragments are a lightweight syntax for grouping multiple elements without adding extra nodes to the DOM. Fragments allow you to return multiple elements from a component's render method without wrapping them in a container div or other element, improving code readability and reducing unnecessary DOM nodes.

### Question 100: How do you test React components?

**Answer:**
React components can be tested using tools like Jest and React Testing Library. Jest is a JavaScript testing framework that provides utilities for testing React components, while React Testing Library is a testing utility specifically designed for testing React components in a way that simulates user interactions and ensures that the components behave as expected.

---

This README provides insights into various advanced HTML,CSS,JS,REACT concepts and can be used as a reference for interview preparation or self-study.

```

```
