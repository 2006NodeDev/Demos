import React, { useState } from 'react';
import './App.css';
import { FirstComponent } from './components/FirstComponent/FirstComponent';
import { TitleComponent } from './components/TitleComponent/TitleComponent';
import { FancyBorder } from './components/FancyBorderComponent/FancyBorderComponent';
import { NavBarComponent } from './components/NavBarComponent/NavBarComponent';
import { ClickerComponent } from './components/ClickerComponent/ClickerComponent';
import { LoginComponent } from './components/LoginComponent/LoginComponent';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { User } from './models/User';
import { UserDisplayComponent } from './components/UserDisplayComponent/UserDisplay';
import { ProfileComponent } from './components/ProfileComponent/ProfileComponent';
import { AllUsersComponent } from './components/AllUserComponent/AllUsersComponent';
import { MakeUserComponent } from './components/MakeUserComponent/MakeUserComponent';

// this is the first and highest component in the hierarchy 
// the root level component
// every other component we make we will put into APP somewhere ( if doing SPA )
function App() {
  const [currentUser, changeCurrentUser] = useState<null | User>(null)
  return (
    <div className="App">
      {/* //this is the root level tag that allows us to do routing in the first place */}

      <Router>
        {/* the router component has no display elements, its only purpose is to manage the data and functionality of routing */}
        <NavBarComponent user={currentUser}/>
        {/* if the path in the route matches the path in the url of the browser
        render the component */}
        <Route path='/first'>
          <FirstComponent />
        </Route>

        {/* this is how you use a component in react
          just like any other html tag */}
        <Route path='/clicker'>
          {/* With route, we can supply the component to render as a child */}
          <FancyBorder>
            <ClickerComponent user={currentUser}/>
          </FancyBorder>
        </Route>
        <Route path='/title' render={(props) => (
          // we are making an anonymous react component using the render field
          //this gives the best of both world, we can make complicated component combos and give them router props
          <FancyBorder  {...props} >
            {/* by spreading props above, we supply history location and match to the fancyborder */}
            {/* fancy border is acting as a container component */}
            <TitleComponent title={'Now We are Cooking with Props'} size='large' />
            {/* title component is the "data" being held and displayed in the container component */}
          </FancyBorder>)} />
        {/* with route we can use the component property to specify what should be rendered
         we get passed in as props, history, location and match, but we can't set any of our own props*/}
        <Route path='/login' render={(props)=>(<LoginComponent changeCurrentUser={changeCurrentUser} {...props} />)} />
        <Route path='/profile/:userId' component={ProfileComponent}/>
        <Route path='/users' component={AllUsersComponent}/>
        <Route path='/new' component={MakeUserComponent}/>
      </Router>

    </div>
  );
}

export default App;
