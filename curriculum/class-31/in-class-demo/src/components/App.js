import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from './Home';
import About from './About';
import NotFound from './NotFound';
import Form from './Form';
import Header from './Header';

// Router()
//   .get('/home', (req, res, next) => {
//     res.send('Home');
//   });

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Form} />
        <Route path="/about/:name" component={About} />
        <Route path="/" component={NotFound} />
      </Switch>
    </Router>
  );
}
