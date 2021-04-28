import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from './components/Main';

 class App extends React.Component{

   render(){
    return(
      <Router>
        <Route exact path="/">
          <Main />
        </Route>
      </Router>
    );  
    }
 }

export default App;