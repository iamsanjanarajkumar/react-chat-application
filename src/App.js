import React from 'react';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Home from './components/default/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Pnf from './components/default/Pnf';

function App(props){
  return(
    <BrowserRouter>
       <Routes>
          <Route path={`/`} element={<Home/>}/>
          <Route path={`/login`} element={<Login/>}/>
          <Route path={`/register`} element={<Register/>}/>
          <Route path={`/*`} element={<Pnf/>}/>
       </Routes>
    </BrowserRouter>
  )
}

export default App