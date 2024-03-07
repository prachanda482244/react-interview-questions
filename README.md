# Welcome to My Tech Interview Preparation Repository

This repository contains a comprehensive collection of interview questions for various technologies including HTML, CSS, JavaScript, React, TypeScript, Express, and Node.js. We aim to provide over 1000 questions to help you prepare thoroughly for your technical interviews.

## Table of Contents

| Tech(Language) | No. of Questions |
| -------------- | ---------------- |
| HTML           | 30               |
| CSS            | 20               |

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

````css
:root {
  --primary-color: #007bff;
}

.element {
  color: var(--primary-color);
}

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
### Question 50: What is the purpose of the `z-index` property in CSS?

**Answer:**
The `z-index` property specifies the stacking order of positioned elements along the z-axis (depth) of the stacking context. Elements with a higher `z-index` value will be displayed in front of elements with a lower `z-index` value.

---

This README provides insights into various advanced HTML concepts and can be used as a reference for interview preparation or self-study.
````
