import './App.css';
import React, { useEffect, useState, useRef } from 'react';
import { PrimerComponente } from './components/PrimerComponente';
import { SegundoComponente } from './components/SegundoComponente';
import { TercerComponente } from './components/TercerComponente';

function App() {
  const [apiData, setApiData] = useState([]);
  const handleDataUpload = (data) => {
    // Esta función se llama cuando se cargan datos en la API
    // Aquí puedes realizar cualquier acción adicional si es necesario
    // Luego, actualiza el estado apiData para desencadenar la recarga de la tabla.
    setApiData([...apiData, data]);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>API VideoJuegos</h1>
        <PrimerComponente/>
        <SegundoComponente upload={handleDataUpload} />
        <TercerComponente  apiData={apiData}/>
      </header>
    </div>
  );
}

export default App;


/* React
Incorporar funcionalidades para obtener datos de una API web, mostrarlos en una tabla o lista, agregar y modificar alguna entidad sencilla (2 atributos como mínimo) con componentes independientes.
Sugerencias: create-react-app, hook useState, hook useForm, yup, axios, pokeapi.co, jsonplaceholder.typicode.com.
*/