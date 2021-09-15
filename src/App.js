import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>Hola que tal</h1>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione recusandae voluptas aut cumque, voluptates explicabo incidunt, magni minima molestiae eligendi ullam tempore vitae ea. Quae, doloribus? Modi aspernatur quaerat necessitatibus!</p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
