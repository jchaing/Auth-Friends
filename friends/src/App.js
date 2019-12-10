import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from '../src/components/Login'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Auth Friends</h1>
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </header>
      </div>
    </Router>
  );
}

export default App;
