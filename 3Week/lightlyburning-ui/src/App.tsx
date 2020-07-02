import React from 'react';
import './App.css';
import { FirstComponent } from './components/FirstComponent/FirstComponent';
import { TitleComponent } from './components/TitleComponent/TitleComponent';
import { FancyBorder } from './components/FancyBorderComponent/FancyBorderComponent';
import { NavBarComponent } from './components/NavBarComponent/NavBarComponent';
import { ClickerComponent } from './components/ClickerComponent/ClickerComponent';
import { LoginComponent } from './components/LoginComponent/LoginComponent';

// this is the first and highest component in the hierarchy 
// the root level component
// every other component we make we will put into APP somewhere ( if doing SPA )
function App() {
  return (
    <div className="App">
      <NavBarComponent/>

      <FirstComponent />
      {/* this is how you use a component in react
      just like any other html tag */}
      <FancyBorder>
        <ClickerComponent/>
      </FancyBorder>
      <FancyBorder>
        {/* fancy border is acting as a container component */}
        <TitleComponent title={'Now We are Cooking with Props'} size='large' />
        {/* title component is the "data" being held and displayed in the container component */}
      </FancyBorder>
      <LoginComponent/>
    </div>
  );
}

export default App;
