import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Esta es la primera entrega, <code>el codigo</code> será editado próximamente.
        </p>
        <a
          className="App-link"
          href="https://github.com/Adn1217/React_MarketPlace"
          target="_blank"
          rel="noopener noreferrer"
        >
           Repositorio donde se encontrará mi aplicación de mercado en línea en <strong>React</strong>.
        </a>
      </header>
    </div>
  );
}

export default App;
