import React from 'react';
import './App.css';
import Bienvenidos from './componentes/bienvenidos/bienvenidos.js';
import Titulo from './componentes/Titulo/titulo.js';

const App = () => {
  return (
    <div className="App">
      
      <div><Bienvenidos/></div>      
      <div><Titulo/></div>

    </div>
    

  );
}

export default App;
