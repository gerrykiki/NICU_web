import React from 'react';
import './App.css';
import { renderRoutes } from 'react-router-config'
import rotes from './Layout/Routes'

function App() {
  return (
    < div >
      {/* child routes won't render without this */}
      {renderRoutes(rotes)}
    </div >
  );
}

export default App;
