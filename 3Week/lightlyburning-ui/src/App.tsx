import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FirstComponent } from './components/FirstComponent/FirstComponent';
import { TitleComponent } from './components/TitleComponent/TitleComponent';
import { FancyBorder } from './components/FancyBorderComponent/FancyBorderComponent';

// this is the first and highest component in the hierarchy 
// the root level component
// every other component we make we will put into APP somewhere ( if doing SPA )
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      <FirstComponent />
      {/* this is how you use a component in react
      just like any other html tag */}
      <FancyBorder>
        <h3>NOW WE ARE REACT DEVS</h3>
      </FancyBorder>
      <FancyBorder>
        {/* fancy border is acting as a container component */}
        <TitleComponent title={'Now We are Cooking with Props'} size='large' />
        {/* title component is the "data" being held and displayed in the container component */}
      </FancyBorder>
    </div>
  );
}

export default App;
