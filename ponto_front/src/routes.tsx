import React from 'react';
import {Routes, Route, Navigate, Outlet, BrowserRouter as Router} from "react-router-dom";
import {Home, Ponto} from './pages';
import { isAuthenticated } from './utils';

const Protected = ( {redirecTo}:any ) => {
  let autenticado = isAuthenticated()
  return autenticado ? <Outlet /> : <Navigate to={redirecTo} />
}

export const Apps: React.FC = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home/>} />

            <Route element={< Protected redirecTo='/' />}>
              <Route path="/ponto" element={<Ponto/>} />
            </Route>
            
        </Routes>
    </Router>
    
  );
};
