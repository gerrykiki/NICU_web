import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Layoutframe from './Layout/Layout'

function App() {
  return (
    < div >
      <Route path="/Main" component={Layoutframe} />
    </div >
  );
}

export default App;
