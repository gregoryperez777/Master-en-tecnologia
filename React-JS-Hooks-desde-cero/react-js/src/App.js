import React from 'react';
import { ReactComponent as ReactLogo } from './assets/react.svg';
 
function App() {
  return (
    <div className="App">
      <h1>Mi App</h1>
      <ReactLogo style={{ width: '100%', height: '500px' }}/>
    </div>
  );
}

export default App;
