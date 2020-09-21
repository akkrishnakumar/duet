import React from 'react';
import './App.css';
import { BrowserRouter, Redirect, Switch, Route } from 'react-router-dom';
import SignIn from './Components/SignIn/SignIn';
import Duets from './Containers/Duets/Duets'

export default function App() {

  const loadComponent = () =>
    !sessionStorage.getItem('user') ?
      <Redirect to="login"></Redirect> :
      <Redirect to="/pairing"></Redirect>

  console.log('uid', sessionStorage.getItem('user'))

  return (
    <BrowserRouter>
      <div className="App">
        {loadComponent()}
        <Switch>
          <Route path="/login"> <SignIn /> </Route>
          <Route path="/"> <Duets /> </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )

}