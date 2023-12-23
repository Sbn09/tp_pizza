import "./App.css";
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';


function App() {

  const [pizzaBase, setpizzaBase] = useState('Rossa');
  const [filteredPizzas, setFilteredPizzas] = useState([]);
  const [showAllPizzas, setShowAllPizzas] = useState(false);
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

  function showAllPizzasHandler() {
    setShowAllPizzas((prevShowAll) => !prevShowAll);
  }

  useEffect(() => {
    if (showAllPizzas) {
      setFilteredPizzas(allPizzas);
    } else {
      const filtered = allPizzas.filter((pizza) => pizza.color === pizzaBase.toLowerCase());
      setFilteredPizzas(filtered);
    }
  }, [pizzaBase, showAllPizzas]);

  return (
  <>
  <header>
    <a href="#"> <h1>Pizza Napoli</h1></a>
    <img className="header-img" src="pizza.png"></img>
  </header>
  <main>
    <h2> {pizzaBase === 'Rossa' ? 'Pizzas à base de sauce tomate' : 'Pizzas sans sauce tomate' } </h2>
    <button onClick={showAllPizzasHandler}> Affichez les pizzas</button>
    <button onClick={whenBaseButtonIsClicked}>{pizzaBase === 'Rossa' ? 'Pizzas à base de sauce tomate' : 'Pizzas sans sauce tomate' }</button>
    <ul>
      {filteredPizzas.map(pizza => (
        <li key={uuidv4()}>{pizza.name}</li>
      ))}
    </ul>
  </main>
  </>
  )
}


export default App;

