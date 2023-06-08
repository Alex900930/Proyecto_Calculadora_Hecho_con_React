import './App.css';
import Boton from './components/Boton';
import Pantalla from './components/Pantalla';
import BotonClear from './components/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {
 
  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  }

  const calcularResultado = () => {
    if(input && input !== '+' && input !== '-' && input !== '*' && input !== '/' && isNaN(input)){
      setInput(evaluate(input));
    } else {
      alert("PorFavor ingrese valores para realizar calculos validos");
      setInput('');
    }
    
  }

  return (
  <div className="App">
    <div className="Titulo_Aplicacion">
      <h1 className='titulo'>"Proyecto Calculadora"</h1>
    </div>
    <div className='contenedor-calculadora'>
      <Pantalla input={input}/>
      <div className='fila'>
        <Boton manejarClick={agregarInput}>1</Boton>
        <Boton manejarClick={agregarInput}>2</Boton>
        <Boton manejarClick={agregarInput}>3</Boton>
        <Boton manejarClick={agregarInput}>+</Boton>
      </div>
      <div className='fila'>
      <Boton manejarClick={agregarInput}>4</Boton>
      <Boton manejarClick={agregarInput}>5</Boton>
      <Boton manejarClick={agregarInput}>6</Boton>
      <Boton manejarClick={agregarInput}>-</Boton>
      </div>
      <div className='fila'>
      <Boton manejarClick={agregarInput}>7</Boton>
      <Boton manejarClick={agregarInput}>8</Boton>
      <Boton manejarClick={agregarInput}>9</Boton>
      <Boton manejarClick={agregarInput}>*</Boton>
      </div>
      <div className='fila'>
      <Boton manejarClick={calcularResultado}>=</Boton>
      <Boton manejarClick={agregarInput}>0</Boton>
      <Boton manejarClick={agregarInput}>.</Boton>
      <Boton manejarClick={agregarInput}>/</Boton>
      </div>
      <div className='fila'>
        <BotonClear manejarClear={() => setInput('')}>Clear</BotonClear>
      </div>
    </div>
  </div>
  );
}

export default App;
