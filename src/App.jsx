import "./App.css";
import React from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


function App() {

  const [pizzaBase, setpizzaBase] = useState('Rossa');
  const allPizzas = [{
    id : 1,
    name : 'Margherita',
    color : 'rossa'
  },
  {
    id : 2,
    name : 'Marinara',
    color : 'rossa'
  },
  {
    id : 3,
    name : 'Quattro Formaggi',
    color : 'bianca'
  }
  ];

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
    <h2> {pizzaBase === 'Rossa' ? 'Pizzas à base de sauce tomate' : 'Pizzas sans sauce tomate' } </h2>
    <p> Affichez les pizzas</p>
    <button onClick={whenBaseButtonIsClicked}>{pizzaBase === 'Rossa' ? 'Pizzas à base de sauce tomate' : 'Pizzas sans sauce tomate' }</button>
    <ul>
      {allPizzas.map(pizza => (
        <li key={uuidv4()}>{pizza.name}</li>
      ))}
    </ul>
  </main>
  </>
  )
}


export default App;

