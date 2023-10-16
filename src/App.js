import './App.css';
import { PrimerComponente } from './components/PrimerComponente';
import { SegundoComponente } from './components/SegundoComponente';
import { TercerComponente } from './components/TercerComponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>API VideoJuegos</h1>
        <PrimerComponente/>
        <SegundoComponente/>
        <TercerComponente/>
      </header>
    </div>
  );
}

export default App;


/* React
Incorporar funcionalidades para obtener datos de una API web, mostrarlos en una tabla o lista, agregar y modificar alguna entidad sencilla (2 atributos como mínimo) con componentes independientes.
Sugerencias: create-react-app, hook useState, hook useForm, yup, axios, pokeapi.co, jsonplaceholder.typicode.com.
*/