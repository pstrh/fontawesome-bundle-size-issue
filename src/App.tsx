import React from 'react';
import { ReactComponent as Logo } from './logo.svg';
//import { ReactComponent as FontAwesomeCoffee } from './coffee.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const fontAwesomeCoffee = <FontAwesomeIcon icon={faCoffee} />;
//const fontAwesomeCoffee = <FontAwesomeCoffee style={{overflow: "visible", width: "1.25em", display: "inline-block", fontSize: "inherit", height: "1em"}}/>

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Logo className="App-logo" />
        {fontAwesomeCoffee}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
    </div>
  );
}

export default App;
