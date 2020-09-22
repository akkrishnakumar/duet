import React from 'react';
import './App.css';
import { BrowserRouter, Redirect, Switch, Route } from 'react-router-dom';
import SignIn from './Components/SignIn/SignIn';
import Duets from './Containers/Duets/Duets';

export default function App() {

  const authenticate = () =>
    !sessionStorage.getItem('user') ?
      <Redirect to="login"></Redirect> :
      <Duets />


  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/login" exact> <SignIn /> </Route>
          <Route path="/"> {authenticate()} </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )

}