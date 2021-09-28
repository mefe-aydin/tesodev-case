import './App.css';
import React from 'react';
import LandingPage from './container/LandingPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Listpage from './container/ListPage';
function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/" component={LandingPage}></Route>
          <Route exact path="/listpage" component={Listpage}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
