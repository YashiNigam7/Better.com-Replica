import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about-us" component={AboutUs} />
      </Switch>
    </Router>
  );
}

export default App;
