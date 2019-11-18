import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import DisplayCards from '../containers/DisplayCards';
import DisplayCardDetail from '../containers/DisplayCardDetail';
import Header from './Header';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={DisplayCards} />
        <Route path="/cards/:id" component={DisplayCardDetail} />
      </Switch>
    </Router>
  );
}
  
