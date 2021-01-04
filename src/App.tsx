import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { LoginComponent } from './components/login/login' 

import 'bootstrap/dist/css/bootstrap.css';

function App() {
    return (
      <Router>
        <div>
            <Switch>
                <Route exact={true} path="/" component={LoginComponent} />
            </Switch>
        </div>
    </Router>
    );
}

export default App;
