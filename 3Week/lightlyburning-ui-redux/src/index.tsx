import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// the only time you see the render function
ReactDOM.render(//this render function takes a react component and ties that component to a node in the html
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
  document.getElementById('root')
);//take compoennt called app and tie it to the html node that has the id of root

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
