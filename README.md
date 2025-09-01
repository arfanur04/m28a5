# Question and Answer

##

## *Q-1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?*

### `Answer`: When working with the DOM, there are multiple ways to select elements. The method getElementById selects a single element by its unique id and always returns only one element or null if it does not exist. The method getElementsByClassName returns a collection of elements that share the same class name. This collection is live and updates automatically if the DOM changes, but it is not an array, so it does not support array methods directly

### On the other hand, querySelector allows selecting the first element that matches a CSS selector, which means you can target ids, classes, attributes, or even nested selectors with the same flexibility as CSS. If you want to select multiple elements using a CSS selector, querySelectorAll is used, which returns a NodeList that is static and easier to loop through with forEach

## *Q-2. How do you create and insert a new element into the DOM?*

### `Answer`: To create and insert a new element into the DOM, you first use document.createElement with the desired tag name. After creating it, you can add content or attributes using properties like innerText, className, or setAttribute. Finally, you insert the element into the DOM using methods such as appendChild to place it at the end of a parent

## *Q-3. What is Event Bubbling and how does it work?*

### `Answer`: Event bubbling is a behavior in which an event triggered on a child element propagates up through its parent elements in the DOM tree. This means that when an event occurs on a child element, it is also triggered on its parent elements, and so on, until it reaches the topmost element in the tree

## *Q-4. What is Event Delegation in JavaScript? Why is it useful?*

### `Answer`: Event delegation is a technique in JavaScript where you attach an event listener to a parent element and use that listener to handle events on its child elements. This is useful when you have a dynamic list of elements that may change over time, such as a list of items that can be added or removed

## *Q-5. What is the difference between preventDefault() and stopPropagation() methods?*

### `Answer`: The method preventDefault stops the default action of an element, like stopping a form from submitting or a link from navigating. stopPropagation prevents the event from bubbling to parent elements. Often, both are used together when you want to block the default behavior and stop the event from affecting other elements
