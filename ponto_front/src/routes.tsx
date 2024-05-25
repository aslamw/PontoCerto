import React from 'react';
import {Routes, Route, Navigate, Outlet, BrowserRouter as Router} from "react-router-dom";
import {Home} from './pages';

export const Apps: React.FC = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home/>} />
        </Routes>
    </Router>
    
  );
};
