import logo from './logo.svg';
import './App.css';
import './Views/Signin/SignIn'
import { useHistory } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <script src='https://meet.jit.si/external_api.js'></script>
    </div>
  );
}

export default App;
