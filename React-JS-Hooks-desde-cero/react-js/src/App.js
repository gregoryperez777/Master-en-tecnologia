import React from 'react';
import './App.css';
import Loading from './components/Loading';

function App() {
  return (
    <div className="App">
      <h1>Mi App</h1> 
      <Loading text="99%"/> 
      <Loading text="Cargando ..."/>   
    </div>
  );
}

export default App;
