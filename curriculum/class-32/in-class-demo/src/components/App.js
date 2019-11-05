import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import HabitTracker from '../containers/HabitTracker';
import HabitQuote from '../containers/HabitQuote';
import Header from './Header';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HabitTracker} />
        <Route not path="/progress/:progress" component={HabitQuote} />
      </Switch>
    </Router>
  );
}
