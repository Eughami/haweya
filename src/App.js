import React from 'react';
import { BrowserRouter as Router, Switch,/*Route, Redirect Link*/ } from "react-router-dom";

import PrivateRoute from './components/PrivateRoute' 
import PublicRoute from './components/PublicRoute' 
import LoginForm from './components/loginForm'
import Homepage from './components/homepage';

import Letter from './components/letter';
import BooVideo from './components/BooVideo';
import BooImges from './components/BooImges';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

class App extends React.Component {
  
  render(){
    return (
      <div className="App">
        <Router>
          <Switch>
            <PublicRoute restricted={true} component={LoginForm} path="/login" exact />
            <PrivateRoute component={Homepage} exact path="/"  />
            <PrivateRoute component={Letter} exact path="/letter"  />
            <PrivateRoute component={BooVideo} exact path="/video"  />
            <PrivateRoute component={BooImges} exact path="/images"  />
            {/* <PrivateRoute component={Homepage} path="/"  /> */}
          </Switch>
        </Router>
      </div>  
    );
  }
}

export default App;
