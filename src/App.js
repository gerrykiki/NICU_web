import React from 'react';
import './App.css';
import { renderRoutes } from 'react-router-config'
import route from './Layout/Routes'
import Layoutframe from './Layout/Layout'

function App() {
  return (
    < div >
      <Layoutframe></Layoutframe>
    </div >
  );
}

export default App;
