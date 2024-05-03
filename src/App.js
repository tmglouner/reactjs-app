import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to my react application
        </p>
        <a
          className="App-link"
          href="https://thomasglouner.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </header>
    </div>
  );
}

export default App;
