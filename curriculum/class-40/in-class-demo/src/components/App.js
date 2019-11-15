import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from './Header';
import Home from '../pages/Home';
import VideoDetailPage from '../pages/VideoDetailPage';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/videos/:videoId" component={VideoDetailPage} />
      </Switch>
    </Router>
  );
}
  
