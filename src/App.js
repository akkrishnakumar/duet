import React from 'react';
import './App.css';
import SignIn from './Components/SignIn/SignIn';
import Duets from './Containers/Duets/Duets'

export default function App() {

  const loadComponent = () => {
    if (sessionStorage.getItem('uID') !== '1') return <SignIn />
    else return <Duets />
  }

  console.log('uid', sessionStorage.getItem('uID'))

  return (
    <div className="App">
      {loadComponent()}
    </div>
  )

}