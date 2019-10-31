# React Events and State

## Agenda

* Event Handlers
* Class Components
* Component State
* Component Lifecycle
  * `componentDidMount`
  * `componentWillUnmount`
  * `componentDidUpdate`

## Resources

* [Handling Events](https://reactjs.org/docs/handling-events.html)
* [State an Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)
* [Lifecycle Diagram](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

## Event Handlers

Often on a webpage we want to be able to respond to events. In vanilla
JavaScript we can add event handlers to elements:

```js
document
  .getElementById('button')
  .addEventListener('click', event => {
    console.log('clicked');
  });
```

### Props can be data or functions

In javascript, we can pass functions around like variables.
We've been doing this all along.

When this renders ...
* Foo will draw Bar
* Bar will draw a button
* When that button gets clicked, it's `onClick` action fires
  * That action runs the function `handleClick`
  * That method runs in `<Foo>` ... `<Foo>` passed it
    down to `<Bar>` essentially telling it what it wants it to do.
* This is a means of passing not only **Data** but **Behavior**
  down the component tree

```js
const Bar = ({ handleClick }) => (
  <button onClick={handleClick}>Click</button>
);

const Foo = () => {
  const screamLoud = () => console.log('AHHHHHHH');
  return (
    <Bar handleClick={screamLoud} />
  );
};
```

## Class Components

In addition to functional components, we can also define
components as a class. By defining a component as a class
we have a few added capabilities.

```js
import React, { Component } from 'react';

export default class Dog extends Component {
  render() {
    return (
      <dl>
        <dt>Name</dt>
        <dd>{this.props.name}</dd>

        <dt>Age</dt>
        <dd>{this.props.age}</dd>

        <dt>Weight</dt>
        <dd>{this.props.weight}</dd>
      </dl>
    );
  }
}
```

A class component's properties are accessible with `this.props`.

Class components are often called stateful components, smart components,
or containers. Functional components are often called stateless components,
dumb components, or presentational components.

### Prop Types

Like functional components it is nice to provide PropTypes to our class
components

```js
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Dog extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    weight: PropTypes.string.isRequired
  }

  render() {
    return (
      <dl>
        <dt>Name</dt>
        <dd>{this.props.name}</dd>

        <dt>Age</dt>
        <dd>{this.props.age}</dd>

        <dt>Weight</dt>
        <dd>{this.props.weight}</dd>
      </dl>
    );
  }
}
```

### Class Component Event Handlers

```js
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired
  }

  clickHandler = event => {
    console.log('clicked');
  }

  render() {
    return (
      <button onClick={this.clickHandler}>{this.props.title}</title>
    );
  }
}
```

## Component State

Components can define state inside of the class body.
State can be accessed using `this.state`

```js
import React, { Component } from 'react'

export default class Dog extends Component {
  state = {
    name: 'spot',
    weight: '20 lbs',
    age: 5
  }

  render() {
    const { name, age, weight } = this.state;
    return (
      <dl>
        <dt>Name</dt>
        <dd>{name}</dd>

        <dt>Age</dt>
        <dd>{age}</dd>

        <dt>Weight</dt>
        <dd>{weight}</dd>
      </dl>
    )
  }
}
```

Unlike properties state can be updated using `this.setState`

```js
import React, { PureComponent } from 'react'

export default class Dog extends PureComponent {
  state = {
    name: 'spot',
    weight: '20 lbs',
    age: 5
  }

  handleClick = () => {
    this.setState({ age: 6 }, () => {
      // after age has updated
    });
    // that assumes age has changed

  }

  render() {
    return (
      <>
        <button onClick={this.handleClick}>Update Age</button>
        <dl>
          <dt>Name</dt>
          <dd>{this.state.name}</dd>

          <dt>Age</dt>
          <dd>{this.state.age}</dd>

          <dt>Weight</dt>
          <dd>{this.state.weight}</dd>
        </dl>
      </>
    )
  }
}
```

If your state change relies on existing state you should provide
a function to `this.setState`

```js
import React, { PureComponent } from 'react'

export default class Dog extends PureComponent {
  state = {
    name: 'spot',
    weight: '20 lbs',
    age: 5
  }

  handleClick = () => {
    // this.setState({ age: this.state.age + 1 })
    this.setState(state => {
      return {
        age: state.age + 1
      }
    });
  }

  render() {
    return (
      <>
        <button onClick={this.handleClick}>Update Age</button>
        <dl>
          <dt>Name</dt>
          <dd>{this.state.name}</dd>

          <dt>Age</dt>
          <dd>{this.state.age}</dd>

          <dt>Weight</dt>
          <dd>{this.state.weight}</dd>
        </dl>
      </>
    )
  }
}
```

### Forms and Inputs

React form elements maintain internal state. Think of React inputs as stateful child components. This means that we must manage the state of inputs through our own stateful component and one way data binding. The creation of a parent component (which we'll refer to as _form-container_), manages the state for all child components of the form and passes any necessary state down into it's inputs through the use of `props`. Each input has an `onChange` event that we can handle and use to update our _form-container's_ state each time the user interacts with an input.

## Component Lifecycle

Components have a life. They come into existence (mount),
get updated, and get destroyed (unmount). You can hook into
these lifecycle events by defining instance methods on your
component class.

Method | Description
------ | -----------
`componentDidMount` | The component has rendered to the DOM
`componentWillUnmount` | The component has been removed from the DOM
`componentDidUpdate` | The components state or props have changed

```js
import React, { PureComponent } from 'react'

export default class Dog extends PureComponent {
  state = {
    name: 'spot',
    weight: '20 lbs',
    age: 5
  }

  componentDidMount() {
    console.log('Mounted');
  }

  componentDidUpdate() {
    console.log('Updated');
  }

  componentWillUnmount() {
    console.log('Unmounted');
  }

  handleClick = () => {
    this.setState(state => {
      return {
        age: state.age + 1
      }
    });
  }

  render() {
    return (
      <>
        <button onClick={this.handleClick}>Update Age</button>
        <dl>
          <dt>Name</dt>
          <dd>{this.state.name}</dd>

          <dt>Age</dt>
          <dd>{this.state.age}</dd>

          <dt>Weight</dt>
          <dd>{this.state.weight}</dd>
        </dl>
      </>
    )
  }
}
```

### One Way Data flow

State can only be passed from parent component to a child component through the use of `props`. This enforces the idea of one way data flow. One way data flow is a way of describing that state can only be passed down the component tree (not up). If a child wants to pass some data to a parent, the parent can pass a function to the child through `props` and the child may invoke that function and pass it data for the parent to manage.
