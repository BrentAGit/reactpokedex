import React from 'react'
import './style.css';

import Header from './Components/Header'
import Pokedex from './Components/Pokedex';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Pokedex />
    </div>
  );
}
