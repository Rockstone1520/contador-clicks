import './App.css';
import {Contador} from "./componentes/Contador"
import {Boton} from "./componentes/Boton"
import logo from "./imagenes/logoFree.png"
import { useState } from 'react';

function App() {
  
  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(numClicks + 1)
  }

  const reiniciarContador = () => {
    setNumClicks(0)
  }

  return (
    <div className="App">
      <div className='contenedor-logo'>
        <img className='logo' src={logo} alt="Logo de Freecamp"/>
      </div>
      <div className='contenedor-principal'>
        <Contador
          cuenta={numClicks}
        />
        <Boton
          texto="Click"
          esBotonClick={true}
          manejarClick={manejarClick}
        />
        <Boton
          texto="Reiniciar"
          esBotonClick={false}
          manejarClick={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
