# React Component Composition and Forms

## Agenda

* Data Flow
* Components
  * Container Components
  * Presentational Components
* List
* Children Property
* Controlled Components
* Abstract Form Handler

## Resources

* [Lists and Keys](https://reactjs.org/docs/lists-and-keys.html)
* [Forms](https://reactjs.org/docs/forms.html)

## Data Down

In React data is passed from parent component to children components.
This means that children cannot update a parents data. It also means
that siblings cannot share data unless that data is owned by a common
parent.

```js
import React from 'react';
import PropTypes from 'prop-types'

function DisplayCount({ count }) {
  return <h1>{count}</h1>
}

DisplayCount.propTypes = {
  count: PropTypes.number.isRequired
};

export default DisplayCount;
```

```js
import React, { PureComponent } from 'react';
import DisplayCount from './DisplayCount';

export default class Count extends PureComponent {
  state = {
    count: 0
  }

  render() {
    return (
      <DisplayCount count={this.state.count} />
    )
  }
}
```

## Events Up

In order to update data a child component can emit an event. These
events are handled by the parent component who is responsible for
updating its state.

```js
import React from 'react';
import PropTypes from 'prop-types'

function DisplayCount({ count }) {
  return <h1>{count}</h1>
}

DisplayCount.propTypes = {
  count: PropTypes.number.isRequired
};

export default DisplayCount;
```

```js
import React from 'react';
import PropTypes from 'prop-types'

function IncrementCount({ incrementCount }) {
  return <button onClick={incrementCount}></button>
}

IncrementCount.propTypes = {
  incrementCount: PropTypes.func.isRequired
};

export default IncrementCount;
```

```js
import React, { PureComponent } from 'react';
import IncrementCount from './IncrementCount'
import DisplayCount from './DisplayCount';

export default class Count extends PureComponent {
  state = {
    count: 0
  }

  incrementCountHandler = () => {
    this.setState(state => ({ count: state.count + 1 }))
  }

  render() {
    return (
      <>
        <IncrementCount incrementCount={this.incrementCountHandler} />
        <DisplayCount count={this.state.count} />
      </>
    )
  }
}
```

## Components

### Container Components

As a rule of thumb, container components are stateful (class)
components which deal how things work.

### Presentational Components

As a rule of thumb, presentational components are stateless
functional components which deal with how things look.

## Lists

Often lists are created by mapping through an array of items.
For each item in the array we return an element that will form
the list.

```js
import React from 'react';
import PropTypes from 'prop-types';
import Dog from './Dog';

function Dogs({ dogs }) {
  const dogList = dogs.map(({ name, age, weight }) => (
    <li>
      <Dog name={name} age={age} weight={weight} />
    </li>
  ));

  return (
    <ul>
      {dogList}
    </ul>
  )
}

Dogs.propTypes = {
  dogs: PropTypes.array.isRequired
};

export default Dogs;
```

### Keys

Keys are used internally by React to manage our list of items.
They let React identify which items have changed, been added,
or been removed, and prevent unnecessary re-rendering. Keys
should be a unique string in the list.

```js
import React from 'react';
import PropTypes from 'prop-types';
import Dog from './Dog';

function Dogs({ dogs }) {
  const dogList = dogs.map(({ name, age, weight }) => (
    <li key={`${name}-${age}-${weight}`}>
      <Dog name={name} age={age} weight={weight} />
    </li>
  ));

  return (
    <ul>
      {dogList}
    </ul>
  )
}

Dogs.propTypes = {
  dogs: PropTypes.array.isRequired
};

export default Dogs;
```

## Children Property

A component, like vanilla HTML, can have children.

```html
<div id="parent">
  <p class="child"></p>
  <p class="child"></p>
  <p class="child"></p>
</div>
```

```js
<Parent>
  <p>Every</p>
  <p>Thing</p>
  <p>Is</p>
  <p>Fine</p>
</Parent>
```

These children are passed to a component via the `children` prop.
(NOTE: children is a `PropTypes.node`).

```js
import React from 'react';
import PropTypes from 'prop-types';

function Parent({ children }) {
  return (
    <>
      {children}
    </>
  );
}

Parent.propTypes = {
  children: PropTypes.node
};

export default Parent;
```

## Controlled Components

Form elements have internal state which is typically updated
based on user input. In React, we have a particular way to manage
state. Because of this we typically control form element state.
This means that the values inside of a form element (like an `input')
gets its value from our React state. These types of components are
called "Controlled Components".

```js
import React, { PureComponent } from 'react';

export default class CreateDog extends PureComponent {
  state = {
    name: '',
    age: 0,
    weight: ''
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  }

  handleNameChange = ({ target }) => {
    this.setState({ name: target.value });
  }

  handleAgeChange = ({ target }) => {
    this.setState({ age: target.value });
  }

  handleWeightChange = ({ target }) => {
    this.setState({ weight: target.value });
  }

  render() {
    const {
      name,
      age,
      weight
    } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input name="name" value={name} onChange={this.handleNameChange} />
        <input name="age" value={age} onChange={this.handleAgeChange} />
        <input name="weight" value={weight} onChange={this.handleWeightChange} />
        <button>Create Dog</button>
      </form>
    )
  }
}
```

## Abstract Form Handler

All three form handlers (handleNameChange, handleAgeChange, handleWeightChange)
above have a similar structure.

```js
handleTHE_NAME_OF_THE_FIELDChange = ({ target }) => {
  this.setState({ THE_NAME_OF_THE_FIELD: target.value })
}
```

Based on this, we can make a single handler that can handle all three fields.

```js
handleChange = ({ target }) => {
  this.setState({ [target.name]: target.value })
}
```

```js
import React, { PureComponent } from 'react';

export default class CreateDog extends PureComponent {
  state = {
    dogName: '',
    age: 0,
    weight: ''
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const {
      name,
      age,
      weight
    } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input name="dogName" value={name} onChange={this.handleChange} />
        <input name="age" value={age} onChange={this.handleChange} />
        <input name="weight" value={weight} onChange={this.handleChange} />
        <button>Create Dog</button>
      </form>
    )
  }
}
```
