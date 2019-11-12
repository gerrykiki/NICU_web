import React from 'react';
import Homepage from './Homepage'
import './App.css';
import { BrowserRouter ,Route,Redirect} from 'react-router-dom';
import Layoutframe from './Layout/Layout'
import Loginview from './Layout/Loginview'


function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Homepage} />
      <Redirect from={'/'} to={"/login"} />
      <Route path="/nicu" component={Layoutframe} />
      <Route path="/login" component={Loginview} />
    </BrowserRouter> 
  );
}

export default App;
