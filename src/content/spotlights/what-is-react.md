---
authors:
  - "Riday 💙#7468"
  - "Daniell#4062"
created_at: "2022/01/08"
title: What is React?
---

## What is React.js?

- From the official definition - "React is a declarative, efficient, and flexible JavaScript library used for building User Interfaces."
- It is an open-source project by Facebook.
- It is an extensive library that's not exclusive to the web. There are many possibilities like React Native to build mobile apps, React 360 to make virtual reality apps, etc.

## why should I use React.js?

The primary goals of React are to reduce the bugs that occur when we develop UIs, improve the developer experience, and provide flexibility. It does all this by using:

- Declarative views
- Component-Based Architecture
- JSX Syntax
- Developer Flexibility
- Native Typescript Support (or prop-types for Javascript users)
- Virtual DOM

### Declarative Views

React makes it effortless to create interactive UIs. It is the view layer of the MVC - Model View Controller. You write simple views for each state in your application. React will automatically update and render just the right components whenever your data changes. Declarative views make your code more predictable, simpler to understand, and easier to debug.

### Component-Based Architecture

Components are one of the most important aspects of React. They are small, reusable pieces of HTML / JSX (more on this) code that make a part of the user interface. Components are distinct pieces of code that provide some functionality or are logical sections. You can have many components within a component.

[More about components here](https://reactjs.org/docs/components-and-props.html)

### JSX Syntax:

JSX is a syntax extension of JavaScript. It is similar to a template language, but it has the full power of JavaScript. It is HTML/XML-based with embedded JavaScript. JSX isn't compulsory, but it makes things easier for the developer. Here's an example:

**JSX Syntax**

```js
...
function formatName({ firstName, lastName }) {
    return `${firstName} ${lastName}`;
}
const user = {
    firstName: 'Carol',
    lastName: 'Danvers'
};
const Component = () => <h1>Hello {formatName(user)}</h1>;
...
```

**Non-JSX Syntax**

```js
...
function formatName({ firstName, lastName }) {
    return `${firstName} ${lastName}`;
}
const user = {
    firstName: 'Carol',
    lastName: 'Danvers'
};
const Component = () => {
    return React.createElement(
        'h1',
        null,
        'Hello ',
        formatName(user)
    );
};
...
```

As you can see above, JSX makes your life so much easier.

[More on JSX here](https://reactjs.org/docs/introducing-jsx.html)
[JSX in-depth](https://reactjs.org/docs/jsx-in-depth.html)

### Developer Flexibility

React follows the motto of "Learn once, write anywhere." It means that React does not make assumptions about the technologies you use. You can easily mix and match it with different technologies.

While developing, React gives you the flexibility of using either ES6-based classes or the new functional components (that use something called hooks to interact with the React API).

### Functional components

```js
function Component() {
  return <h1>Hello React!</h1>;
}
```

or

```js
const Component = () => <h1>Hello React!</h1>;
```

### ES6-based class components

```js
class Component extends React.Component {
  render() {
    return <h1>Hello React!</h1>;
  }
}
```

### Type-checking with PropTypes

As the size of your app grows, you can save a lot of time by catching bugs with the help of prop-types. You can always use Javascript extensions like Flow or Typescript, but even if you don't use those, React has built-in support for type-checking using prop-types. Here's an example:

```js
import PropTypes from "prop-types";

class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

Greeting.propTypes = {
  name: PropTypes.string,
};
```

[For more information, you can refer to the docs](https://reactjs.org/docs/typechecking-with-proptypes.html)

### Native Typescript Support

The Typescript compiler has native support for JSX, which provides a better way to assign types than compared to prop-types. You just need to enable JSX in your tsconfig.json.

### Virtual DOM

React uses something called a "Virtual DOM". Virtual DOM is a programming concept where an ideal, or "virtual", representation of a UI is kept in memory and synced with the "real" DOM by a library such as react-dom. This process is called reconciliation. This approach enables the declarative API of React - you tell React what state you want the UI to be in, and it makes sure the DOM matches that state. This abstracts out the attribute manipulation, event handling, and manual DOM updating that you would otherwise have to use to build your app.

- [More on Virtual DOM](https://reactjs.org/docs/faq-internals.html)
- [More on Reconciliation](https://reactjs.org/docs/reconciliation.html)

## Okay, this sounds great! So, how do I get started with React?

React offers a CDN service that allows you to quickly import React to your existing website, but you cannot use the JSX syntax with it. For JSX, the easiest way to get started is by using create-react-app. It is a comfortable environment for React, which comes pre-configured with everything we need in a React app. There are a lot of things happening under the hood, even in the simplest of the apps. First, we will cover how to use create-react-app (CRA) to get started. Later on, we will learn how it all works.

Before starting, you will need to have Node.js and npm installed globally on your computer. Open a terminal in your projects folder and use this command:

`npx create-react-app my-app`

It will automatically create a new folder called my-app and will process a few things. The npx there is not a typo — it's an executable version of npm that can run command-line apps without downloading them first. After a few minutes of processing, you should have a new folder called my-app with a few starter files. JSX is a special syntax that all browsers cannot interpret. To solve this, we use a compiler. CRA uses a popular compiler called babel. Webpack is a bundler that bundles our code into chunks to improve our app performance. CRA handles the babel and webpack configuration for our React apps. If you want to use a different compiler or bundler, use your custom configuration without CRA.

**For Typescript Users:**

`npx create-react-app my-app --template typescript`

For more customization options, visit the [create react app website](https://create-react-app.dev/).

Although CRA is a good choice for beginners, there may be a better choice for you depending on the type of your project:

- For single-page apps (SPA) or basic React projects, use CRA.
- For a static, content-oriented website, use [Gatsby](https://www.gatsbyjs.org/).
- For a server-rendered website with Node.js, use [Next.js](https://nextjs.org/). Next.js supports Server-Side Rendering (SSR), Static Site Generation (SSG), or hybrid static and server-side rendering.

### Props

Data in React is handled and managed by the state and props of a component. Every react component accepts arbitrary inputs called "props" (short for properties). React props are comparable to HTML attributes. While HTML elements have attributes, React components have props. You can pass data from a parent component to a child component using properties.

### Functional components

```js
...
function Child(props) {
    return <span>Hello {props.name}!</span>
}

function Parent() {
    return <Child name='Claire' />
}
...
```

### Class components

```js
...
class Child extends React.Component {
    render() {
        return <span>Hello {this.props.name}</span>
    }
}

class Parent extends React.Component {
    render() {
        return <Child name='Claire' />
    }
}
...
```

From the examples above, you may have guessed it, but the data flow is unidirectional. You can only pass props data from the parent to child, not the other way around. Props of a component are read-only and should not be changed. React has a strict rule — "All React components must act like pure functions with respect to their props."
React also offers a special Context API that allows you to pass data through the component tree without having to pass props down manually at every level.
For more information about this context API [check out the docs](https://reactjs.org/docs/context.html)
[This is a nice guide on this context API](https://tania.dev/react-context-api-hooks/)

React has a special prop called children, for JSX elements that contain both an opening and a closing tag. This prop is used to pass the content between those tags.
For more on children, refer to [the react docs](https://reactjs.org/docs/jsx-in-depth.html#children-in-jsx)

### State

All React components have their states. The state of a component is like its props, but it is private and fully controlled by the component. For functional components, you need to use the useState hook to manage the state. Whenever the state of the component changes, the entire component re-renders. For example:

**Class components**

```js
...
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '' };
    }
    render() {
        return (
            <main>
                <input type='text' onChange={e => this.setState({name: e.target.value})} />
                <h1>Hello {this.state.name}!</h1>
            </main>
        )
    }
}
...
```

You should not change the state of a component directly. Use setState instead.

**Functional components**

```js
...
import React, { useState } from 'react';

function MyComponent() {
    const [name, setName] = useState('');
    return (
        <main>
            <input type='text' onChange={e => setName(e.target.value)} />
            <h1>Hello {name}!</h1>
        </main>
    );
}
...
```

When using hooks, you need to use the second element of the array to set the value of the state.

### Component Lifecycle

In React, the state of a component can control its lifecycle. Whenever the state changes, the component will re-render with the new updates. In the example above, name is a state of MyComponent. Every time you type in something, the component re-renders to update the greeting. To make complex web applications, you will often need to add complex logic to your components. To do this, we use the lifecycle methods. There are many lifecycle methods — componentDidMount, componentWillUnmount, componentDidUpdate, etc. These methods will run code whenever a state change triggers component-rerendering.

**componentDidMount**
This method is invoked immediately after a component is mounted or inserted into the DOM tree. If you need to load data from a remote endpoint or set up any subscriptions, this would be a great place to do that.

```js
class MyComponent extends React.Component {
    ...
    componentDidMount() {
        console.log('Component has mounted!');
    }
    ...
}
```

This method is only available for class components. If you are using functional components, then multiple lifecycle methods are compressed into one hook. I will get back to this later.

**componentWillUnmount**
This method is invoked immediately before a component is unmounted and destroyed. If you had set up subscriptions or timers, this would be a great place to cancel those.

```js
class MyComponent extends React.Component {
    ...
    componentWillUnmount() {
        console.log('Component will unmount.');
    }
    ...
}
```

**componentDidUpdate**
This method is invoked immediately after a component re-renders due to updates. This method does not invoke during the initial render.

```js
class MyComponent extends React.Component {
    ...
    componentDidUpdate() {
        console.log('Component has updated.');
    }
    ...
}
```

[Learn more about lifecycle methods](https://reactjs.org/docs/react-component.html#the-component-lifecycle)

### Alternative for Functional Components

React provides a useEffect hook to implement the above lifecycle methods in functional components. Here's how to use it:

```js
...
import React, { useEffect } from 'react';

function MyComponent() {
    useEffect(() => {
        // Logic for componentDidMount here.
        return () => {
            // Logic for componentWillUnmount here.
        }
    }, []); // Array of dependencies to implement componentDidUpdate
    ...
}
...
```

As you can see above, this new hook is not an exact migration — there are some changes. Firstly, there are no individual sections that separate componentDidMount and componentDidUpdate (unless you make them). Next, you see that there is a callback function to the callback function inside the hook. The function returned by the main callback function contains the logic for componentWillUnmount.

[Learn more about the useEffect hook](https://reactjs.org/docs/hooks-reference.html#useeffect)
[Learn more about how classes convert to hooks](https://reactjs.org/docs/hooks-faq.html#from-classes-to-hooks)

## Styling in React

There are many different ways to add styling to React apps. Below are some of the most common ones:
• CSS Files
• CSS-in-JS
• CSS-in-JS Libraries (styled-components, emotion, etc).
• UI Libraries
• CSS Frameworks

### CSS Files

Assuming that you have basic HTML, CSS, and JavaScript knowledge, this is the easiest and the most intuitive way to add styling to a React app. If you're using CRA, import the CSS file at the top of your React component and add the classes to your elements.

```js
import "./styles.css";

const MyReactComponent = () => (
  <main className="my-styled-class">Hello World!</main>
);
```

If you are using a custom setup, you may have to change some settings before using CSS files, as shown above.

### CSS-in-JS

React uses a different inline CSS format called CSS-in-JS, where you add your styles in JavaScript. Here's is an example of CSS-in-JS.

```js
const Button = () => (
  <button style={{ backgroundColor: "blue", padding: "10px 5px" }}>
    Click Me!
  </button>
);
```

As you can see above, there is a JavaScript object inside the style attribute.

### CSS-in-JS Libraries

There are tons of CSS-in-JS libraries. Two of the most common ones are:
• styled-components
• emotion

### Styled Components

A CSS-in-JS library where you make components for every element. You can add it to your project using npm. Example:

```js
import styled from "styled-components";

const Button = styled.button`
  background-color: blue;
  padding: 10px 5px;
`;

const MyComponent = () => (
  <div>
    <Button>Click Me!</Button>
  </div>
);
```

The Button component above will have all the properties and attributes of a standard button element along with all the styles you applied to it. There are a lot more possibilities. Learn more about styled-components on their [official website](https://styled-components.com/).

### Emotion

Emotion is another CSS-in-JS library. What sets it apart is that it comes in many different "flavors" or packages. @emotion/css is the standard one. Example:

```js
import { css } from "@emotion/css";

const MyComponent = () => (
  <button
    className={css`
      padding: 10px;
      background-color: blue;
      color: white;
      &:hover {
        color: black;
      }
    `}
  >
    Click Me!
  </button>
);
```

Here, you apply all the CSS styles within the className attribute of the element. This example is just one bit of all the gigabytes of possibilities with this library. Learn more about emotion on their [official website](https://emotion.sh/)

## UI Libraries

There are hundreds of different UI libraries available on the internet. UI libraries are usually a part of the company's or the project's design system. They provide ready-made components that you can use in your project. Most UI libraries allow you to tweak their offerings according to your project needs. Here are a few popular UI libraries:

- [Material Design](https://material-ui.com/)
- [Ant Design](https://ant.design/)
- [Semantic UI](https://semantic-ui.com/)
- [Fluent UI](https://developer.microsoft.com/en-us/fluentui#/get-started/web)
- [Chakra UI](https://chakra-ui.com/)
  And the list of UI libraries goes on and on.

## CSS Frameworks

CSS Frameworks provide you with ready-made classes. Depending on the framework you use, these classes contain different utility functions, UI components, etc. You can easily apply classes from the selected framework to your elements. Here are a few popular CSS frameworks:

- [TailwindCSS](https://tailwindcss.com/)
- [Bootstrap](https://getbootstrap.com/)
- [Foundation](https://get.foundation/)
- [Bulma](https://bulma.io/)
  Some CSS frameworks like Bootstrap or TailwindCSS also have their UI libraries that you can use in your project.
