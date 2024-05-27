import React from 'react';
import {Routes, Route, Navigate, Outlet, BrowserRouter as Router} from "react-router-dom";
import {Home, Ponto} from './pages';

export const Apps: React.FC = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/ponto" element={<Ponto/>} />
        </Routes>
    </Router>
    
  );
};
