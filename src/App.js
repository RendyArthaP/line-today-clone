import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Bookmark from './pages/Bookmark';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/bookmark">
            <Bookmark />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
