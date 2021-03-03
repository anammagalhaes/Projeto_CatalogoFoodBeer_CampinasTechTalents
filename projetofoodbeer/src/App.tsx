import React from 'react'
import './App.css';

import Beer from './Components/Beer'
import Foods from './Components/Foods';


function App() {
  return (
    <div className="App">
      <Foods /> 
      <Beer />
    </div>
  );
}

export default App;