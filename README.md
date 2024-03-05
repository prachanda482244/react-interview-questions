# Welcome to My Tech Interview Preparation Repository

This repository contains a comprehensive collection of interview questions for various technologies including HTML, CSS, JavaScript, React, TypeScript, Express, and Node.js. We aim to provide over 1000 questions to help you prepare thoroughly for your technical interviews.

## Table of Contents

| Tech(Language) | No. of Questions |
| -------------- | ---------------- |
| HTML           | 30               |

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

---

This README provides insights into various advanced HTML concepts and can be used as a reference for interview preparation or self-study.
