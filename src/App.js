import './App.css';
import { PrimerComponente } from './components/PrimerComponente';
import { SegundoComponente } from './components/SegundoComponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hola mundo</p>
        <PrimerComponente/>
        <SegundoComponente/>
      </header>
    </div>
  );
}

export default App;
