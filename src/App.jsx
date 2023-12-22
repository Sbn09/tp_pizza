import "./App.css";
import React from 'react';
import { useState } from 'react';


function App() {

  const [pizzaBase, setpizzaBase] = useState('Rossa');

  function whenBaseButtonIsClicked () {
    console.log(pizzaBase);
    if (pizzaBase === 'Rossa') {
      setpizzaBase('Bianca')
    }
    else{
      setpizzaBase('Rossa');
    }
  }

  return (
  <>
  <header>
    <a href="#"> <h1>Pizza Napoli</h1></a>
    <img className="header-img" src="pizza.png"></img>
  </header>
  <main>
    <button onClick={whenBaseButtonIsClicked}>{pizzaBase}</button>
  </main>
  </>
  )
}


export default App;

