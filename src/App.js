import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import SignIn from './Components/SignIn/SignIn';
import Duets from './Containers/Duets/Duets'

export default function App() {

  const loadComponent = () =>
    !sessionStorage.getItem('user') ? <SignIn /> : <Duets />

  console.log('uid', sessionStorage.getItem('user'))

  return (
    <BrowserRouter>
      <div className="App">
        {loadComponent()}
      </div>
    </BrowserRouter>
  )

}