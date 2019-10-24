import React from 'react';
import './App.css';
import { renderRoutes } from 'react-router-config'
import { Loginroutes } from './Layout/Routes'
import Layoutframe from './Layout/Layout'
import { Redirect, Link } from 'react-router-dom'

function App() {
  console.log("app view")
  return (
    <div>
      <Redirect from={"/"} to={"/login"} />
      <Loginroutes></Loginroutes>
    </div>
  );
}

export default App;
