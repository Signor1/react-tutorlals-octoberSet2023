# Introduction to React

## What is React?

React is an open-source library for building user interfaces. It's not a framework but rather a JavaScript library with a rich ecosystem.

## Why Learn React?

- React is maintained by Facebook and has over 100k stars on GitHub, making it a part of a huge community.
- It's one of the most highly demanded skill sets for Frontend Developers.
- React features a component-based architecture that promotes reusability.
- React is declarative, allowing you to build the exact UI you want.
- It gracefully handles DOM updates.
- React can be integrated into any application.

## Prerequisites

- HTML, CSS, and JavaScript fundamentals
- Knowledge of ES6, including concepts like arrow functions, let & const, template literals, object literals, rest & spread operators, and destructuring arguments.

## Folder Structure

- `node_modules` folder: Contains all dependencies
- `public` folder: Includes `index.html`, icons, and `manifest.json`
- `src` folder: Where you build your components and store asset files, containing essential files like `index.js` and `App.js`.

## Components

Components describe a part of the user interface. They are reusable and can be nested inside other components. There are two types of components:

- Functional components (using JavaScript functions)
- Class components (using JavaScript class-based approach)

## JSX

JSX, or JavaScript XML, is an extension of JavaScript's syntax for writing XML-like code for elements and components. It simplifies React code and transpiles to JavaScript understood by browsers. It's important to note attribute name differences like 'class' becoming 'className,' 'for' becoming 'htmlFor,' and camelCase event naming like 'onClick' instead of 'onclick.'

## Props

Props are optional inputs that components can accept, allowing them to be dynamic.

## States and setState

State is data maintained within a component, influencing what's rendered in the browser. State can be changed within the component using `setState`. It's crucial to avoid modifying the state directly and to use a callback function for post-update code execution or when updating based on previous state values.

## Event

React events are named using camelCase, and you can pass functions as event handlers.

## Styling React Components

Three basic methods for styling React components:

- CSS stylesheets
- Inline Styling
- CSS Modules
- CSS-in-JS Libraries (Styled Components)

## React Hooks Introduction

Hooks are a feature introduced in React v16.8 that allow you to use React features without writing class components. Hooks avoid the issues related to class components, like the use of `this` and hot reloading unreliability. They help in sharing and reusing stateful logic in a better way.

## Rules of Hooks

- Call hooks only at the top level.
- Avoid calling hooks inside loops, conditions, or nested functions.
- Use hooks only from React functions.

## useState Hook

The `useState` hook adds state to functional components, and it can be used with any data type.

## useEffect Hook

The `useEffect` hook performs side effects in functional components, like fetching data or managing subscriptions. It replaces `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` lifecycle methods.

## Context

Context API provides a way to pass data through the component tree without manually passing props at every level.

## useContext Hook

The `useContext` hook simplifies consuming context values, making it more readable.

## useReducer Hook

The `useReducer` hook is used for state management in React. It's best for managing objects or arrays and is used when there are multiple state transitions.

## useCallback Hook

The `useCallback` hook returns a memoized version of a callback function and is useful when passing callbacks to optimized child components.

## useMemo Hook

The `useMemo` hook re-computes the cached value when its dependencies change, preventing unnecessary calculations.

## useRef Hook

The `useRef` hook allows access to DOM nodes in functional components.

## Custom Hook

A custom hook is a JavaScript function whose name starts with "use." It can call other hooks and is used to share logic between components.


