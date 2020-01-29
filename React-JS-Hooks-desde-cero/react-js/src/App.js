import React from 'react';
import './App.css';
import Loading from './components/Loading';

function App() {

  const textObj = {
    title: 'Terminando Ejecusion',
    time: 57,  
  };

  return (
    <div className="App">
      <h1>Mi App</h1> 
      <Loading data={textObj} /> 
    </div>
  );
}

export default App;
