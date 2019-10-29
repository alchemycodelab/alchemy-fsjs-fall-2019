# Review - Webpack - React

## Agenda

*  Promises
  * states
    * `pending`
    * `fulfilled`
    * `rejected`
  * Static Methods
    * `race`
    * `all`
    * `resolve`
    * `reject`
  * Instance methods
    * `then`
    * `catch`
* Single Page Apps (SPA)
  * One HTML file
  * Changes to the view are handled by JavaScript
* Bundling with Webpack
* React
  * Components
    * modular reusable views
  * JSX
  * Rendering elements
  * Testing

## Promises

A promise (or a thenable) is a way to handle asynchronous actions. It is a
promise to do some action or send some data at some future time.

Other languages may use the word future, delay, or deferred for concepts similar
to JavaScript promises.

### States

* `pending` - initial state of a promise
* `fulfilled` - promise successfully resolved
* `rejected` - promise completed with failure

### Instance methods

All three instance methods return a promise. This allows them to be chained.

* `then` - takes a callback that will get invoked on a fulfilled promise
* `catch` - takes a callback that will get invoked on a rejected promise
* `finally` - takes a callback that will get invoked when a promise finishes

#### then

The `then` method has two parameters: `onFulfilled` and `onRejected`.
In practice , usually only the `onFulfilled` callback is passed to the
`then` method.

The `onFulfilled` callback has one parameter, a fulfilled value.

```js
promise
  .then(fulfilledValue => console.log(fulfilledValue));
```

Multiple `then`s can be chained together, and each then is executed in order.
If the `onFulfilled` callback returns a value, that value will be passed to the
next `then` in the chain. If the `onFulfilled` callback returns a promise,
the next `then` will wait for the promise to fulfill and receive that promise's
fulfilled value.

```js
promise
  .then(fulfilledValue => {
    return 'hi'
  })
  .then(value => console.log(value));
  // -> 'hi'
```

#### catch

The `catch` method is invoked when a promise fails and is rejected. It has one
parameter, a `onRejected` callback. The `onRejected` callback has one parameter,
a `reason` for rejection.

```js
promise
  .then(fulfilledValue => 'hi')
  .catch(reason => console.error(reason));
```

Like `then` `catch` can be chained. However, each `catch` in the chain must
`throw` for the next `catch` in the chain to invoke its `onRejected` callback.

```js
promise
  .then(fulfilledValue => 'hi')
  .catch(reason => {
    throw 'next catch'
  })
  .catch(reason => {
    console.error(reason)
  })
  // -> next catch
  ```

#### finally

The `finally` method takes a callback that will be invoked whether the promise
is fulfilled or rejected.

### Static Methods

* `Promise.all`
* `Promise.race`
* `Promise.resolve`
* `Promise.reject`

#### Promise.all

`Promise.all` takes an array of promises. It returns a promise that fulfills
when each promise in the array fulfills. It rejects if any promise in the array
rejects.

If all promises fulfill, `then` the `onFulfilled` callback is passed an array
where each item is a fulfilled value from the fulfilled promises passed to
`Promise.all` in order.

```js
Promise.all([
  promise1,
  promise2,
  promise3
])
  .then(fulfilledValues => {
    // fulfilledValues[0] is the fulfilled value from promise1
    // fulfilledValues[1] is the fulfilled value from promise2
    // fulfilledValues[2] is the fulfilled value from promise3
  })
```

```js
Promise.all([
  promise1,
  promise2,
  promise3
])
  .then(([fulfilled1, fulfilled2, fulfilled3]) => {
    // ....
  })
```

#### Promise.race

`Promise.race` takes an array of promises. It fulfills or rejects as soon as a
single promise in that array fulfills or rejects.

#### Promise.resolve

`Promise.resolve` has one parameter and returns a promise that fulfills with
the argument passed to it.

```js
Promise.resolve('hi')
  .then(fulfilledValue => console.log(fulfilledValue))
  // -> 'hi'
```

#### Promise.reject

`Promise.reject` has one parameter and returns a promise that rejects with
the argument passed to it.

```js
Promise.reject('hi')
  .catch(fulfilledValue => console.log(fulfilledValue))
  // -> 'hi'
```

## New Dependencies

* `npm i -D webpack webpack-cli`
* `npm i -D webpack-dev-server`
* `npm i -D babel-loader @babel/core @babel/preset-env eslint eslint-plugin-babel babel-eslint`
* `npm i -D style-loader css-loader url-loader file-loader`
* `npm i -D postcss-loader postcss-nested autoprefixer`
* `npm i -D html-webpack-plugin clean-webpack-plugin`
* `npm i -D jest identity-obj-proxy`

## Webpack

Webpack is used to bundle multiple JavaScript files into a single file. Webpack
is configured by creating a `webpack.config.js` file at the root of your project.

```js
// webpack.config.js
// export a configuration object
module.exports = {

};
```

Additionally, we need to add a `build` script to our `package.json`

```js
"build": "webpack -p"
```

### Entry

In order to start bundling JavaScript files you need to provide an entry point.
This acts as the main JavaScript file.

When using the built in JavaScript module system, your entry point is the file
you provide to the `script` tag.

```js
// webpack.config.js
// export a configuration object
module.exports = {
  entry: './src/index.js'
};
```

If not provided, the entry field defaults to `./src/index.js`.

### Output

After Webpack has bundled your JavaScript it needs to output the bundle somewhere.
To specify where the bundle is saved provided an `output` key.

```js
// webpack.config.js
// export a configuration object
module.exports = {
  entry: './src/index.js',
  output: {
    filename: './main.js'
  }
};
```

If not provided, the output field defaults to `./dist/main.js`.

#### Cache

Browsers will often cache files locally. If the browser finds a file in its cache
it will not make a request to get the file. This can cause issues if you've updated
your JavaScript, but the browser continues to load an older version from cache. To
prevent this webpack allows you to make unique filenames as output.

```js
// webpack.config.js
// export a configuration object
module.exports = {
  entry: './src/index.js',
  output: {
    filename: './main.[hash].js'
  }
};
```

Here `[hash]` will be a unique hash creating a unique file name.


### DevServer

During development we can bundle our code and start a development server to view our code
in a browser. To do this we need to setup `webpack-dev-server`

```js
module.exports = {
  entry: './src/index.js',
  output: {
    filename: './main.[hash].js'
  },
  devServer: {
    port: 7890
  }
};
```

Additionally, we need to add a `start` script to our `package.json`

```js
"start": "webpack-dev-server --hot --mode development",
```

### DevTool

Since our JavaScript is bundled together, our error messages stop making sense. Instead of
getting error messages (line numbers and file names) based on our pre-bundled code, errors
are presented based on our bundled code. This makes debugging hard.

To prevent this we can add a source map which maps lines from the bundled file to our
original source files.

```js
"start": "webpack-dev-server --hot --mode development --devtool eval-source-map",
"build": "webpack -p --devtool source-map"
```

### Loaders

Webpack can also run your JavaScript files through loaders, which allows you to transpile
(or transform) your JavaScript.

Loader | Behavior
------ | --------
`babel-loader` | Transpile modern JavaScript into versions compatible with older browsers
`style-loader` | Inject CSS by importing into JavaScript files
`css-loader` | `@import` and `url` are treated like imports
`postcss-loader` | Transpile PostCSS into CSS
`url-loader` | Import files (like images) into JavaScrip. Transforms them into base64 data urls
`file-loader` | Import files into JavaScript.

Loaders are added as `rules`. Each rule takes a `test`, an optional `excludes`, and a `use`
field. `test` is a regular expression that selects the files that should run through the loader.
`excludes` is a regular expression that deselects files that should be skipped by the loader.
`use` is an object with `loader` (the name of the loader to use) and `options` (options to
pass to the loader). Alternatively, `use` can be an array of objects.

```js
module.exports = {
  entry: './src/index.js',
  output: {
    filename: './main.[hash].js'
  },
  devServer: {
    port: 7890
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [
                require('autoprefixer')(),
                require('postcss-nested')()
              ]
            }
          }
        ]
      },
      {
        test: /\.(jpeg|jpg|png|svg)$/,
        use: {
          loader: 'url-loader',
          options: { limit: 1000 },
        },
      }
    ]
  }
};
```

### Plugins

Plugin | Behavior
------ | --------
`html-webpack-plugin` | Inject bundled JavaScript into an HTML template
`clean-webpack-plugin` | Delete old bundle files
`dotenv-webpack` | Import environment from a `.env` file

Plugins allow us to customize the webpack build process. Plugins are added
with a `plugins` field.

```js
const HtmlPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: './main.[hash].js'
  },
  devServer: {
    port: 7890
  },
  plugins: [
    new HtmlPlugin({ template: './src/index.html' }),
    new CleanPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [
                require('autoprefixer')(),
                require('postcss-nested')()
              ]
            }
          }
        ]
      },
      {
        test: /\.(jpeg|jpg|png|svg)$/,
        use: {
          loader: 'url-loader',
          options: { limit: 1000 },
        },
      }
    ]
  }
};
```

## Babel

When using babel we need to add a `.babelrc` file for it to
transpile our code correctly.

## React

### Single Page Apps

Single Page Apps (SPAs) have one HTML file with very little content. Most of
the page is rendered and updated using JavaScript.

### Components

To better reason about our web applications its often useful to break each
page into multiple smaller views. These smaller views are called components.

In addition to being easier to reason about, these smaller components also
simplify code reuse through composition. Each component can be made up of
other components, composing a greater whole.

### JSX

JSX is HTML looking JavaScript that can be used to create React elements.
Anywhere you use JSX you must import `react`

```js
import React from 'react';

const element = <h1>My Header</h1>;
```

```js
const dogElement = (
  <dl>
    <dt>Name</dt>
    <dd>Spot</dd>

    <dt>Age</dt>
    <dd>5</dd>

    <dt>Weight</dt>
    <dd>20 lbs</dd>
  </dl>
)
```

Ultimately, JSX is JavaScript. We can evaluate JavaScript between `{}` inside of our JSX.

```js

const title = 'My Header'
const element = <h1>{title}</h1>
```

```js
const dog = {
  name: 'Spot',
  age: 5,
  weight: '20 lbs'
};

const dogElement = (
  <dl>
    <dt>Name</dt>
    <dd>{dog.name}</dd>

    <dt>Age</dt>
    <dd>{dog.age}</dd>

    <dt>Weight</dt>
    <dd>{dog.weight}</dd>
  </dl>
)
```

### Rendering React

We can render react components onto a page by selecting a node and
filling it with our react component

```js
// src/index.js
import React from 'react';
import { render } from 'react-dom';

const element = <h1>React!</h1>;

render(
  element,
  document.getElementById('root')
);
```

Typically we render a single `App` component which is responsible for
structuring our application and rendering other components.

```js
// src/index.js
import React from 'react';
import { render } from 'react-dom';
import App from './components/app';

render(
  <App />,
  document.getElementById('root')
);
```

#### React Components

React components can be written as functions that return elements.

```js
// src/components/App.js
import React from 'react'

export default function App() {
  return <h1>Hi</h1>
};
```

```js
// src/components/App.js
import React from 'react';

export default function App() {
  const dog = {
    name: 'Spot',
    age: 5,
    weight: '20 lbs'
  };

  return (
    <dl>
      <dt>Name</dt>
      <dd>{dog.name}</dd>

      <dt>Age</dt>
      <dd>{dog.age}</dd>

      <dt>Weight</dt>
      <dd>{dog.weight}</dd>
    </dl>
  );
}
```

#### React Component Composition

```js
// src/index.js
import React from 'react';
import { render } from 'react-dom';
import App from './components/app';

render(
  <App />,
  document.getElementById('root')
);
```

```js
// src/components/Header.js
import React from 'react';

export default function Header() {
  return <h1>My Dog</h1>
}
```

```js
// src/components/Dog.js
import React from 'react';

export default function Dog() {
  const dog = {
    name: 'Spot',
    age: 5,
    weight: '20 lbs'
  };

  return (
    <dl>
      <dt>Name</dt>
      <dd>{dog.name}</dd>

      <dt>Age</dt>
      <dd>{dog.age}</dd>

      <dt>Weight</dt>
      <dd>{dog.weight}</dd>
    </dl>
  )
}
```

```js
// src/components/App.js
import React from 'react';
import Header from './Header';
import Dog from './Dog';

export default function App() {
  return (
    <>
      <Header />
      <Dog />
    </>
  )
}
```

### Snapshot Testing

Snapshot tests will store the HTML that a component creates inside
a file. We can then check the file to make sure that the resulting
HTML is what we expect. Going forward, anytime the HTML that our
component creates changes our test will fail.

```js
import React from 'react';
import { shallow } from 'enzyme';
import Dog from './Dog';

describe('Dog component', () => {
  it('renders a Dog', () => {
    const wrapper = shallow(<Dog />);
    expect(wrapper).toMatchSnapshot();
  });
});
```
